import { useState } from "react";
import { Box, Button, Container, Flex, FormControl, FormLabel, HStack, IconButton, Image, Input, Menu, MenuButton, MenuItem, MenuList, Text, VStack } from "@chakra-ui/react";
import { FaBars, FaCommentDots, FaSignOutAlt, FaTasks, FaVideo } from "react-icons/fa";

const Index = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (username === "user" && password === "pass") {
      setIsLoggedIn(true);
    } else {
      alert("Invalid credentials");
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername("");
    setPassword("");
  };

  if (!isLoggedIn) {
    return (
      <Container centerContent maxW="container.sm" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
        <VStack spacing={4}>
          <FormControl>
            <FormLabel htmlFor="username">Username</FormLabel>
            <Input id="username" type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="password">Password</FormLabel>
            <Input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </FormControl>
          <Button colorScheme="blue" onClick={handleLogin}>
            Login
          </Button>
        </VStack>
      </Container>
    );
  }

  return (
    <Flex direction="column" minHeight="100vh">
      <Box as="header" bg="blue.500" color="white" p={4}>
        <HStack justifyContent="space-between">
          <Menu>
            <MenuButton as={IconButton} icon={<FaBars />} variant="outline" color="white" />
            <MenuList>
              <MenuItem icon={<FaCommentDots />}>Chat</MenuItem>
              <MenuItem icon={<FaVideo />}>Video Call</MenuItem>
              <MenuItem icon={<FaTasks />}>Daily Task</MenuItem>
              <MenuItem icon={<FaSignOutAlt />} onClick={handleLogout}>
                Logout
              </MenuItem>
            </MenuList>
          </Menu>
          <Text fontSize="xl">Main Page</Text>
          <Box> {/* Placeholder for alignment */} </Box>
        </HStack>
      </Box>
      <Flex flexGrow={1} alignItems="center" justifyContent="center">
        <Image src="https://images.unsplash.com/photo-1566759996874-04d713cc224a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxsb3ZpbmclMjBjb3VwbGV8ZW58MHx8fHwxNzE1NTIzNjE1fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Loving Couple" />
      </Flex>
      <Box as="footer" bg="gray.200" p={4}>
        <HStack justifyContent="space-around">
          <IconButton aria-label="Chat" icon={<FaCommentDots />} />
          <IconButton aria-label="Video Call" icon={<FaVideo />} />
          <IconButton aria-label="Daily Task" icon={<FaTasks />} />
          <IconButton aria-label="Logout" icon={<FaSignOutAlt />} onClick={handleLogout} />
        </HStack>
      </Box>
    </Flex>
  );
};

export default Index;
