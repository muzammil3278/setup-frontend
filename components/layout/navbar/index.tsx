// import {
//   Box,
//   Flex,
//   Text,
//   IconButton,
//   Button,
//   Stack,
//   Collapse,
//   Icon,
//   Popover,
//   PopoverTrigger,
//   PopoverContent,
//   useColorModeValue,
//   useBreakpointValue,
//   useDisclosure,
// } from "@chakra-ui/react";
// import Link from "next/link";
// import {
//   CloseIcon,
//   ChevronDownIcon,
//   ChevronRightIcon,
//   HamburgerIcon,
// } from "@chakra-ui/icons";
// import Image from "next/image";
// import { motion, useAnimation } from "framer-motion";
// import { useInView } from "react-intersection-observer";
// import { useEffect } from "react";

// // bottom to up
// const btn = {
//   visible: {
//     opacity: 1,
//     x: 0,
//     transition: { duration: 1.5 },
//   },
//   hidden: {
//     opacity: 0,
//     x: 60,
//   },
// };
// export default function WithSubnavigation() {
//   const control = useAnimation();
//   const [ref, inView] = useInView();

//   useEffect(() => {
//     if (inView) {
//       control.start("visible");
//     } else {
//       control.start("hidden");
//     }
//   }, [control, inView]);
//   const { isOpen, onToggle } = useDisclosure();

//   return (
//     <div className="bg-gray-900">
//       <div className="container lg:px-4 px-2 mx-auto">
//         <Flex minH={"60px"} py={{ base: 2 }} px={{ base: 4 }} align={"center"}>
//           <Flex
//             flex={{ base: 1, md: "auto" }}
//             ml={{ base: -2 }}
//             display={{ base: "flex", md: "none" }}
//           >
//             <IconButton
//               onClick={onToggle}
//               color={useColorModeValue("gray.500", "white")}
//               icon={
//                 isOpen ? (
//                   <CloseIcon w={3} h={3} />
//                 ) : (
//                   <HamburgerIcon w={5} h={5} />
//                 )
//               }
//               variant={"ghost"}
//               aria-label={"Toggle Navigation"}
//             />
//           </Flex>
//           <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
//             <Logo />

//             <Flex
//               display={{ base: "none", md: "flex" }}
//               alignItems={"center"}
//               ml={10}
//             >
//               <DesktopNav />
//             </Flex>
//           </Flex>

//           <Stack
//             flex={{ base: 1, md: 0 }}
//             justify={"flex-end"}
//             direction={"row"}
//             spacing={6}
//           >
//             <Button
//               as={"a"}
//               fontSize={"sm"}
//               fontWeight={600}
//               color={"white"}
//               bg={"red.500"}
//               href={"#"}
//               _hover={{
//                 bg: "red.400",
//               }}
//             >
//               Sign In
//             </Button>
//           </Stack>
//         </Flex>

//         <Collapse in={isOpen} animateOpacity>
//           <MobileNav />
//         </Collapse>
//       </div>
//     </div>
//   );
// }

// const DesktopNav = () => {
//   const linkHoverColor = useColorModeValue("gray.800", "white");
//   const popoverContentBgColor = useColorModeValue("white", "gray.800");

//   return (
//     <Stack direction={"row"} spacing={4}>
//       {NAV_ITEMS.map((navItem) => (
//         <Box key={navItem.label}>
//           <Popover trigger={"hover"} placement={"bottom-start"}>
//             <PopoverTrigger>
//               <Link
//                 className="p-2 text-sm font-medium text-white hover:no-underline"
//                 href={navItem.href ?? "#"}
//               >
//                 {navItem.label}
//               </Link>
//             </PopoverTrigger>

//             {navItem.children && (
//               <PopoverContent
//                 border={0}
//                 boxShadow={"xl"}
//                 bg={popoverContentBgColor}
//                 p={4}
//                 rounded={"xl"}
//                 minW={"sm"}
//               >
//                 <Stack>
//                   {navItem.children.map((child) => (
//                     <DesktopSubNav key={child.label} {...child} />
//                   ))}
//                 </Stack>
//               </PopoverContent>
//             )}
//           </Popover>
//         </Box>
//       ))}
//     </Stack>
//   );
// };

// const DesktopSubNav = ({ label, href }: NavItem) => {
//   return (
//     <Link
//       className="block p-2 rounded-md hover:text-red-400"
//       href={href}
//       role={"group"}
//     >
//       <Stack direction={"row"} align={"center"}>
//         <Box>
//           <Text
//             transition={"all .3s ease"}
//             _groupHover={{ color: "red.400" }}
//             fontWeight={500}
//           >
//             {label}
//           </Text>
//           {/* <Text fontSize={"sm"}>{subLabel}</Text> */}
//         </Box>
//         {/* <Flex
//           transition={"all .3s ease"}
//           transform={"translateX(-10px)"}
//           opacity={0}
//           _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
//           justify={"flex-end"}
//           align={"center"}
//           flex={1}
//         >
//           <Icon color={"pink.400"} w={5} h={5} as={ChevronRightIcon} />
//         </Flex> */}
//       </Stack>
//     </Link>
//   );
// };

// const MobileNav = () => {
//   return (
//     <Stack
//       bg={useColorModeValue("white", "gray.800")}
//       p={4}
//       display={{ md: "none" }}
//     >
//       {NAV_ITEMS.map((navItem) => (
//         <MobileNavItem key={navItem.label} {...navItem} />
//       ))}
//     </Stack>
//   );
// };

// const MobileNavItem = ({ label, children, href }: NavItem) => {
//   const { isOpen, onToggle } = useDisclosure();

//   return (
//     <Stack spacing={4} onClick={children && onToggle}>
//       <Flex
//         py={2}
//         as={Link}
//         href={href ?? "#"}
//         justify={"space-between"}
//         align={"center"}
//         _hover={{
//           textDecoration: "none",
//         }}
//       >
//         <Text
//           fontWeight={600}
//           color={useColorModeValue("gray.600", "gray.200")}
//         >
//           {label}
//         </Text>
//         {/* {children && (
//           <Icon
//             as={ChevronDownIcon}
//             transition={"all .25s ease-in-out"}
//             transform={isOpen ? "rotate(180deg)" : ""}
//             w={6}
//             h={6}
//           />
//         )} */}
//       </Flex>

//       {/* <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
//         <Stack
//           mt={2}
//           pl={4}
//           borderLeft={1}
//           borderStyle={"solid"}
//           borderColor={useColorModeValue("gray.200", "gray.700")}
//           align={"start"}
//         >
//           {children &&
//             children.map((child) => (
//               <Link
//                 key={child.label}
//                 href={child.href}
//                 className="py-2"
//               >
//                 {child.label}
//               </Link>
//             ))}
//         </Stack>
//       </Collapse> */}
//     </Stack>
//   );
// };


import { ReactNode } from 'react';
import {
  Box,
  Flex,
  Avatar,
  HStack,
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
import Link from 'next/link';
import Logo from "@/components/layout/navbar/logo";
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

const Links = [
  {label: "Home",href: "/",},
  {label: "About",href: "/about",},
  {label: "Resume",href: "/resume",},
  {label: "Contact",href: "/contact",},
  {label: "Blogs",href: "/blog",},
  {label: "Skills",href: "/skills",},
  {label: "Services",href: "/services",},

];
const NavLink = ({ children }: { children: ReactNode }) => (
  <Link className='px-2 py-1 rounded-md text-white' href={'#'}>
    {children}
  </Link>
  
);

export default function Simple() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg={useColorModeValue('gray.400', 'gray.100')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'lg'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <Logo />
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}>
              {Links.map((link) => (
                
               <Link className='p-2' href={link.href}>{link.label}</Link>
              ))}
            </HStack>
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
                  src={
                    'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
                  }
                />
              </MenuButton>
              <MenuList>
                <MenuItem>Login</MenuItem>
                <MenuItem>Sign up</MenuItem>
                <MenuDivider />
                <MenuItem>Dashboard</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
               <Link className='py-2' href={link.href}>{link.label}</Link>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>

    </>
  );
}