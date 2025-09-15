import { Skeleton } from "@/components/ui/skeleton";

export default function SkeletonTable(
    {
        rows = 4,
        columns = 4,
        actionCell = true,
    }: {
        rows?: number,
        columns?: number,
        actionCell?: boolean
    }) {
    return (
        <div className="w-full">
            {Array.from({ length: rows }).map((_, rowIndex) => (
                <div key={rowIndex} className="flex items-center gap-2 mb-2">
                    {Array.from({ length: columns }).map((_, columnIndex) => (
                        <Skeleton key={columnIndex} className={`h-10 ${actionCell && columnIndex == columns-1 ? 'w-10' : 'flex-1'}`} />
                    ))}
                </div>
            ))}
        </div>
    )
}