import { useState, useEffect } from 'react';
import { Box, Stack, Button, Input, Text } from '@chakra-ui/react';
import provider from '@/lib/blockchain/provider';
import { BrowserProvider, formatEther } from 'ethers';

type PricesProp = {
    prices: {
        eth: BigNumber;
        btc: BigNumber;
        sol: BigNumber;
    }
} | null;

function WalletBalanceViewer({ prices }: PricesProp): JSX.Element {

    const [address, setAddress] = useState<string>("");
    const [hasWallet, setHasWallet] = useState<boolean>(false);
    const [walletProvider, setWalletProvider] = useState<BrowserProvider | null>(null);
    const [signer, setSigner] = useState<JsonRpcSigner | null>(null);
    const [userBalance, setUserBalance] = useState<BigNumber>(null);
    const [addressSource, setAddressSource] = useState<"metamask" | "manual" | null>(null);
    const [loading, setLoading] = useState<boolean>(false);

    async function loadWalletAddress() {
        const browserProvider = walletProvider ? walletProvider : new BrowserProvider(window.ethereum);
        if (!walletProvider)
            setWalletProvider(browserProvider);

        const fetchedSigner: JsonRpcSigner = await browserProvider.getSigner();
        setSigner(fetchedSigner);

        const metaMaskAddress = await fetchedSigner.getAddress();

        setAddress(metaMaskAddress);
        setAddressSource("metamask");
    }

    async function loadBalance() {
        setLoading(true);

        if (addressSource === "metamask") {
            const balance: BigNumber = await walletProvider.getBalance(address);
            setUserBalance(balance);

        } else if (addressSource === "manual") {
            const balance: BigNumber = await provider.getBalance(address);
            setUserBalance(balance);
        }

        setLoading(false);
    }

    useEffect(() => {
        if (window.ethereum) setHasWallet(true);
    }, []);

    return (
        <Box p={4}>
            <Stack spacing={4}>
                <Text fontSize="xl" fontWeight="bold">My Wallet</Text>

                <Stack direction="row">
                    <Input
                        placeholder="Wallet Address"
                        value={address}
                        width="auto"
                        onChange={e => {
                            setAddress(e.target.value);
                            setAddressSource("manual");
                        }}
                    />
                    <Button
                        disabled={!hasWallet}
                        onClick={() => loadWalletAddress()}
                    >Import from MetaMask</Button>
                </Stack>

                <Button
                    alignSelf="flex-start"
                    onClick={() => loadBalance()}
                    disabled={!address}
                >Load Balance</Button>
                {loading ? <Text>Loading Balance...</Text>
                : userBalance &&
                <Text>
                    <Text as="span" fontWeight="bold">Balance</Text>: {formatEther(userBalance)} ETH (${(prices.eth * parseFloat(formatEther(userBalance))).toFixed(2)} USD)
                </Text>}
            </Stack>
        </Box>
    );
}

export default WalletBalanceViewer;
