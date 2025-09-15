"use client"

import { useEffect, useState } from "react"

import { User } from "@/types/user"
import usersData from "@/data/users.json"
import { Bounce, toast, ToastContainer } from "react-toastify"

// components
import { Button } from "@/components/ui/button"
import { getColumns } from "./components/column"
import { DataTable } from "./components/data-table"
import { InputWithIcon } from "@/components/ui/input-with-icon"
import { UserDialog } from "@/components/custom/dialog/dialog-users"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// icons
import { Plus, Search } from "lucide-react"
import { SkeletonTable } from "@/components/common"
import HeaderUsers from "./components/header-users"


export default function UsersPage() {

  const [users, setUsers] = useState<User[]>(usersData)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  useEffect(() => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
    }, 1000)
  }, []) // agar dipanggil hanya ketika render

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
      <HeaderUsers />

      {/* action */}
      <div className="flex flex-col md:flex-row gap-4 md:gap-0 md:justify-between md:items-center mb-8">
        {/* filter */}
        <Select>
          <SelectTrigger className="w-full md:w-[180px]" size={'lg'}>
            <SelectValue placeholder="Filter" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value='id'>ID</SelectItem>
            <SelectItem value='username'>Username</SelectItem>
            <SelectItem value='name'>Name</SelectItem>
            <SelectItem value='phone'>Telephone Number</SelectItem>
          </SelectContent>
        </Select>

        {/* search */}
        <div className="flex flex-col md:flex-row md:items-center gap-4">
          <InputWithIcon
            icon={Search}
            placeholder="Search user"
            className="w-64 flex-1 md:flex-none"
          />

          {/* add users */}
          <UserDialog
            onSubmit={handleAddUser}
            mode="add"
            trigger={
              <Button className='w-full md:w-36 gap-1' size={'lg'}>
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
      {isLoading ? (
        <SkeletonTable rows={10} columns={5} />
      ) : (
        <DataTable columns={columns} data={users} className="table-fixed" />
      )}
    </div>
  );
}