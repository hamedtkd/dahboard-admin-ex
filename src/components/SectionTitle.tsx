import { TitleDescriptionT } from "@/@types/global";
import { cn } from "@/lib/utils";

export default function SectionTitle({
    title,
    description,
    className,
}: TitleDescriptionT & { className?: string }) {
    return (
        <div className={cn("space-y-2 animate-fade-down delay-100", className)}>
            <h1 className={cn("font-medium lg:display-5 md:label-lg label-5 ")}>
                {title}
            </h1>
            <p className={cn("lg:paragraph-sm  paragraph-xs")}>
                {description}
            </p>
        </div>
    );
}
