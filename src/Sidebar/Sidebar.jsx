import React from "react";
import { Box, Flex, Avatar, Link, Tooltip } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import {
  InstagramLogo,
  InstagramMobileLogo,
  SearchLogo,
  NotificationsLogo,
  CreatePostLogo,
} from "../Assests/contants";
import { AiFillHome } from "react-icons/ai";

const Sidebar = () => {
  const sidebarItems = [
    {
      icon: <AiFillHome size={25} />,
      text: "Home",
      link: "/",
    },
    {
      icon: <SearchLogo />,
      text: "Search",
    },
    {
      icon: <NotificationsLogo />,
      text: "Notifications",
    },
    {
      icon: <CreatePostLogo />,
      text: "Create",
    },
    {
      icon: (
        <Avatar size={"sm"} name="Burak Orkmez" src="/profile.avif" />
      ),
      text: "Profile",
      link: "/asaprogrammer",
    },
  ];

  return (
    <Box
      height="100vh"
      borderRight="1px solid"
      borderColor="whiteAlpha.300"
      py={8}
      position="sticky"
      top={0}
      left={0}
      px={{ base: 2, md: 4 }}
    >
      <Flex direction="column" gap={10} w="full" height="full">
        {/* Desktop Logo */}
        <Link
          as={RouterLink}
          to="/"
          style={{ display: "block" }}
          className="logo-desktop"
        >
          <Box display={{ base: "none", md: "block" }} pl={2}>
            <InstagramLogo />
          </Box>
        </Link>

        {/* Mobile Logo */}
        <Link
          as={RouterLink}
          to="/"
          className="logo-mobile"
        >
          <Box
            p={3}
            display={{ base: "block", md: "none" }}
            cursor="pointer"
            borderRadius={6}
            _hover={{ bg: "whiteAlpha.200" }}
            w={10}
          >
            <InstagramMobileLogo />
          </Box>
        </Link>

        {/* Sidebar Items */}
        <Flex direction="column" gap={5} w="full">
          {sidebarItems.map((item, index) => (
            <Tooltip
              hasArrow
              label={item.text}
              placement="right"
              key={index}
              openDelay={500}
            >
              {item.link ? (
                <Link
                  as={RouterLink}
                  to={item.link}
                  display="flex"
                  alignItems="center"
                  gap={4}
                  _hover={{ bg: "whiteAlpha.200" }}
                  p={3}
                  borderRadius={6}
                  w={10}
                >
                  {item.icon}
                  <Box display={{ base: "none", md: "block" }}>
                    {item.text}
                  </Box>
                </Link>
              ) : (
                <Box
                  display="flex"
                  alignItems="center"
                  gap={4}
                  _hover={{ bg: "whiteAlpha.200" }}
                  p={3}
                  borderRadius={6}
                  w={10}
                  cursor="pointer"
                >
                  {item.icon}
                  <Box display={{ base: "none", md: "block" }}>
                    {item.text}
                  </Box>
                </Box>
              )}
            </Tooltip>
          ))}
        </Flex>
      </Flex>
    </Box>
  );
};

export default Sidebar;
