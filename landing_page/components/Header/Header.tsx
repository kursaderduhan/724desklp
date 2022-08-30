import React, { memo, ReactText } from 'react'
import {
  Flex,
  Button,
  Link,
  useBreakpointValue,
  useDisclosure,
  Image,
  FlexProps
} from '@chakra-ui/react'
import {RiVipDiamondLine} from 'react-icons/ri'

export const Header = () => {
  const { isOpen, onToggle } = useDisclosure()

  return (
    <Flex
      bg={'dark.100'}
      color={'light.100'}
      minH={'60px'}
      py={{ base: 2 }}
      px={10}
      align={'center'}
      w={'full'}
    >
      <Flex flex={{ base: 1 }} justifyContent={'space-between'}>
        <Image alt={'DeskIcon'} src={'/724DeskLogo.svg'} />
        <Flex gap={35} alignItems={"center"} color={"white"}>
          {Links.map(link => (
            <NavLink key={link.key} name={link.name} link={link.link}>
              {link.name}
            </NavLink>
          ))}
        </Flex>
        <Button
          size={'md'}
          fontSize={'md'}
          fontWeight={400}
          bg={'dark.200'}
          _hover={{opacity:0.8}}
          color={'white'}
          leftIcon={<RiVipDiamondLine/>}
        >
          Join Whitelist
        </Button>
      </Flex>
    </Flex>
  )
}
export default memo(Header)

interface LinkProps<> {
  name: string
  link: string
  key: string
}

const Links: Array<LinkProps> = [
  { name: 'Home', link: '/', key: 'home' },
  { name: 'How it works', link: '', key: 'works' },
  { name: 'Features', link: '', key: 'features' },
  { name: 'Roadmap', link: '', key: 'roadmap' },
  { name: 'Token', link: '', key: 'token' },
  { name: 'Team', link: '', key: 'team' }
]

interface LinkItemProps extends FlexProps {
  name: string
  children: ReactText
  link: string
}

const NavLink = ({ children, ...rest }: LinkItemProps) => (
  <Link href={rest.link}>{children}</Link>
)