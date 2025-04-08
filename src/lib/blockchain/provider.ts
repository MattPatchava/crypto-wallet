import { ethers } from 'ethers';

export const provider: ethers.JsonRpcProvider = new ethers.JsonRpcProvider(
    import.meta.env.VITE_RPC_API_URL + "/" + import.meta.env.VITE_RPC_API_KEY
);

export default provider;
