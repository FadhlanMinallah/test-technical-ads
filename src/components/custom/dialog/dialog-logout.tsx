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

interface LogoutDialogProps {
    onConfirm: () => void
    trigger?: React.ReactNode
}

export default function LogoutDialog({ onConfirm, trigger }: LogoutDialogProps) {
    return (
        <AlertDialog>
            {/* Trigger bisa tombol Delete di row */}
            <AlertDialogTrigger asChild>
                {trigger || <button className="text-red-600">Logout</button>}
            </AlertDialogTrigger>

            <AlertDialogContent className="max-w-xs w-[400px] rounded-xl">
                <AlertDialogHeader className="flex flex-col items-start space-y-1">
                    <img src="/src/assets/icon-danger.svg" alt="" className="w-16 h-16" />
                    <AlertDialogTitle className="text-lg font-semibold text-center">
                        Logout Account
                    </AlertDialogTitle>
                    <AlertDialogDescription className="text-left text-gray-500">
                        Are you sure you want to logout?
                    </AlertDialogDescription>
                </AlertDialogHeader>

                <AlertDialogFooter className="flex justify-end gap-2 pt-4">
                    <AlertDialogCancel className="rounded-lg border px-4 py-2">
                        Cancel
                    </AlertDialogCancel>
                    <AlertDialogAction
                        onClick={onConfirm}
                        className="rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 px-4 py-2 text-white hover:from-blue-600 hover:to-blue-700"
                    >
                        Logout
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}
