import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import Login from "../pages/login";

// eslint-disable-next-line import/no-anonymous-default-export
export default function () {
  const { user } = useSelector((state) => ({ ...state }));

  return user ? <Outlet /> : <Login />;
}
