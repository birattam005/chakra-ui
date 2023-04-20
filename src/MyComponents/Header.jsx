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
  Input,
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
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
        placement="left"
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Create your account</DrawerHeader>

          <DrawerBody>
            <Input placeholder='Type here...' />
          </DrawerBody>

          <DrawerFooter>
            <Button variant='outline' mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme='blue'>Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
  </>
  )
}

export default Header
