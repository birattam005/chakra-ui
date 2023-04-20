import React from 'react'

import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
 
  VStack,
  HStack,
} from '@chakra-ui/react' 

import {Link  } from "react-router-dom";
import { BiMenuAltLeft } from "react-icons/bi";

const Header = () => {

     const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()


  return (
  <>
    <Button pos={'fixed'} top={'4'} left={'4'} colorScheme='purple' p={'0'} w={'10'} h={'10'} borderRadius={'full'} onClick={onOpen}>
        <BiMenuAltLeft size={'20'}/>
    </Button>

    <Drawer
        isOpen={isOpen}
        placement='left'
        onClose={onClose}
        finalFocusRef={btnRef}
        
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>VIDEO HUB</DrawerHeader>

          <DrawerBody>

            <VStack alignItems={'flex-start'}>

            <Button variant={'ghost'} colorScheme='purple'>
                <Link to={'/'}>Home</Link>
            </Button>

            <Button variant={'ghost'} colorScheme='purple'>
                <Link to={'/videos'}>Videos</Link>
            </Button>

            <Button variant={'ghost'} colorScheme='purple'>
                <Link to={'/videos?category'}>Free Videos</Link>
            </Button>

            <Button variant={'ghost'} colorScheme='purple'>
                <Link to={'/upload'}>Upload Video</Link>
            </Button>

            </VStack>

            <HStack pos={'absolute'} bottom={'10'} left={'0'} width={'full'} justifyContent={'space-evenly'}>

                    <Button colorScheme='purple'>
                        <Link > Log In</Link>
                    </Button>

                    <Button colorScheme='purple' variant={'outline'}>
                        <Link >Sign Up</Link>
                    </Button>

            </HStack>

          </DrawerBody>

          <DrawerFooter>
            
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
  </>
  )
}

export default Header
