import { Box, Container, Heading, Image, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';
import img5 from '../assets/5.png';

const headingOptions = {
  pos: 'absolute',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%,-50%)',
  textTransform: 'uppercase',
  p: '4',
  size: '4xl',
};

const Home = () => {
  return (
    <Box>

      <Mycarousel />
      <Container maxW={'container.xl'} minH={'100vh'} p={'16'}>
        <Heading
          textTransform={'uppercase'} py={'2'}
          w={'fit-content'} borderBottom={'2px solid'} m={'auto'}>
          Services</Heading>

        <Stack
          h={'full'}
          p={'4'}
          alignItems={'center'}
          direction={['column', 'row']}>
          <Image src={img5} h={['40', '400']} filter={'hue-rotate(-130deg)'} />

          <Text letterSpacing={'widest'} lineHeight={'190%'} p={['4', '16']}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere ex eaque pariatur laborum aliquam, quaerat quae in maiores voluptates, reiciendis praesentium minima veniam ullam nemo vel similique nobis voluptate itaque alias, odit consequatur amet dolor dolores. Fugit recusandae pariatur et repellat sed aliquam earum, dolor deleniti perspiciatis dolorum cum est consectetur distinctio quis. Earum quod doloremque natus explicabo saepe sequi fugiat dignissimos id quos ducimus autem provident, blanditiis officiis facere dolor, nam ex excepturi dicta. Ipsam quam exercitationem officia accusantium voluptatem soluta porro recusandae asperiores quas quidem molestias pariatur, praesentium doloremque dolore qui deserunt, dolorum quod veritatis rerum assumenda harum.
          </Text>

        </Stack>

      </Container>


    </Box>
  );
};

const Mycarousel = () => (
  <Carousel autoPlay infiniteLoop interval={1000} showStatus={false} showThumbs={false}>

    <Box w="full" h={'100vh'}>
      <Image src={img1} />
      <Heading bgColor={"blackAlpha.600"} color={"white"} {...headingOptions}> Wactch the Future</Heading>
    </Box>

    <Box w="full" h={'100vh'}>
      <Image src={img3} />
      <Heading bgColor={"whiteAlpha.600"} color={"black"} {...headingOptions}>Gaming on Console</Heading>
    </Box>

    <Box w="full" h={'100vh'}>
      <Image src={img4} />
      <Heading bgColor={"whiteAlpha.600"} color={"black"} {...headingOptions}>Night Life is cool</Heading>
    </Box>

    <Box w="full" h={'100vh'}>
      <Image src={img2} />
      <Heading bgColor={"whiteAlpha.600"} color={"black"} {...headingOptions}>Future is Gaming</Heading>
    </Box>

  </Carousel>
)
export default Home;