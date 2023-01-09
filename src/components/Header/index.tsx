import {Flex, Icon, IconButton, useBreakpointValue} from "@chakra-ui/react";
import {RiMenuLine} from "react-icons/ri";
import {useSideBarDrawer} from "../../context/SideBarContext";
import {Logo} from "./Logo";
import {NotificationsNav} from "./NotificationsNav";
import {Profile} from "./Profile";
import {Searchbox} from "./SearchBox";

export function Header() {
  const {onOpen} = useSideBarDrawer();
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Flex
      as="header"
      w="100%"
      maxW={1480}
      h="20"
      mx="auto"
      mt="4"
      mb={["4", "6"]}
      px="6"
      align="center"
    >
      {!isWideVersion && (
        <IconButton
          aria-label="Open left side navigation menu"
          icon={<Icon as={RiMenuLine} />}
          fontSize="24"
          variant="unstyled"
          onClick={onOpen}
          mr="2"
          alignItems="center"
          display="flex"
        />
      )}

      <Logo />

      {isWideVersion && <Searchbox />}

      <Flex align="center" ml="auto">
        <NotificationsNav />
        <Profile showProfileData={isWideVersion} />
      </Flex>
    </Flex>
  );
}
