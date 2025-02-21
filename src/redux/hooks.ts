import {
    type TypedUseSelectorHook,
    useDispatch,
    useSelector,
} from "react-redux";
import { DispatchFunction, RootState } from "./store";

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch: DispatchFunction = useDispatch;
