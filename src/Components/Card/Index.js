import React from "react";
import {
  Box,
  Flex,
  AspectRatio,
  Image,
  Text,
  Link,
  Button,
  Stack
} from "@chakra-ui/react";

function Index(props) {
  const { product, summary, longLine, emi, enddate } = props;
  const date = enddate.toString().split( "T" );
  return (
    <Box
      p={4}
      display={{ md: "flex" }}
      maxWidth="32rem"
      borderWidth={1}
      margin={2}
    >
      <AspectRatio ratio={1 / 1}>
        <Image
          maxWidth="200px"
          margin="auto"
          src="https://picsum.photos/id/237/250/250"
          alt="Woman paying for a purchase"
        />
      </AspectRatio>
      <Stack
        align={{ base: "center", md: "stretch" }}
        textAlign={{ base: "center", md: "left" }}
        mt={{ base: 4, md: 0 }}
        ml={{ md: 6 }}
      >
        <Text my={2} color="gray.500">
          Loan Amount:
        </Text>
        <Text
          fontWeight="bold"
          textTransform="uppercase"
          fontSize="lg"
          letterSpacing="wide"
          color="teal.600"
        >
          {product}
        </Text>
        {/* <Text>Name:</Text> */}
        <Link
          my={1}
          display="block"
          fontSize="md"
          lineHeight="normal"
          fontWeight="semibold"
          href="#"
        >
          Name: {summary}
        </Link>
        <Text my={2} color="gray.500">
          Type: {longLine}
        </Text>
        <Text my={3} color="gray.500">
          EMI: {emi}
        </Text>
        <Text 
        fontWeight="bold"
        textTransform="uppercase"
        fontSize="lg"
        letterSpacing="wide"
        color="teal.600">
          End Date: {date[0]}
        </Text>
      </Stack>
    </Box>
  );
}

export default Index;
