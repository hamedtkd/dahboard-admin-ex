import { cn } from "@/lib/utils";
import "./styles.css";

export default function Spinner({
    className,
    variant = "white",
}: {
    className?: string;
    variant?: "primary" | "white";
}) {
    return (
        <div className="flex justify-center items-center">
            <div
                className={cn(
                    "spinner-loader",
                    {
                        "after:!border-primary": variant === "primary",
                    },
                    className,
                )}
            />
        </div>
    );
}
