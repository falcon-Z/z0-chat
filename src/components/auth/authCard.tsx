import { Card, CardContent } from "../ui/card";
import AuthTabs from "./authTabs";

export default function AuthCard() {
    return (
        <Card className="w-full max-w-md flex shadow-2xl shadow-gray-400 bg-opacity-50 p-4">
            <CardContent className="flex flex-col items-start justify-center w-full">
                <AuthTabs />
            </CardContent>
        </Card>
    )
}