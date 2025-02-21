import SectionTitle from "@/components/SectionTitle";
import { Button } from "@/components/ui/button";

type UserManagementHeaderProps = {
    onAdd: () => void;
};

export default function UserManagementHeader({
    onAdd,
}: UserManagementHeaderProps) {
    return (
        <header className="flex flex-col md:flex-row justify-start md:justify-between  md:items-center  gap-md animate-fade-left lg:py-xl py-md">
            <div className="w-full">
                <SectionTitle
                    className="animate-delay-0 animate-fade-right"
                    title={"User Management"}
                    description="You can Create, Edit or delete users."
                />
            </div>
            <div className="flex gap-2 items-center w-full  md:justify-end ">
                <Button className="md:max-w-[150px]" onClick={onAdd}>
                    Create User
                </Button>
            </div>
        </header>
    );
}
