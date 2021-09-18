import * as anchor from '@project-serum/anchor';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';

const useCandy = () => {
  const treasury = new anchor.web3.PublicKey(
    process.env.REACT_APP_TREASURY_ADDRESS!
  );

  const config = new anchor.web3.PublicKey(
    process.env.REACT_APP_CANDY_MACHINE_CONFIG!
  );

  const candyMachineId = new anchor.web3.PublicKey(
    process.env.REACT_APP_CANDY_MACHINE_ID!
  );

  const network = process.env.REACT_APP_SOLANA_NETWORK as WalletAdapterNetwork;

  const rpcHost = process.env.REACT_APP_SOLANA_RPC_HOST!;
  const connection = new anchor.web3.Connection(rpcHost);

  const startDateSeed = parseInt(process.env.REACT_APP_CANDY_START_DATE!, 10);

  const txTimeout = 30000; // milliseconds (confirm this works for your project)

  return {
    treasury,
    config,
    network,
    candyMachineId,
    connection,
    startDateSeed,
    txTimeout,
  };
};

export default useCandy;
