"use client"

import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"
import { Table } from "@tanstack/react-table"
import { useState } from "react"
import { InputNumber } from "./input-number"

interface DataTablePaginationProps<TData> {
    table: Table<TData>
}

export function DataTablePagination<TData>({
    table,
}: DataTablePaginationProps<TData>) {
    const [goPage, setGoPage] = useState("")
    const pageCount = table.getPageCount()
    const currentPage = table.getState().pagination.pageIndex + 1

    const handleGoPage = () => {
        const pageNumber = Number(goPage)
        if (pageNumber >= 1 && pageNumber <= pageCount) {
            table.setPageIndex(pageNumber - 1)
        }
    }

    return (
        <div className="flex items-center justify-between px-2 py-3">
            {/* Info */}
            <div className="text-sm text-footer-accent-foreground whitespace-nowrap">
                Showing{" "}
                <span className="font-medium text-footer-primary-foreground">
                    {table.getState().pagination.pageIndex *
                        table.getState().pagination.pageSize +
                        1}
                </span>{" "}
                <span className="font-medium text-footer-primary-foreground">to</span>{" "}
                <span className="font-medium text-footer-primary-foreground">
                    {Math.min(
                        (table.getState().pagination.pageIndex + 1) *
                        table.getState().pagination.pageSize,
                        table.getFilteredRowModel().rows.length
                    )}
                </span>{" "}
                <span className="font-medium text-footer-primary-foreground">of</span>{" "}
                <span className="font-medium text-footer-primary-foreground">
                    {table.getFilteredRowModel().rows.length}
                </span>{" "}
                entries
            </div>

            {/* Controls */}
            <Pagination className="w-auto">
                <PaginationContent>
                    <PaginationItem>
                        <PaginationPrevious
                            onClick={() => table.previousPage()}
                            className={table.getCanPreviousPage() ? "" : "opacity-50"}
                        />
                    </PaginationItem>

                    {[...Array(pageCount)].map((_, i) => {
                        if (
                            i + 1 === 1 ||
                            i + 1 === pageCount ||
                            Math.abs(currentPage - (i + 1)) <= 1
                        ) {
                            return (
                                <PaginationItem key={i}>
                                    <PaginationLink
                                        isActive={currentPage === i + 1}
                                        onClick={() => table.setPageIndex(i)}
                                    >
                                        {i + 1}
                                    </PaginationLink>
                                </PaginationItem>
                            )
                        } else if (
                            i + 1 === currentPage - 2 ||
                            i + 1 === currentPage + 2
                        ) {
                            return <PaginationEllipsis key={i} />
                        }
                        return null
                    })}

                    <PaginationItem>
                        <PaginationNext
                            onClick={() => table.nextPage()}
                            className={table.getCanNextPage() ? "" : "opacity-50"}
                        />
                    </PaginationItem>
                </PaginationContent>
            </Pagination>

            {/* Go to page */}
            <div className="flex items-center space-x-2">
                <span className="text-sm whitespace-nowrap">Go to page</span>
                {/* <input
                    type="number"
                    value={goPage}
                    onChange={(e) => setGoPage(e.target.value)}
                    className="w-16 border rounded px-2 py-1"
                /> */}
                <InputNumber
                    value={goPage}
                    className="w-16 border rounded-md px-2 text-center text-sm"
                    onChange={(e) => setGoPage(e.target.value)}
                    placeholder=""
                    min={0}
                />
                <button
                    onClick={handleGoPage}
                    className="text-sm text-footer-primary-foreground font-medium whitespace-nowrap"
                >
                    {"Go >"}
                </button>
            </div>
        </div>
    )
}
