import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useAppSelector } from "@/redux/hooks";

const UserProfile = () => {
    const userInfo = useAppSelector(state => state.accessToken);

    return (
        <div className=" p-2 ">
            <div className="  flex flex-row items-center gap-3   ">
                <Avatar>
                    <AvatarImage
                        className="object-cover"
                        alt={userInfo?.email?.slice(0, 2)}
                    />
                    <AvatarFallback>
                        {userInfo?.email?.slice(0, 2)}
                    </AvatarFallback>
                </Avatar>
                <div className="md:contents hidden">
                    <div className="min-w-7xl">
                        <p className="text-strong label-sm ">
                            {userInfo.email}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;
