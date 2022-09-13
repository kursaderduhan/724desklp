import React from 'react'
import {
  Text,
  VStack,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,Container
} from '@chakra-ui/react'

export const TokenCalendar = () => {
  return (
    <VStack bgImage={'/CalendarBg.png'} bgPos={'center'} bgSize={'cover'} py={50} zIndex={1}>
      <Container maxW={"1200px"} centerContent>
      <Text fontWeight={'bold'} fontSize={'3xl'} color={"white"} alignSelf={"flex-start"}>
        Serbest Kalma Çizelgesi
      </Text>
      <Text color={"white"} alignSelf={"flex-start"} fontSize={"1xl"}>Projemizin tokeni olan Desk Token nedir? </Text>
      <TableContainer color="white" w={"full"} >
        <Table variant='striped' colorScheme='whiteAlpha' color={"white"} fontSize={"md"}>
          <Thead>
            <Tr>
              <Th color={"white"}></Th>
              <Th color={"white"}>Supply</Th>
              <Th color={"white"}>Tokens</Th>
              <Th color={"white"}>Price</Th>
              <Th color={"white"}>Public Sale</Th>
              <Th color={"white"}>Vesting</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>Seed</Td>
              <Td>3.5%</Td>
              <Td>70.000</Td>
              <Td>$0.005</Td>
              <Td>
                01/04 2022-
                <br />
                01/05/2022
              </Td>
              <Td>
                2.5% at TGE, 2 month cliff, <br /> 3.5% between months 4 <br />{' '}
                to 30, 3% on 31st month
              </Td>
            </Tr>
            <Tr>
              <Td>Strategic</Td>
              <Td>8%</Td>
              <Td>20.000.000</Td>
              <Td>$0.014</Td>
              <Td>
                01/04/2022-
                <br />
                01/05/2022
              </Td>
              <Td>
                5% at TGE, 1 month cliff,
                <br /> 4% between months 3 to <br />
                25,3% on 26th month
              </Td>
            </Tr>
            <Tr>
              <Td>Private</Td>
              <Td>7%</Td>
              <Td>10.000.000</Td>
              <Td>$0.017</Td>
              <Td>
                01/04/2022-
                <br />
                01/05/2022
              </Td>
              <Td>
                7.5% at TGE, 1 month cliff,
                <br /> 5% between months 3 to <br />
                20,2.5% on 21th month
              </Td>
            </Tr>
            <Tr>
              <Td>Community Round (public)</Td>
              <Td>2.5%</Td>
              <Td>40.000.000</Td>
              <Td>$0.018</Td>
              <Td>
                01/04/2022-
                <br />
                01/05/2022
              </Td>
              <Td>
                10% at TGE, 6 month linear <br />
                vesting
              </Td>
            </Tr>
            <Tr>
              <Td>P2E, Staking</Td>
              <Td>31%</Td>
              <Td>20.000.000</Td>
              <Td>-</Td>
              <Td>
                01/04/2022-
                <br />
                01/05/2022
              </Td>
              <Td>
                50% at TGE, 50% at <br /> second month
              </Td>
            </Tr>
            <Tr>
              <Td color={"transparent"}></Td>
              <Td color={"orange"}>Total tokens:</Td>
              <Td color={"orange"}>100.000.000</Td>
              <Td color={"transparent"}></Td>
              <Td color={"transparent"}></Td>
              <Td color={"transparent"}></Td>
            </Tr>
          </Tbody>
        </Table>
        </TableContainer>
        </Container>
    </VStack>
  )
}

export default TokenCalendar
