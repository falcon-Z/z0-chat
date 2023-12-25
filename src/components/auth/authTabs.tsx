import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import LoginForm from "./loginForm";
import RegisterForm from "./registerForm";

export default function AuthTabs() {
    return (
        <div className=" w-full">
            <Tabs defaultValue="login" className="w-full flex flex-col justify-center items-center gap-8" >
                <TabsList className="w-full">
                    <TabsTrigger value="login" className="w-full">Sign In</TabsTrigger>
                    <TabsTrigger value="register" className="w-full">Sign Up</TabsTrigger>
                </TabsList>
                <TabsContent value="login" className="w-full"><LoginForm /></TabsContent>
                <TabsContent value="register" className="w-full"><RegisterForm /></TabsContent>
            </Tabs>

        </div >
    )
}