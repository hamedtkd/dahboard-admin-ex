import { useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
export default function NotFoundPage() {
    const navigate = useNavigate();
    return (
        <div className="flex flex-col items-center justify-center gap-6 min-h-[calc(100vh-120px)]">
            <h1 className="text-5xl font-bold text-center">404 - Not found</h1>
            <Button
                className="max-w-[200px] mx-auto animate-fade-up animate-delay-100"
                onClick={() => navigate("/")}
            >
                Back to home
            </Button>
        </div>
    );
}
