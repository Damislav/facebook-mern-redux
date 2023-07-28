import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import Login from "../pages/login";
import { memoizedUserSelector } from "../redux/features/selectors";

export default function LoggedInRoutes() {
  const user = useSelector(memoizedUserSelector);
  return user ? <Outlet /> : <Login />;
}
