import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { EyeIcon, EyeSlashIcon } from "@/assets/icons";
import useLogin from "./useLogin";

export function LoginForm({
    className,
    ...props
}: React.ComponentPropsWithoutRef<"div">) {
    const { register, handleSubmit, errors, isLoading } = useLogin();
    const [isPasswordHide, setIsPasswordHide] = useState(true);

    const togglePassword = () => {
        setIsPasswordHide(!isPasswordHide);
    };

    return (
        <div className={cn("flex flex-col gap-6", className)} {...props}>
            <Card>
                <CardHeader>
                    <CardTitle className="text-2xl">Login</CardTitle>
                    <CardDescription>
                        Enter your email below to login to your account
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit}>
                        <div className="flex flex-col gap-6">
                            <div className="grid gap-2">
                                <Label htmlFor="email">Email</Label>
                                <Input
                                    helperText={
                                        errors.email?.message ?? undefined
                                    }
                                    {...register("email")}
                                    type="email"
                                    placeholder="h@example.com"
                                    required
                                />
                            </div>
                            <div className="grid gap-2">
                                <div className="flex items-center">
                                    <Label htmlFor="password">Password</Label>
                                </div>
                                <Input
                                    placeholder="Enter your password"
                                    helperText={
                                        errors.password?.message ?? undefined
                                    }
                                    icon={
                                        <button
                                            type="button"
                                            onClick={togglePassword}
                                            className="absolute right-3 flex items-center justify-center text-gray-500 hover:text-gray-700"
                                        >
                                            {!isPasswordHide ? (
                                                <EyeIcon />
                                            ) : (
                                                <EyeSlashIcon />
                                            )}
                                        </button>
                                    }
                                    type={isPasswordHide ? "password" : "text"}
                                    required
                                    {...register("password")}
                                />
                            </div>
                            <Button
                                loading={isLoading}
                                disabled={
                                    isLoading || Object.keys(errors).length > 0
                                }
                                type="submit"
                                className="w-full"
                            >
                                Login
                            </Button>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
}
