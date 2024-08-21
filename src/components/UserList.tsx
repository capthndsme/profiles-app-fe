import { useGetProfiles } from "@/hooks/profile/useGetProfiles";
import { Link } from "react-router-dom";
import SimpleLoader from "./SimpleLoader";

export const UserList = ({ lightWeight = false }) => {
   const { data, isLoading, error } = useGetProfiles();

   if (isLoading) {
      return <SimpleLoader />
   }

   if (error) {
      return <div className="text-center p-2">Error while getting profiles: {error.message}</div>;
   }

   if (data)
      return (
         <article className="bg-gray-900 rounded px-4">
            <div className="flex flex-col">
               <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                  <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                     <div className="overflow-hidden">
                        <table className="min-w-full text-left text-sm font-light text-surface dark:text-white">
                           <thead className="border-b border-neutral-200 font-medium dark:border-white/10">
                              <tr>
                                 <td>User ID</td>
                                 <td>Name</td>
                                 {lightWeight ? null : (
                                    <>
                                       <td>Email</td>
                                       <td>Phone Number</td>
                                    </>
                                 )}
                              </tr>
                           </thead>
                           <tbody>
                              {data?.map((user) => (
                                 <tr key={user.id}>
                                    <td>
                                       <Link className="text-blue-200" to={"/profiles/" + user.id}>
                                          {user.id}
                                       </Link>
                                    </td>
                                    <td>
                                       <Link to={`/profiles/${user.id}`}>
                                          {user.lastName}, {user.firstName} {user.middleName}
                                       </Link>
                                    </td>
                                    {lightWeight ? null : (
                                       <>
                                          <td>{user.email}</td>
                                          <td>{user.phoneNumber}</td>
                                       </>
                                    )}
                                 </tr>
                              ))}
                           </tbody>
                        </table>
                     </div>
                  </div>
               </div>
            </div>
         </article>
      );

   return <div>Unknown error while rendering profiles.</div>;
};
