import { Box, Button, Container, Flex, Heading, HStack, Image, Link, Stack, Text, VStack } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      {/* Navigation Bar */}
      <Flex as="nav" bg="teal.500" color="white" p={4} justifyContent="space-between" alignItems="center">
        <Heading as="h1" size="lg">RecipeShare</Heading>
        <HStack spacing={8}>
          <Link href="#" _hover={{ textDecoration: "none", color: "teal.200" }}>Home</Link>
          <Link href="#" _hover={{ textDecoration: "none", color: "teal.200" }}>Recipes</Link>
          <Link href="#" _hover={{ textDecoration: "none", color: "teal.200" }}>Submit a Recipe</Link>
          <Link href="#" _hover={{ textDecoration: "none", color: "teal.200" }}>Contact</Link>
        </HStack>
      </Flex>

      {/* Hero Section */}
      <Flex
        as="section"
        bgImage="url('https://source.unsplash.com/1600x900/?kitchen,ingredients')"
        bgSize="cover"
        bgPosition="center"
        height="60vh"
        alignItems="center"
        justifyContent="center"
        color="white"
        textAlign="center"
        p={4}
      >
        <VStack spacing={4}>
          <Heading as="h2" size="2xl">Welcome to RecipeShare</Heading>
          <Text fontSize="lg">Discover and share amazing recipes from around the world.</Text>
          <Button colorScheme="teal" size="lg">Submit a Recipe</Button>
        </VStack>
      </Flex>

      {/* Featured Recipes Section */}
      <Box as="section" p={8}>
        <Heading as="h3" size="xl" mb={6} textAlign="center">Featured Recipes</Heading>
        <Flex wrap="wrap" justifyContent="center" spacing={8}>
          <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" m={4}>
            <Image src="https://source.unsplash.com/1600x900/?pasta" alt="Recipe 1" />
            <Box p={6}>
              <Heading as="h4" size="md" mb={2}>Delicious Pasta</Heading>
              <Text>Try this amazing pasta recipe with a rich and creamy sauce.</Text>
            </Box>
          </Box>
          <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" m={4}>
            <Image src="https://source.unsplash.com/1600x900/?pancakes" alt="Recipe 2" />
            <Box p={6}>
              <Heading as="h4" size="md" mb={2}>Tasty Pancakes</Heading>
              <Text>Fluffy pancakes that are perfect for a weekend breakfast.</Text>
            </Box>
          </Box>
          <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" m={4}>
            <Image src="https://source.unsplash.com/1600x900/?salad" alt="Recipe 3" />
            <Box p={6}>
              <Heading as="h4" size="md" mb={2}>Healthy Salad</Heading>
              <Text>A fresh and healthy salad with a variety of vegetables.</Text>
            </Box>
          </Box>
        </Flex>
      </Box>

      {/* Footer */}
      <Box as="footer" bg="teal.500" color="white" p={4} textAlign="center">
        <HStack spacing={4} justifyContent="center" mb={4}>
          <Link href="#" isExternal><FaFacebook size="24px" /></Link>
          <Link href="#" isExternal><FaTwitter size="24px" /></Link>
          <Link href="#" isExternal><FaInstagram size="24px" /></Link>
        </HStack>
        <Text>&copy; 2023 RecipeShare. All rights reserved.</Text>
      </Box>
    </Container>
  );
};

export default Index;