import { useForm } from "react-hook-form"
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage, FormDescription } from "../ui/form"
import { Input } from "../ui/input"
import { z } from "zod"
import { loginSchema } from "@falcon-z/schemas/forms/auth/loginFormSchema"

import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "../ui/button"


export default function LoginForm() {
    const form = useForm<z.infer<typeof loginSchema>>(
        {
            resolver: zodResolver(loginSchema),
            defaultValues: {
                username: "",
                password: "",
            }
        }
    )

    function onSubmit(data: z.infer<typeof loginSchema>) {
        console.log(data)
    }

    return (
        <Form {...form}  >
            <form onSubmit={form.handleSubmit(onSubmit)} className="flex gap-8 flex-col w-full">
                <FormField
                    control={form.control}
                    name="username"
                    render={({ field }) => (
                        <FormItem >
                            <FormLabel>UserId</FormLabel>
                            <FormControl>
                                <Input {...field} />
                            </FormControl>
                            <FormDescription>Unique handle for access</FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                        <FormItem >
                            <FormLabel >Password</FormLabel>
                            <FormControl >
                                <Input type="password"  {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit" className="place-self-end ">Submit</Button>
            </form>
        </Form>
    )
}