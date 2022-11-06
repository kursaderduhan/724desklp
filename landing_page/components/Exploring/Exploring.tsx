import React, { memo } from 'react'
import { VStack, Button, Text } from '@chakra-ui/react'
import "@fontsource/readex-pro"
export const Exploring = () => {
  return (
    <VStack h={600} pt={"120px"} pb={"285px"} textStyle={"normal"} bg={"white"} >
      <Text textStyle={"resultServiceHead"} fontFamily={"Readex Pro"} color={"black"}>Keşfetmeye Başla</Text>
      <Text textAlign={"center"} textStyle={"resultServiceText"} maxW={"448px"} pt={"4px"}>
        724Desk’in sana özel sunduğu avantajları hemen keşfetmeye başla!
      </Text>
      <Button bg={"#2C4EC6"} w={"250px"} h={"44px"} color={"white"} fontSize={"13px"} fontWeight={500} fontStyle={"normal"} lineHeight={"20px"}
      letterSpacing={"0.5px"} borderRadius={"8px"} _hover={{ opacity: 0.8 }} top={"32px"}>Keşfet</Button>
    </VStack>
  )
}

export default memo(Exploring)
