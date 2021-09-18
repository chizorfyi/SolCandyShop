import { Image } from '@chakra-ui/image';
import { Box, Text, Flex, Heading, Link } from '@chakra-ui/layout';
import React from 'react';
import Countdown from 'react-countdown';
import CountdownRender from './components/CountdownRender';
import Nav from './components/Nav';
import Mint, { HomeProps } from './Mint';

const Home = (props: HomeProps) => {
  console.log('home', props.config);

  return (
    <Box>
      <Box
        minH="100vh"
        bgColor="midnightblue"
        bgGradient="linear(to-l, #7928CA, #FF0080)"
      >
        <Nav connection={props.connection} />
        <Flex
          p={4}
          flexDirection={{ base: 'column', md: 'row' }}
          bgColor="blackAlpha.700"
          alignItems="center"
          justify="center"
        >
          <Heading textAlign="center" fontSize="4xl" textColor="white">
            Get Some SolCandy
          </Heading>
          <Heading textAlign="center" px={4} fontSize="4xl" textColor="white">
            🍭🍬🍬🍭
          </Heading>
          <Heading textAlign="center" px={4} textColor="white">
            From the Shop
          </Heading>
        </Flex>
        <Flex
          direction="column"
          bgColor=""
          justify="center"
          alignItems="center"
          p={4}
        >
          <Countdown
            date={new Date(props.startDate)}
            renderer={renderCounter}
          />

          <Image
            mt={{ base: 5, md: 10 }}
            boxSize={{ base: '200px', md: '400px' }}
            src="https://images-na.ssl-images-amazon.com/images/I/61L3Mufg9yL._AC_SL1000_.jpg"
          />

          <Box my={3}>
            <Mint
              candyMachineId={props.candyMachineId}
              config={props.config}
              connection={props.connection}
              startDate={props.startDate}
              treasury={props.treasury}
              txTimeout={props.txTimeout}
            />
          </Box>
        </Flex>
        <Flex justify="center" p={3}>
          <Box
            rounded="lg"
            p={3}
            h=""
            bgColor="lavender"
            textAlign="center"
            boxShadow="lg"
          >
            <Heading textColor="midnightblue">
              How To Get Some SolCandy?
            </Heading>
            <Text>Go to your Solana wallet</Text>
            <Text>Change your network to devnet</Text>
            <Text>
              Head over to{' '}
              <Link color="teal.500" href="https://solfaucet.com">
                SolFaucet.com
              </Link>
            </Text>
            <Text>Get Some devnet tokens and Come get some candy</Text>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

const renderCounter = ({ days, hours, minutes, seconds, completed }: any) => {
  return (
    <CountdownRender
      days={days}
      hours={hours}
      minutes={minutes}
      seconds={seconds}
      completed={completed}
    />
  );
};

export default Home;
