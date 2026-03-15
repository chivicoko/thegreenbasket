'use client';

import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import React from 'react';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

interface FullPaginationProps {
    productsPerPage: number,
    // handleRowsPerPageChange: (value: Number) => void,
    handleRowsPerPageChange: (event: React.ChangeEvent<HTMLSelectElement>) => void,
    totalProducts: number,
    totalPages: number,
    paginate: (page: number) => void,
    currentPage: number,
}

const rowsOptions = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 100];

const FullPagination = ({productsPerPage, handleRowsPerPageChange, totalProducts, totalPages, paginate, currentPage}: FullPaginationProps) => {
  return (
    <div className='pagination-right mt-6 flex flex-col md:flex-row items-center justify-between gap-4 w-full'>
        <div className='pages md:w-1/2 flex items-center md:justify-start gap-3'>
            <span>Showing</span>

            <div className="select-container">
                <select
                    value={productsPerPage}
                    onChange={handleRowsPerPageChange}
                    className="span"
                >
                    {rowsOptions
                        .filter(value => value <= totalProducts || value === 100)
                        .map(value => (
                        <option key={value} value={value}>
                            {value}
                        </option>
                    ))}
                </select>

                {/* <Select
                    value={productsPerPage.toString()}
                    onValueChange={(value) => handleRowsPerPageChange(Number(value))}
                >
                    <SelectTrigger className="h-8 w-[70px] border rounded-md">
                        <SelectValue />
                    </SelectTrigger>

                    <SelectContent side="top">
                        {rowsOptions
                        .filter(value => value <= totalProducts || value === 100)
                        .map(value => (
                            <SelectItem key={value} value={value.toString()}>
                            {value}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select> */}
            </div>

            <span>out of {totalProducts}</span>
        </div>

        <Pagination className='md:w-1/2 justify-center md:justify-end'>
            <PaginationContent>

                <PaginationItem>
                    <PaginationPrevious
                        href="#"
                        onClick={() => currentPage > 1 && paginate(currentPage - 1)}
                    />
                </PaginationItem>

                {Array.from({ length: totalPages }, (_, i) => (
                    <PaginationItem key={i}>
                        <PaginationLink
                            href="#"
                            isActive={currentPage === i + 1}
                            onClick={() => paginate(i + 1)}
                        >
                            {i + 1}
                        </PaginationLink>
                    </PaginationItem>
                ))}

                <PaginationItem>
                    <PaginationNext
                        href="#"
                        onClick={() => currentPage < totalPages && paginate(currentPage + 1)}
                    />
                </PaginationItem>

            </PaginationContent>
        </Pagination>
    </div>
  )
}

export default FullPagination