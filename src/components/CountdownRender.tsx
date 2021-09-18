import { Box, Stack, Text, Heading } from '@chakra-ui/react';

const CountdownRender = ({ days, hours, minutes, seconds, completed }: any) => {
  return (
    <Stack p={1} align="center" boxShadow="2xl" rounded="3xl" bgColor="white">
      <Stack
        p={3}
        boxShadow="2xl"
        rounded="3xl"
        bgColor="midnightblue"
        direction="row"
        align="center"
        spacing={2}
        mb={0}
      >
        <Stack bgColor="" direction="row">
          <Box
            border="solid 2px"
            rounded="3xl"
            bgColor="midnightblue"
            textColor="white"
            textAlign="center"
            p={1}
            fontSize={{ base: '30px', sm: '40px', md: '80px' }}
          >
            <Text>{days < 10 ? `0${days}` : days}</Text>
            <Text fontSize="md">days</Text>
          </Box>
        </Stack>
        <Text textColor="white" fontSize="xx-large">
          :
        </Text>
        <Stack direction="row" align="center">
          <Box
            border="solid 2px"
            rounded="3xl"
            bgColor="midnightblue"
            textColor="white"
            textAlign="center"
            p={1}
            fontSize={{ base: '30px', sm: '40px', md: '80px' }}
          >
            <Text>{hours < 10 ? `0${hours}` : hours}</Text>
            <Text fontSize="md"> hours</Text>
          </Box>
        </Stack>
        <Text textColor="white" fontSize="xx-large">
          :
        </Text>
        <Stack direction="row" align="center">
          <Box
            border="solid 2px"
            rounded="3xl"
            bgColor="midnightblue"
            textColor="white"
            textAlign="center"
            p={1}
            fontSize={{ base: '30px', sm: '40px', md: '80px' }}
          >
            <Text>{minutes < 10 ? `0${minutes}` : minutes}</Text>
            <Text fontSize="md">mins</Text>
          </Box>
        </Stack>
        <Text textColor="white" fontSize="xx-large">
          :
        </Text>
        <Stack direction="row" align="center">
          <Box
            border="solid 2px"
            rounded="3xl"
            bgColor="midnightblue"
            textColor="white"
            textAlign="center"
            p={1}
            fontSize={{ base: '30px', sm: '40px', md: '80px' }}
          >
            <Text>{seconds < 10 ? `0${seconds}` : seconds}</Text>
            <Text fontSize="md">secs</Text>
          </Box>
        </Stack>
      </Stack>
      <Stack>
        <Heading fontSize={{ base: '1xl', md: '2xl' }} textColor="midnightblue">
          {!completed ? 'Mint? Just In A Bit.' : 'Get You Candy🍬'}
        </Heading>
      </Stack>
    </Stack>
  );
};

export default CountdownRender;
