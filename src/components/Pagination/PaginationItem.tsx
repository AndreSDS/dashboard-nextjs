import { Button } from "@chakra-ui/react";

interface PaginationItemProps {
  pageNumber: number;
  setCurrentPage?: (page: number) => void;
  isCurrent?: boolean;
}

export function PaginationItem({
  isCurrent = false,
  pageNumber,
  setCurrentPage,
}: PaginationItemProps) {
  if (isCurrent) {
    return (
      <Button
        size="sm"
        fontSize="xs"
        width="4"
        colorScheme="pink"
        disabled
        _disabled={{
          bg: "pink.500",
          cursor: "default",
        }}
      >
        {pageNumber}
      </Button>
    );
  }

  return (
    <Button
      size="sm"
      fontSize="xs"
      width="4"
      bg="gray.700"
      _hover={{
        bgColor: "gray.500",
      }}
      onClick={() => setCurrentPage(pageNumber)}
    >
      {pageNumber}
    </Button>
  );
}
