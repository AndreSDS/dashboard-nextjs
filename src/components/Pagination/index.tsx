import { Box, Stack, Text } from "@chakra-ui/react";
import { PaginationItem } from "./PaginationItem";

interface PaginationProps {
  totalCountOfRegisters: number;
  currentPage: number;
  registersPerPage?: number;
  setCurrentPage: (page: number) => void;
}

const siblingsCount = 1;

function generatePagesArray(from: number, to: number) {
  return [...new Array(to - from)]
    .map((_, index) => from + index + 1)
    .filter((page) => page > 0);
}

export function Pagination({
  totalCountOfRegisters,
  currentPage = 1,
  registersPerPage = 10,
  setCurrentPage,
}: PaginationProps) {
  const lastPage = Math.floor(totalCountOfRegisters / registersPerPage);

  const previousPage =
    currentPage > 1
      ? generatePagesArray(currentPage - 1 - siblingsCount, currentPage - 1)
      : [];

  const nextPage =
    currentPage < lastPage
      ? generatePagesArray(
          currentPage,
          Math.min(currentPage + siblingsCount, lastPage)
        )
      : [];

  return (
    <Stack
      direction={["column", "row"]}
      spacing="6"
      mt="8"
      justify="space-between"
      align="center"
    >
      <Box>
        <strong>{currentPage}</strong> - <strong>{registersPerPage}</strong>{" "}
        de <strong>{totalCountOfRegisters}</strong>
      </Box>

      <Stack direction="row" spacing="2">
        {currentPage > 1 + siblingsCount ? (
          <PaginationItem setCurrentPage={setCurrentPage} pageNumber={1} />
        ) : null}

        {currentPage > 2 + siblingsCount ? (
          <Text color="gray.300" width="8" textAlign="center">
            ...
          </Text>
        ) : null}

        {previousPage.length > 0
          ? previousPage.map((page) => (
              <PaginationItem setCurrentPage={setCurrentPage} key={page} pageNumber={page} />
            ))
          : null}

        <PaginationItem pageNumber={currentPage} isCurrent />

        {nextPage.length > 0
          ? nextPage.map((page) => (
              <PaginationItem setCurrentPage={setCurrentPage} key={page} pageNumber={page} />
            ))
          : null}

        {currentPage + 1 + siblingsCount < lastPage ? (
          <Text color="gray.300" width="8" textAlign="center">
            ...
          </Text>
        ) : null}

        {currentPage + siblingsCount < lastPage ? (
          <PaginationItem setCurrentPage={setCurrentPage} pageNumber={lastPage} />
        ) : null}
      </Stack>
    </Stack>
  );
}
