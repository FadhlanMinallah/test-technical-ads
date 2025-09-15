import { Memo } from "@/components/icons"
import { MoreHorizontal, Plus, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function HeaderUsers() {
    return (
        <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-2">
          <Memo />
          List User
        </div>
        <Select>
          <SelectTrigger className="w-auto" size={'lg'} withIcon={false}>
            <MoreHorizontal />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value='import'>Import</SelectItem>
            <SelectItem value='export'>Export</SelectItem>
          </SelectContent>
        </Select>
      </div>
    )
}