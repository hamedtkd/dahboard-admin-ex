import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";
import { cn } from "@/lib/utils";
import { UserTableDataT } from "./UserManagementTable";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

export const createUsersColumns = (
    handleEdit?: (user: UserTableDataT) => void,
    handleDelete?: (user: UserTableDataT) => void,
): ColumnDef<UserTableDataT>[] => [
    {
        accessorKey: "user",
        header: "Name",
        cell: ({ row }) => {
            const { last_name, first_name, avatar } = row.original;
            return (
                <div
                    className={cn(
                        "lg:min-w-[267px] md:min-w-[146px] min-w-[116px]  break-words flex items-center gap-2",
                    )}
                >
                    <Avatar>
                        <AvatarImage src={avatar} alt={`${first_name} Profile`} />
                        <AvatarFallback>
                            {first_name?.slice(0, 2)}
                        </AvatarFallback>
                    </Avatar>

                    <p className="label-sm">
                        {first_name ?? "-"} {last_name ?? "-"}
                    </p>
                </div>
            );
        },
    },
    {
        accessorKey: "email",
        header: "Email",
        cell: ({ cell }) => {
            return (
                <div className="lg:min-w-[267px] md:min-w-[209px] min-w-[171px]  break-words">
                    {cell.getValue() ? String(cell.getValue()) : "-"}
                </div>
            );
        },
    },

    {
        accessorKey: "edit",
        header: "",
        cell: ({ row }) => {
            const user = row.original;
            return (
                <>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button
                                className="px-1 py-1 h-[28px]"
                                variant="outline"
                            >
                                <span className="sr-only">Open menu</span>
                                <MoreHorizontal className="  w-4" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent
                            onClick={e => e.stopPropagation()}
                            align="end"
                        >
                            <DropdownMenuItem
                                onClick={() => {
                                    handleEdit && handleEdit(user);
                                }}
                            >
                                Edit
                            </DropdownMenuItem>
                            <DropdownMenuItem
                                onClick={() => {
                                    handleDelete && handleDelete(user);
                                }}
                            >
                                Delete
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </>
            );
        },
    },
];
