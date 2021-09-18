import { Flex, Heading, Stack, Text } from '@chakra-ui/layout';
import { useWallet } from '@solana/wallet-adapter-react';
import { LAMPORTS_PER_SOL } from '@solana/web3.js';
import React, { useEffect, useState } from 'react';
import { shortenAddress } from '../candy-machine';
import ConnectButton from './ConnectButton';

const Nav = (props: any) => {
  const wallet = useWallet();

  const [balance, setBalance] = useState<number>();

  useEffect(() => {
    (async () => {
      if (wallet?.publicKey) {
        const balance = await props.connection.getBalance(wallet.publicKey);
        setBalance(balance / LAMPORTS_PER_SOL);
      }
    })();
  }, [wallet, props.connection]);

  return (
    <Flex w="full" bgColor="white" justify="center" alignItems="center" py={2}>
      <Flex
        boxShadow="lg"
        direction={{ base: 'column', sm: 'row' }}
        flexShrink="inherit"
        w="6xl"
        bgColor="white"
        justify="space-between"
        px={5}
        alignItems="center"
      >
        <Heading
          mt={1}
          textShadow=" inner 3px 3px #ff0000 "
          bgGradient="linear(to-l, #7928CA, #FF0080)"
          bgClip="text"
        >
          SolCandy 🍭
        </Heading>

        <Flex h="full" alignItems="center" my={2}>
          <Flex
            h="full"
            alignItems="center"
            justify="flex-end"
            maxW="max-content"
          >
            {wallet.connected && (
              <Stack
                direction="row"
                p={1}
                px={5}
                bgColor=""
                roundedLeft="3xl"
                border="solid 2px"
                borderColor="midnightblue"
                borderRight="0px"
              >
                <Text textColor="midnightblue">
                  {(balance || 0).toLocaleString()}
                </Text>
                <Text bgGradient="linear(to-l, #7928CA, #FF0080)" bgClip="text">
                  SOL
                </Text>
              </Stack>
            )}

            <ConnectButton
              addr={shortenAddress(wallet.publicKey?.toBase58() || '')}
            />
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Nav;
