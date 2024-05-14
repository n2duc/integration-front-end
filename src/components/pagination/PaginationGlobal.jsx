import React, { useState } from "react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const PaginationGlobal = ({ employee, currentPage, onPageChange }) => {
  const [newsPerPage, setNewsPerPage] = useState(5);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(employee.length / newsPerPage); i++) {
    pageNumbers.push(i);
  }
  // console.log(Math.ceil(employee.length / newsPerPage));

  const choosePage = (pageNumber) => {
    onPageChange(pageNumber);
  };

  const nextPage = () => {
    onPageChange(currentPage + 1);
  };

  const previousPage = () => {
    onPageChange(currentPage - 1);
  };
  // console.log(currentPage);
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            onClick={previousPage}
            disabled={currentPage === 1}
            aria-label="Previous Page"
            className={
              currentPage === 1
                ? "opacity-50 pointer-events-none"
                : "cursor-pointer"
            }
          />
        </PaginationItem>
        {pageNumbers.map((number) => (
          <PaginationItem key={number} onClick={() => choosePage(number)}>
            <PaginationLink
              className={
                currentPage === number ? "bg-[#232323] text-white" : ""
              }
              href={`#${number}`}
            >
              {number}
            </PaginationLink>
          </PaginationItem>
        ))}
        <PaginationItem>
          <PaginationNext
            onClick={() => nextPage()}
            disabled={currentPage === Math.ceil(employee.length / newsPerPage)}
            aria-label="Next Page"
            className={
              currentPage === Math.ceil(employee.length / newsPerPage)
                ? "opacity-50 pointer-events-none"
                : "cursor-pointer"
            }
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default PaginationGlobal;
