import { NavLink, Outlet } from "react-router-dom";
import Header from "../Header/Header";

function Home() {
  return (
    <div className="flex flex-col h-full w-full text-2xl">
      <Header />
      <div className="flex flex-auto">
        <div className="nav-sidebar basis-5 flex flex-col border-r p-4 border-solid border-red-100">
          <NavLink
            to="/demo1"
            title="使用memo，useMemo配合Context场景，实现跨组件层级更新"
            className={({ isActive }) => {
              return isActive
                ? "whitespace-nowrap p-5 bg-blue-300"
                : "whitespace-nowrap hover:bg-blue-100 p-5";
            }}
          >
            DEMO 1：Context实现组件跨层级更新
          </NavLink>
          <NavLink
            to="/demo2"
            className={({ isActive }) => {
              return isActive
                ? "whitespace-nowrap p-5 bg-blue-300"
                : "whitespace-nowrap hover:bg-blue-100 p-5";
            }}
          >
            DEMO 2： 渲染函数和函数组件的区别
            <br />
            ——父组件完成渲染，子组件开始渲染。
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
