import NavBar from "./NavBar";
import { NavbarProvider } from "./NavbarProvider";

const Layout = ({ children }: { children: JSX.Element }) => {
   return (
      <NavbarProvider>
         <div className="h-screen w-screen">
            <NavBar />
            <section className="max-w-2xl m-auto pt-4   text-white">{children}</section>
         </div>
      </NavbarProvider>
   );
};

export default Layout;
