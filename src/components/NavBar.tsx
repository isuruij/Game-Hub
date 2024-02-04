import { HStack, Image, Text } from '@chakra-ui/react'
import logo from "../assets/react.svg"


function NavBar() {
  return (
    <div>
        <HStack>
            <Image src={logo} boxSize="60px"></Image>
            <Text>Nav Bar</Text>
        </HStack>
    </div>
  )
}

export default NavBar