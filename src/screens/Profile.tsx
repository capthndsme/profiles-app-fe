import { useNavbar } from "@/components/NavbarProvider";
import SimpleLoader from "@/components/SimpleLoader";
import { useGetProfile } from "@/hooks/profile/useGetProfile";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const Profile = () => {
   const { id } = useParams();
   const { setTitle } = useNavbar();
   const { data, isLoading, error } = useGetProfile(id);
   useEffect(() => {
      setTitle("View Profile");
   }, [setTitle]);

   if (isLoading) {
      return <SimpleLoader />;
   }

   if (error) {
      return <div className="text-center p-2">Error while getting profile: {error.message}</div>;
   }

   if (data)
      return (
         <section className="bg-gray-900 rounded p-2 px-4">
            <header>
               <div>User Information - User {id}</div>
            </header>

            <section className="flex justify-center gap-4 mt-2">
               <article className="w-1/3 p-2 px-4 rounded-md">
                  <small>First Name</small>
                  <div>{data.firstName}</div>
               </article>
               <article className="w-1/3 p-2 px-4  rounded-md">
                  <small>Middle Name</small>
                  <div>{data.middleName ?? "N/A"}</div>
               </article>
               <article className="w-1/3 p-2 px-4 rounded-md">
                  <small>Last Name</small>
                  <div>{data.lastName}</div>
               </article>
            </section>

            <section className="flex justify-center gap-4 mt-2">
               <article className="w-1/3  p-2 px-4 rounded-md">
                  <small>Email</small>
                  <div>{data.email}</div>
               </article>
               <article className="w-1/3 p-2 px-4  rounded-md">
                  <small>Phone Number</small>
                  <div>{data.phoneNumber}</div>
               </article>
               <article className="w-1/3  p-2 px-4 rounded-md">
                  <small>Profile photo</small>
                  {data.userPhoto[0] ? (
                     <img
                        alt="user profile"
                        src={data.userPhoto[0].photoLocation}
                        className="w-full mt-2 aspect-square object-cover rounded-full"
                     />
                  ) : (
                     <div>No profile photo.</div>
                  )}
               </article>
            </section>
         </section>
      );

   return <div>Unknown error while rendering profiles.</div>;
};

export default Profile;
