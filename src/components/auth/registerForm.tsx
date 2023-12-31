import { useForm } from "react-hook-form";
import {
	Form,
	FormField,
	FormItem,
	FormLabel,
	FormControl,
	FormMessage,
	FormDescription,
} from "../ui/form";
import { Input } from "../ui/input";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "../ui/button";
import { registerFormSchema } from "@falcon-z/schemas/forms/auth/registerFormSchema";
import { db, user } from "@falcon-z/lib/utils/user";
import { useNavigate } from "@tanstack/react-router";

export default function RegisterForm() {
	const navigate = useNavigate();

	const form = useForm<z.infer<typeof registerFormSchema>>({
		resolver: zodResolver(registerFormSchema),
		defaultValues: {
			displayName: "",
			username: "",
			password: "",
		},
	});

	function generateUserId(displayName: string) {
		const cleanedName = displayName.replace(/\W/g, "");

		form.setValue(
			"username",
			cleanedName + Math.random().toString(36).substring(2, 8),
		);
	}

	function onSubmit(data: z.infer<typeof registerFormSchema>) {
		db.get(`~@${data.username}`, (result) => {
			console.log({ result });

			if (result) {
				form.setError("username", { message: "Username already taken" });
			} else {
				user.create(
					data.username,
					data.password,
					(ack: { ok: number | boolean; pub: string } | { err: string }) => {
						console.log({ ack });
						if (ack.ok) {
							navigate({ to: "/" });
						} else {
							form.setError("root", { message: ack?.err });
						}
					},
				);
			}
		});

		user.create(
			data.username,
			data.password,
			(ack: { ok: number | boolean; pub: string } | { err: string }) => {
				console.log({ ack });
			},
		);
	}

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className="flex gap-8 flex-col w-full"
			>
				<FormField
					control={form.control}
					name="displayName"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Display Name</FormLabel>
							<FormControl onBlur={() => generateUserId(field.value)}>
								<Input {...field} />
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
						<FormItem>
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
						<FormItem>
							<FormLabel>Password</FormLabel>
							<FormControl>
								<Input type="password" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<Button type="submit" className="place-self-end ">
					Submit
				</Button>
			</form>
		</Form>
	);
}
