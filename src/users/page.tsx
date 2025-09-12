"use client"

import { useState } from "react"
import { DataTable } from "@/users/data-table"
import { getColumns } from "@/users/column"
import { UserDialog } from "@/components/users/UserDialog"
import { Button } from "@/components/ui/button"
import { MoreHorizontal, Plus, Search } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { InputWithIcon } from "@/components/ui/input-with-icon"
import { Bounce, toast, ToastContainer } from "react-toastify"
import { User } from "@/types/user"

import usersData from "@/data/users.json"
import { Memo } from "@/components/icons"


export default function UsersPage() {

  const [users, setUsers] = useState<User[]>(usersData)

  const handleAddUser = (user: { username: string, name: string, phone: string, password: string }) => {
    setUsers((prev) => [...prev, {
      id: `#E${Math.floor(Math.random() * 1000)}`,
      username: user.username,
      name: user.name,
      phone: user.phone,
      password: user.password
    }])
  }

  const handleEdit = (user: User) => {
    console.info("Edit User ", user)
  }

  const handleDelete = (user: User) => {
    console.info("Delete User ", user)
    setUsers((prev) => prev.filter((u) => u.id !== user.id))
    toast.success('Users has been deleted.', {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: Bounce,
    });

  }

  const columns = getColumns({
    onEdit: handleEdit,
    onDelete: handleDelete,
  })

  return (
    <div className='content-card'>
      {/* header */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-2">
          <Memo />
          List User
        </div>
        <Button variant='outline'>
          <MoreHorizontal />
        </Button>
      </div>

      {/* action */}
      <div className="flex justify-between items-center mb-8">
        <Select>
          <SelectTrigger className="w-[180px]" size={'lg'}>
            <SelectValue placeholder="Filter" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value='all'>All</SelectItem>
            <SelectItem value='admin'>Admin</SelectItem>
            <SelectItem value='user'>User</SelectItem>
            <SelectItem value='manager'>Manager</SelectItem>
          </SelectContent>
        </Select>
        <div className="flex items-center gap-4">
          <InputWithIcon
            icon={Search}
            placeholder="Search user"
            className="w-64"
          />


          <UserDialog
            onSubmit={handleAddUser}
            mode="add"
            trigger={
              <Button className='w-36 gap-1' size={'lg'}>
                <Plus />
                Add
              </Button>
            }
          />
        </div>
      </div>

      {/* toast */}
      <ToastContainer />

      {/* table */}
      <DataTable columns={columns} data={users} className="table-fixed" />
    </div>
  );
}