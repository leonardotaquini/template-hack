
import { Card, CardContent, CardHeader } from "@/components/shadcn/ui/card";
import { LockKeyhole } from "lucide-react";
import { Outlet } from 'react-router-dom'

export const FormLayout = () => {
    return (

        <Card className="h-full border-none">
            <CardHeader className="flex justify-center items-center">
                <LockKeyhole size={48} />
            </CardHeader>
            <CardContent>
                <Outlet />
            </CardContent>
        </Card>
    )
}
