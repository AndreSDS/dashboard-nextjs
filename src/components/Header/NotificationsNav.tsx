import {HStack, Icon} from "@chakra-ui/react";
import {RiNotificationLine, RiUserAddLine} from "react-icons/ri";

export function NotificationsNav() {
  return (
    <HStack
      borderRightWidth={1}
      mx={["6", "8"]}
      pr={["6", "8"]}
      py="1"
      color="gray.300"
      spacing={["6", "8"]}
    >
      <Icon as={RiNotificationLine} fontSize="20" />
      <Icon as={RiUserAddLine} fontSize="20" />
    </HStack>
  );
}
