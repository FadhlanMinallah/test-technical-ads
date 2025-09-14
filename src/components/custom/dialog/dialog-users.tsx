"use client"

import { useState, useEffect } from "react"
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Memo } from "@/components/icons"
import { User } from "@/types/user"

type UserDialogProps = {
    mode?: "add" | "edit"
    defaultValues?: Partial<User>
    onSubmit: (user: User) => void
    trigger?: React.ReactNode
}

export function UserDialog({
    mode = "add",
    defaultValues,
    onSubmit,
    trigger,
}: UserDialogProps) {
    const [open, setOpen] = useState(false)
    const [username, setUsername] = useState("")
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [password, setPassword] = useState("")

    useEffect(() => {
        if (defaultValues) {
            setUsername(defaultValues.username || "")
            setName(defaultValues.name || "")
            setPhone(defaultValues.phone || "")
            setPassword(defaultValues.password || "")
        }
    }, [defaultValues, open])

    const handleSubmit = () => {
        if (!username || !name || !phone || !password) return
        onSubmit({ id: defaultValues?.id || null, username, name, phone, password })
        setOpen(false)
        setUsername("")
        setName("")
        setPhone("")
        setPassword("")
    }

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                {trigger ?? (
                    <Button variant="default">
                        {mode === "add" ? "+ Add User" : "Edit"}
                    </Button>
                )}
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <DialogTitle className="flex gap-2 items-center">
                        <Memo className="h-6 w-6" />
                        {mode === "add" ? "Create User" : "Edit User"}
                    </DialogTitle>
                </DialogHeader>

                <div className="grid gap-4 py-2">

                    <div className="grid gap-2">
                        <Label htmlFor="username">Username</Label>
                        <Input
                            id="username"
                            type="text"
                            placeholder="Enter username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="name">Name</Label>
                        <Input
                            id="name"
                            placeholder="Enter full name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="phone">Telephone Number</Label>
                        <Input
                            id="phone"
                            type="text"
                            placeholder="Enter phone number"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                        />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="password">Password</Label>
                        <Input
                            id="password"
                            type="password"
                            placeholder="Enter password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                </div>

                <div className="flex justify-end gap-2">
                    <Button className="min-w-20" variant="outline" onClick={() => setOpen(false)}>
                        Cancel
                    </Button>
                    <Button className="min-w-20" onClick={handleSubmit}>
                        {mode === "add" ? "Save" : "Update"}
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    )
}
