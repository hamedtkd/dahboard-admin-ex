import { cn } from "@/lib/utils";

export default function NoResultFound({
    title,
    description,
    className,
}: {
    title?: string;
    description?: string;
    className?: string;
}) {
    return (
        <div
            className={cn(
                "flex flex-col justify-center items-center text-center gap-5 pt-24 relative z-[1] ",
                className,
            )}
        >
            <div className="space-y-2">
                {title && (
                    <h1 className="text-lg leading-[24px]  font-medium">
                        {title}
                    </h1>
                )}
                {description && <p className=" text-sub">{description}</p>}
            </div>
        </div>
    );
}
