import React from "react";
import { cn } from "@/lib/utils";
import { Button } from "./button";
import { ChevronRight } from "lucide-react";
interface CustomPaginationProps {
    totalItems: number;
    itemsPerPage: number;
    currentPage: number;
    onPageChange: (page: number) => void;
}

export const Pagination: React.FC<CustomPaginationProps> = ({
    totalItems,
    itemsPerPage,
    currentPage,
    onPageChange,
}) => {
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    // Function to generate an array of page numbers
    const generatePageNumbers = () => {
        const pageNumbers = [];
        const maxPagesToShow = 5; // Adjust this number as needed

        if (totalPages <= maxPagesToShow) {
            // If total pages are less than or equal to maxPagesToShow, show all pages
            for (let i = 1; i <= totalPages; i++) {
                pageNumbers.push(i);
            }
        } else {
            // Otherwise, show a limited range of pages with ellipsis
            const halfRange = Math.floor(maxPagesToShow / 2);
            const startPage = Math.max(currentPage - halfRange, 1);
            const endPage = Math.min(currentPage + halfRange, totalPages);

            if (startPage > 1) {
                pageNumbers.push(1);
                if (startPage > 2) {
                    pageNumbers.push("...");
                }
            }

            for (let i = startPage; i <= endPage; i++) {
                pageNumbers.push(i);
            }

            if (endPage < totalPages) {
                if (endPage < totalPages - 1) {
                    pageNumbers.push("...");
                }
                pageNumbers.push(totalPages);
            }
        }

        return pageNumbers;
    };

    const pageNumbers = generatePageNumbers();

    // Function to handle page change
    const handlePageChange = (page: number) => {
        if (page >= 1 && page <= totalPages) {
            onPageChange(page);
        }
    };

    // Function to handle previous and next page clicks
    const handlePreviousPage = () => {
        handlePageChange(currentPage - 1);
    };

    const handleNextPage = () => {
        handlePageChange(currentPage + 1);
    };

    return (
        <div className=" flex gap-2 py-0  justify-center">
            <button
                onClick={handlePreviousPage}
                disabled={currentPage === 1}
                className="w-fit disabled:text-disabled"
            >
                <ChevronRight className="rotate-180" />
            </button>
            <div className="flex gap-2">
                {pageNumbers.map((page: any, index) => (
                    <React.Fragment key={index}>
                        {page === "..." ? (
                            <button
                                className={cn(`rounded-md cursor-auto size-9 `)}
                            >
                                ...
                            </button>
                        ) : (
                            <Button
                                variant={
                                    page !== currentPage ? "outline" : "default"
                                }
                                className="size-9"
                                onClick={() => handlePageChange(page)}
                            >
                                {page}
                            </Button>
                        )}
                    </React.Fragment>
                ))}
            </div>

            <button
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
                className="w-fit disabled:text-disabled"
            >
                <ChevronRight />
            </button>
        </div>
    );
};
Pagination.displayName = "Pagination";
