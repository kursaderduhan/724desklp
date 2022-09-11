import React, { memo } from 'react'
import { VStack, Button, Text } from '@chakra-ui/react'

export const Exploring = () => {
  return (
    <VStack h={500} py={20} gap={15} textStyle={"normal"}>
      <Text fontWeight={"bold"} textStyle={"headText"}>Keşfetmeye Başla</Text>
      <Text textAlign={"center"}>
        724Desk’in sana özel sunduğu avantajları hemen <br /> keşfetmeye başla!
      </Text>
      <Button colorScheme={"blue"} w={200}>Başla!</Button>
    </VStack>
  )
}

export default memo(Exploring)
