import { Memo } from "@/components/icons"

export default function HeaderPage({ title }: { title: string }) {
    return (
        <div className="flex justify-between items-center mb-6 shadow-[0_2px_1px_0_#EEEEEE] bg-white p-6 rounded-lg">
            <div className="flex items-center gap-2 min-h-11">
                <Memo />
                {title}
            </div>
        </div>
    )
}