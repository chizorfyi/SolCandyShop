import {
  WalletDialogButton,
  WalletDisconnectButton,
} from '@solana/wallet-adapter-material-ui';
import { useWallet } from '@solana/wallet-adapter-react';
import React from 'react';

const ConnectButton2 = ({ addr }: any) => {
  const wallet = useWallet();
  return (
    <div>
      {wallet.connected ? (
        <WalletDisconnectButton color="secondary">
          {addr}
        </WalletDisconnectButton>
      ) : (
        <WalletDialogButton>CONNECT WALLET</WalletDialogButton>
      )}
    </div>
  );
};

export default ConnectButton2;
