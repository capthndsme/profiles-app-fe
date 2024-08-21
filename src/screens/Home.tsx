import { useNavbar } from "@/components/NavbarProvider";
import { UserList } from "@/components/UserList";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Home = () => {
   const { setTitle } = useNavbar();
   useEffect(() => {
      setTitle(`Profiles App`);
   }, [setTitle]);
   return (
      <>
         <section>
            <header className="text-cneter">Welcome to Profiles app</header>
            <Link className="block w-full text-center p-2 text-sm rounded bg-blue-500 text-white" to="/profiles/create">
               Create Profile
            </Link>
         </section>
         <section className="mt-4">
            List of users
            <article className="bg-gray-800 w-full rounded">
               <UserList lightWeight />
            </article>
         </section>
      </>
   );
};

export default Home;
