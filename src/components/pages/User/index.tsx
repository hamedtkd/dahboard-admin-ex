import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { useGetUserQuery } from "@/redux/api/usersApi";
import { useNavigate, useParams } from "react-router-dom";

const UserPage = () => {
    const navigate = useNavigate();
    const { id } = useParams();

    const { data, isLoading } = useGetUserQuery(
        { id },
        {
            refetchOnMountOrArgChange: true,
        },
    );
    const user = data?.data;

    return (
        <main className="container mx-auto space-y-12">
            <Button variant="outline" onClick={() => navigate(-1)}>
                Back
            </Button>
            {isLoading ? (
                <div className="flex items-center space-x-4">
                    <Skeleton className="h-40 w-40 rounded-full" />
                    <div className="space-y-2">
                        <Skeleton className="h-10 w-[250px]" />
                        <Skeleton className="h-4 w-[200px]" />
                    </div>
                </div>
            ) : (
                user && (
                    <div className="flex gap-5 items-center">
                        <Avatar className="w-40 h-40">
                            <AvatarImage
                                className="w-40 h-40"
                                height={64}
                                width={64}
                                src={user.avatar}
                                alt={`${user.first_name} Profile`}
                            />
                            <AvatarFallback>
                                {user.first_name?.slice(0, 2)}
                            </AvatarFallback>
                        </Avatar>
                        <div className="space-y-2">
                            <p className="lg:text-4xl font-medium">
                                {data?.data.first_name} {data?.data.last_name}
                            </p>
                            <p className="lg:text-xl text-gray-600">
                                {data?.data.email}
                            </p>
                        </div>
                    </div>
                )
            )}
        </main>
    );
};

export default UserPage;
