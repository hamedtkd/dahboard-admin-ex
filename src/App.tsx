import { RouterProvider } from "react-router-dom";
import { router } from "./routes/index";
import { Toaster } from "@/components/ui/sonner";
import ReduxProvider from "./redux/ReduxProvider";

function App() {
    return (
        <ReduxProvider>
            <Toaster />
            <RouterProvider router={router} />
        </ReduxProvider>
    );
}

export default App;
