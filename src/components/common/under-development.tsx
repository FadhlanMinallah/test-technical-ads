"use client"

import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Construction } from "lucide-react"
import { Link } from "react-router-dom"
import HeaderPage from "./header-page"

export default function UnderDevelopmentCard({ title }: { title: string }) {
    return (
        <>
            <HeaderPage title={title} />
            <div className="content-card h-[400px] !min-h-auto flex justify-center">
                <Card className="border-0 shadow-none p-0 mb-0 mt-16">
                    <CardHeader className="flex flex-col items-center space-y-2">
                        <Construction className="h-12 w-12 text-accent-primary-foreground" />
                        <CardTitle className="text-xl font-bold">
                            This feature is under development
                        </CardTitle>
                    </CardHeader>

                    <CardContent>
                        <p className="text-muted-foreground">
                            This feature is currently under development and will be available soon.
                            Please come back later ✨
                        </p>
                    </CardContent>

                    <CardFooter className="flex justify-center">
                        {/* <Button asChild>
            <Link to={'/'}>Back to Home</Link>
          </Button> */}
                    </CardFooter>
                </Card>
            </div>
        </>
    )
}
