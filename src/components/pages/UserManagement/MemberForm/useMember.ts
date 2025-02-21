import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import * as yup from "yup";

import {
  useCreateNewUserMutation,
  useEditUserMutation,
} from "@/redux/api/usersApi";
import { toast } from "sonner";
// import { errorMessage } from "@lib/utils";


export type NewMemberFormDataT = {
  name: string;
  job: string;
};

const useMember = ({
  onComplete,
  isEdit,
  id,
}: {
  onComplete: () => void;
  isEdit: boolean;
  id?: string;
}) => {
  const newMemberFormSchema = yup.object().shape({
    name: yup.string().required("First name is required!"),
    job: yup.string().required("Last name is required!"),


  });
  const [newMember] = useCreateNewUserMutation();
  const [editMember] = useEditUserMutation();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
    setValue,
    clearErrors,
    trigger,
  } = useForm<NewMemberFormDataT>({
    resolver: yupResolver(newMemberFormSchema),
    // mode: "onChange",
  });

  const onSubmit = async (data: NewMemberFormDataT) => {
    setIsLoading(true);
    try {
      if (isEdit) {
        await editMember({ body: data, id }).unwrap();
        toast.success("User successfully updated!");

      } else {
        await newMember({ body: data, }).unwrap();
        toast.success("User successfully created!");
      }
      reset();
      onComplete();

    } catch (error: any) {
      const messages = error?.data?.message;
      console.log(messages)
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
    setValue,
    clearErrors,
    isValid,
    trigger,
  };
};

export default useMember;
