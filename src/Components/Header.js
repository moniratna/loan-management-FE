import { ReactNode } from 'react';
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { useDispatch } from 'react-redux';
import { logout } from '../actions/userActions';

const Links = [{"title":'Home', "link":"/dash"}, {"title":'My Loans', "link":"/dash/loans"}];

const NavLink = ({ title , link}) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    href={link}>
    {title}
  </Link>
);

export default function Header({homepage}) {
    const dispatch = useDispatch()

    const Image = localStorage.getItem('Image')
    const handleLogout =()=>{
        dispatch(logout())
    }

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>

            <Box><Link href="/dash" > Loan Management</Link></Box>
            
            {!homepage? <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}>
              {Links.map((link) => (
                <NavLink key={link.title} title={link.title} link={link.link} />
              ))}
            </HStack> : null}
            
          </HStack>
          <Flex alignItems={'center'}>
            <Menu>
              <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                minW={0}>
                <Avatar
                  size={'sm'}
                  src={Image}
                />
              </MenuButton>
              <MenuList>
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
                
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
            {Links.map((link) => (
                <NavLink key={link.title} title={link.title} link={link.link} />
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}