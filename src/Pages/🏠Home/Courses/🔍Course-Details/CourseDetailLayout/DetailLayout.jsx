import { NavLink, Outlet } from "react-router-dom";


const DetailLayout = () => {
      return (
            <div className="flex w-full h-[100vh]  sticky top-0">
                        <div className="flex flex-col bg-[#7f7f7f35] w-[250px] "><h1 className="text-5xl font-bold">Sidebar</h1>
                        <NavLink>item__1</NavLink>
                        <NavLink>item__2</NavLink>
                        <NavLink>item__3</NavLink>
                        <NavLink>item__4</NavLink>
                        <NavLink>item__5</NavLink>
                        <NavLink>item__6</NavLink>
                        <NavLink>item__7</NavLink>
                        <NavLink>item__8</NavLink>
                        <NavLink>item__9</NavLink>
                        <NavLink>item__10</NavLink>
                        <NavLink>item__11</NavLink>
                        <NavLink>item__12</NavLink>
                        <NavLink>item__13</NavLink>
                        </div>

                        <div className="flex-1">
                        <Outlet></Outlet>

                        </div>
            </div>
      );
};

export default DetailLayout;