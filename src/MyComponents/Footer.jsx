import { Box,Button,HStack,Heading, Input, Stack, VStack } from '@chakra-ui/react'
import React from 'react'
import {AiOutlineSend} from 'react-icons/ai'

const Footer = () => {
  return (
    <Box 
    bgColor={'blackAlpha.900'} minH={'40'} p={'16'} color={'white'}>
        <Stack direction={['column','row']}>
            <VStack>
                <Heading size={'md'} textTransform={'uppercase'}> Subscribe to my channel
                </Heading>
                <HStack 
                    borderBottom={'2px solid white'}
                    py={'2'}
                >
                    <Input placeholder='Enter Email Here..'
                    border={'none'} borderRadius={'nonde'}
                    outline={'none'} focusBorderColor='none'/>
                    <Button 
                        p={'0'}
                        colorScheme='purple'
                        variant={'ghost'}
                        borderRadius={'0 20px 20px 0'}
                    >
                        <AiOutlineSend size={'20'} />
                    </Button>
                </HStack>
            </VStack>

            

        </Stack>

    </Box>
  )
}

export default Footer
