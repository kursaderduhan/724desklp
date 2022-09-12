import React, { memo } from 'react'
import { VStack, Button, Text } from '@chakra-ui/react'

export const Exploring = () => {
  return (
    <VStack h={600} py={100} gap={15} textStyle={"normal"}>
      <Text fontWeight={"bold"} fontSize={"38px"}>Keşfetmeye Başla</Text>
      <Text textAlign={"center"} color={"#666666"} fontSize={"sm"}>
        724Desk’in sana özel sunduğu avantajları hemen <br /> keşfetmeye başla!
      </Text>
      <Button bg={"#2C4EC6"} w={200} color={"white"} fontSize={"sm"} borderRadius={"8px"} _hover={{opacity:0.8}}>Keşfet</Button>
    </VStack>
  )
}

export default memo(Exploring)
