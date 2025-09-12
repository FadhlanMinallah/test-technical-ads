"use client"

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

interface DeleteConfirmDialogProps {
    onConfirm: () => void
    trigger?: React.ReactNode
}

export default function DeleteConfirmDialog({ onConfirm, trigger }: DeleteConfirmDialogProps) {
    return (
        <AlertDialog>
            {/* Trigger bisa tombol Delete di row */}
            <AlertDialogTrigger asChild>
                {trigger || <button className="text-red-600">Delete</button>}
            </AlertDialogTrigger>

            <AlertDialogContent className="max-w-xs w-[400px] rounded-xl">
                <AlertDialogHeader className="flex flex-col items-start space-y-1">
                    <img src="/src/assets/icon-danger.svg" alt="" className="w-16 h-16" />
                    <AlertDialogTitle className="text-lg font-semibold text-center">
                        Delete user
                    </AlertDialogTitle>
                    <AlertDialogDescription className="text-left text-gray-500">
                        Are you sure you want to delete this user? This action cannot be undone.
                    </AlertDialogDescription>
                </AlertDialogHeader>

                <AlertDialogFooter className="flex justify-end gap-2 pt-4">
                    <AlertDialogCancel className="rounded-lg border px-4 py-2">
                        Cancel
                    </AlertDialogCancel>
                    <AlertDialogAction
                        onClick={onConfirm}
                        className="rounded-lg bg-gradient-to-r from-red-500 to-red-600 px-4 py-2 text-white hover:from-red-600 hover:to-red-700"
                    >
                        Delete
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}
