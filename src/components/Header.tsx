import { Flex, Heading } from '@chakra-ui/react';

function Header(): JSX.Element {
    return (
        <Flex px={4} py={2} shadow="md" align="center" justify="space-between">
            <Heading>Crypto Wallet</Heading>
        </Flex>
    );
}

export default Header;
