"use client"

import { ColumnDef } from "@tanstack/react-table"
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { ArrowUpDown, MoreHorizontal } from "lucide-react"
import DeleteConfirmDialog from "@/components/ui/common/DeleteConfirmDialog"
import { UserDialog } from "@/components/users/UserDialog"

import { User } from "@/types/user"

type ColumnProps = {
    onEdit: (user: User) => void
    onDelete: (user: User) => void
}

export function getColumns({
    onEdit,
    onDelete,
}: ColumnProps): ColumnDef<User>[] {
    return [
        {
            accessorKey: "id",
            header: ({ column }) => (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                    className="!p-0 text-[#686868]"
                >
                    #ID <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            ),
            cell: ({ row }) => {
                const user = row.original
                return (
                    <p className="text-gray-400"> {user.id} </p>
                )
            },
            meta: { className: "w-[100px]" },
        },
        {
            accessorKey: "username",
            header: ({ column }) => (
                <Button
                    variant="ghost"
                    onClick={() =>
                        column.toggleSorting(column.getIsSorted() === "asc")
                    }
                    className="!p-0 text-[#686868]"
                >
                    Username <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            ),
            cell: ({ getValue }) => (
                <span className="truncate max-w-[150px] block">
                    {getValue() as string}
                </span>
            ),
            meta: { className: "w-[200px]" },
        },
        {
            accessorKey: "name",
            header: ({ column }) => (
                <Button
                    variant="ghost"
                    onClick={() =>
                        column.toggleSorting(column.getIsSorted() === "asc")
                    }
                    className="!p-0 text-[#686868]"
                >
                    Name <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            ),
            meta: { className: "w-[200px]" },
        },
        {
            accessorKey: "phone",
            header: ({ column }) => (
                <Button
                    variant="ghost"
                    onClick={() =>
                        column.toggleSorting(column.getIsSorted() === "asc")
                    }
                    className="!p-0 text-[#686868]"
                >
                    Telephone Number <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            ),
            meta: { className: "w-[180px]" },
        },
        {
            id: "actions",
            cell: ({ row }) => {
                const user = row.original
                return (
                    <div className="flex justify-center">
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="ghost" size="sm">
                                    <MoreHorizontal className="h-4 w-4" />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                                <UserDialog
                                    mode="edit"
                                    trigger={
                                        <DropdownMenuItem
                                            onSelect={(e) => e.preventDefault()}
                                            className="cursor-pointer"
                                        >
                                            Edit
                                        </DropdownMenuItem>
                                    }
                                    defaultValues={user}
                                    onSubmit={onEdit}
                                />

                                <DeleteConfirmDialog
                                    onConfirm={() => onDelete(user)}
                                    trigger={
                                        <DropdownMenuItem
                                            onSelect={(e) => e.preventDefault()}
                                            className="cursor-pointer"
                                        >
                                            Delete
                                        </DropdownMenuItem>
                                    }
                                />
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                )
            },
            meta: { className: "w-[50px] text-center" },
        },
    ]
}