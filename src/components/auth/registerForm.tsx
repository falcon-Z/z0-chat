import { useForm } from "react-hook-form"
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage, FormDescription } from "../ui/form"
import { Input } from "../ui/input"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "../ui/button"
import { registerFormSchema } from "@falcon-z/schemas/forms/auth/registerFormSchema"


export default function RegisterForm() {
    const form = useForm<z.infer<typeof registerFormSchema>>(
        {
            resolver: zodResolver(registerFormSchema),
            defaultValues: {
                displayName: "",
                username: "",
                password: "",
            }
        }
    )

    function onSubmit(data: z.infer<typeof registerFormSchema>) {
        console.log(data)
    }

    return (
        <Form {...form}  >
            <form onSubmit={form.handleSubmit(onSubmit)} className="flex gap-8 flex-col w-full">
                <FormField
                    control={form.control}
                    name="displayName"
                    render={({ field }) => (
                        <FormItem >
                            <FormLabel>Display Name</FormLabel>
                            <FormControl>
                                <Input placeholder="Display name" {...field} />
                            </FormControl>
                            <FormDescription>Your public persona</FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="username"
                    render={({ field }) => (
                        <FormItem >
                            <FormLabel>UserId</FormLabel>
                            <FormControl>
                                <Input placeholder="Username" {...field} />
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
                                <Input type="password" placeholder="Password" {...field} />
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