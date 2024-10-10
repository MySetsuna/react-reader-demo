import { NavLink, Outlet } from "react-router-dom";
import Header from "../Header/Header";

function Home() {
  return (
    <div className="flex flex-col h-full w-full">
      <Header />
      <div className="flex flex-auto">
        <div className="nav-sidebar basis-5 flex flex-col border-r p-4 border-solid border-red-100">
          <NavLink
            to="/demo1"
            className={({ isActive }) => {
              return isActive
                ? "whitespace-nowrap p-5 bg-blue-300"
                : "whitespace-nowrap hover:bg-blue-100 p-5";
            }}
          >
            DEMO 1
          </NavLink>
          <NavLink
            to="/demo2"
            className={({ isActive }) => {
              return isActive
                ? "whitespace-nowrap p-5 bg-blue-300"
                : "whitespace-nowrap hover:bg-blue-100 p-5";
            }}
          >
            DEMO 2
          </NavLink>
          <NavLink
            to="/demo3"
            className={({ isActive }) => {
              return isActive
                ? "whitespace-nowrap  p-5 bg-blue-300"
                : "whitespace-nowrap hover:bg-blue-100 p-5";
            }}
          >
            DEMO 3
          </NavLink>
          <NavLink
            to="/demo4"
            className={({ isActive }) => {
              return isActive
                ? "whitespace-nowrap  p-5 bg-blue-300"
                : "whitespace-nowrap hover:bg-blue-100 p-5";
            }}
          >
            DEMO 4
          </NavLink>
        </div>
        <div className="flex-auto p-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
export default Home;
