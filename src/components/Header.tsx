import {Avatar, Box, Flex, HStack, Icon, Input, Text} from "@chakra-ui/react";
import {RiNotificationLine, RiSearchLine, RiUserAddLine} from "react-icons/ri";

export function Header() {
  return (
    <Flex
      as="header"
      w="100%"
      maxW={1480}
      h="20"
      mx="auto"
      mt="4"
      px="6"
      align="center"
    >
      <Text fontSize="3xl" fontWeight="bold" letterSpacing="tight" w="64">
        Header
        <Text as="span" color="pink.500" ml="1">
          .
        </Text>
      </Text>

      <Flex
        as="label"
        flex="1"
        py="4"
        px="8"
        ml="6"
        maxW={400}
        alignSelf="center"
        color="gray.200"
        position="relative"
        bg="gray.800"
        borderRadius="full"
      >
        <Input
          color="gary.50"
          variant="unstyled"
          placeholder="Buscar na plataforma"
          _placeholder={{color: "gray.400"}}
          px="4"
          mr="4"
        />

        <Icon as={RiSearchLine} fontSize="20" />
      </Flex>

      <Flex align="center" ml="auto">
        <HStack
          borderRightWidth={1}
          mx="8"
          pr="8"
          py="1"
          color="gray.300"
          spacing="8"
        >
          <Icon as={RiNotificationLine} fontSize="20" />
          <Icon as={RiUserAddLine} fontSize="20" />
        </HStack>

        <Flex align="center">
          <Box mr="4" textAlign="right">
            <Text>André Souza</Text>
            <Text color="gray.300" fontSize="small">
              andre@gmail.com
            </Text>
          </Box>

          <Avatar
            size="md"
            name="André Souza"
            src="https://github.com/AndreSDS.png"
          />
        </Flex>
      </Flex>
    </Flex>
  );
}
