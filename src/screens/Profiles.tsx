import { useNavbar } from "@/components/NavbarProvider";
import { UserList } from "@/components/UserList";
import { useEffect } from "react";
 
const Profiles = () => {
   const { setTitle } = useNavbar();
   useEffect(() => {
      setTitle(`Profile List`);
   }, [setTitle]);
   return (
      <section>
         List of users
         <article className="bg-gray-800 w-full rounded">
            <UserList />
         </article>
      </section>
   );
};

export default Profiles;
