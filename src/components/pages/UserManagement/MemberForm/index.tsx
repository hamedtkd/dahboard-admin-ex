import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { UserTableDataT } from "../UserManagementTable";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import useMember from "./useMember";

export default function MemberForm({
    onComplete,
    isEdit = false,
    defaultValues,
    setOpen,
    open,
}: {
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    open: boolean;
    onComplete: () => void;
    isEdit?: boolean;
    defaultValues?: UserTableDataT;
}) {
    const { register, handleSubmit, errors, isLoading, setValue, isValid } =
        useMember({ onComplete, isEdit, id: defaultValues?.id });

    useEffect(() => {
        setValue("name", defaultValues?.first_name ?? "");
    }, [defaultValues]);
    return (
        <Dialog open={open} onOpenChange={e => setOpen(e)}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle className="animate-fade-up ">
                        {isEdit ? "Edit" : "Create"} profile
                    </DialogTitle>
                    <DialogDescription className="animate-fade-up ">
                        {isEdit
                            ? "Update user details."
                            : "Please fill the form."}
                    </DialogDescription>
                </DialogHeader>

                <form onSubmit={handleSubmit} className="space-y-5 ">
                    <Input
                        defaultValue={defaultValues?.first_name}
                        className="animate-fade-right animate-delay-100"
                        helperText={errors.name?.message ?? undefined}
                        placeholder="Ex: Hamed "
                        {...register("name")}
                    />
                    <Input
                        className="animate-fade-right animate-delay-100"
                        placeholder="Ex: Front-end"
                        {...register("job")}
                    />

                    <footer className="flex justify-end gap-2 md:[&_button]:w-[95px] animate-fade-right animate-delay-100 sticky -bottom-0 bg-white">
                        <Button
                            loading={isLoading}
                            disabled={
                                isLoading ||
                                Object.keys(errors).length > 0 ||
                                (!isValid && !isEdit)
                            }
                            size="sm"
                            type="submit"
                        >
                            {isEdit ? "Update" : "Create"}
                        </Button>
                    </footer>
                </form>
            </DialogContent>
        </Dialog>
    );
}
