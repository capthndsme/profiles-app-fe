import { Link } from "react-router-dom";
import { useNavbar } from "./NavbarProvider";

const NavBar = () => {
   const { title } = useNavbar();
   return (
      <nav className="w-full bg-gray-900  p-4">
         <section className="max-w-2xl m-auto flex gap-4 text-sm text-white">
            <Link to="/" className="flex-1 ">{title}</Link>
            <div className="flex gap-4 ">
              <Link to="/profiles">Profiles</Link>
              <Link to="/profiles/create">Create Profile</Link>
            </div>
         </section>
      </nav>
   );
};
export default NavBar;
