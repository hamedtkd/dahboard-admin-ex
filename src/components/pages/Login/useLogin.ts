import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "sonner";
import { useState } from "react";

import Cookies from "js-cookie";
import { useLoginMutation } from "@/redux/api/authApi";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "@/redux/hooks";
import { setAccessToken } from "@/redux/modules/accessToken";

export type LoginFormData = {
    email: string;
    password: string;
};

const useLogin = () => {
    const loginFormSchema = yup.object().shape({
        email: yup
            .string()
            .email("Email is not valid!")
            .required("Email is required!"),
        password: yup.string().required("Password is required!").min(8),
    });
    const [login] = useLoginMutation();
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const dispatch = useAppDispatch();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginFormData>({
        resolver: yupResolver(loginFormSchema),
    });

    const onSubmit = async (data: LoginFormData) => {
        setIsLoading(true);
        try {
            const res = await login(data).unwrap();
            const { token } = res;
            if (token) {
                toast.success("Welcome back");
                Cookies.set("token", token);
            }

            if (token) {
                dispatch(
                    setAccessToken({
                        token: token,
                        email: data.email,
                    }),
                );
            }

            navigate(`/`);
        } catch (error: any) {
            const messages = error?.data?.error;

            toast.error(messages);
        } finally {
            setIsLoading(false);
        }
    };
    return {
        register,
        onSubmit,
        errors,
        handleSubmit: handleSubmit(onSubmit),
        isLoading,
    };
};

export default useLogin;
