import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { memoizedUserSelector } from "../redux/features/selectors";

export default function NotLoggedInRoutes() {
  const user = useSelector(memoizedUserSelector);

  return user ? <Navigate to="/" /> : <Outlet />;
}
