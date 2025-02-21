import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom"; 
import { createUsersColumns } from "./usersColumns";
import { Skeleton } from "@/components/ui/skeleton";
import { DataTable } from "@/components/ui/data-table";
import { Pagination } from "@/components/ui/pagination";
import { Button } from "@/components/ui/button";
import { useDeleteUserMutation, useGetUsersQuery } from "@/redux/api/usersApi";
import { toast } from "sonner";
import UserManagementHeader from "./UserManagementHeader";
import NoResultFound from "@/components/NoResultFound";
import MemberForm from "./MemberForm";

export type UserTableDataT = {
    id: string;
    email?: string;
    first_name: string;
    last_name: string;
    avatar: string;
};

export default function UserManagementTable() {
    const [searchParams, setSearchParams] = useSearchParams();
    const [userModalOpen, setUserModalOpen] = useState(false);
    const navigate = useNavigate();
    const page = Number(searchParams.get("page")) || 1;

    const handlePageChange = (page: number) => {
        setSearchParams({ page: page.toString() });
    };

    const { data, isLoading, refetch } = useGetUsersQuery(
        { page },
        {
            refetchOnMountOrArgChange: true,
        },
    );
    const [deleteUser] = useDeleteUserMutation();

    const dataLength = data?.data.length;
    const [modalDefaultValues, setModalDefaultValues] = useState<
        UserTableDataT | undefined
    >(undefined);

    const handleEdit = (user: UserTableDataT) => {
        setModalDefaultValues(user);
        setUserModalOpen(true);
    };

    const handleDelete = async (user: UserTableDataT) => {
        const res = await deleteUser({ id: user.id });
        if (res) {
            toast.success("User successfully deleted!");
        }
        refetch();
    };

    const handleCreate = () => {
        setModalDefaultValues(undefined);
        setUserModalOpen(true);
    };

    const columns = createUsersColumns(handleEdit, handleDelete);
    return (
        <div>
            <div className="flex flex-col gap-4    lg:min-h-0  min-h-[calc(100dvh-7rem)]">
                <UserManagementHeader onAdd={handleCreate} />
                {isLoading ? (
                    <div className="  space-y-2">
                        <Skeleton className="h-12 w-full rounded-full" />
                        <Skeleton className="h-12 w-full rounded-full" />
                        <Skeleton className="h-12 w-full rounded-full" />
                    </div>
                ) : data && dataLength && dataLength > 0 ? (
                    <>
                        <div className="h-full flex flex-col justify-between grow animate-fade-up ">
                            <DataTable
                                handleClickOnTable={user =>
                                    navigate(`/user/${user?.id}`)
                                }
                                columns={columns}
                                data={data?.data}
                            />
                            <div className="xl:[&>div]:!justify-end py-5">
                                <Pagination
                                    totalItems={data.total}
                                    itemsPerPage={data.per_page}
                                    currentPage={page}
                                    onPageChange={handlePageChange}
                                />
                            </div>
                        </div>
                    </>
                ) : (
                    <div>
                        <NoResultFound
                            title="No User Created Yet!"
                            description="Please Create new user!"
                        />
                        <Button
                            onClick={handleCreate}
                            className="max-w-[159px] mx-auto mt-5"
                        >
                            Create User
                        </Button>
                    </div>
                )}
            </div>
            <MemberForm
                setOpen={setUserModalOpen}
                open={userModalOpen}
                defaultValues={modalDefaultValues}
                isEdit={!!modalDefaultValues}
                onComplete={() => {
                    setUserModalOpen(false);
                    refetch();
                }}
            />
        </div>
    );
}
