import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import CreateUserSchema from "@/validators/CreateUserSchema";
import { z } from "zod";
import { useCreateProfile } from "@/hooks/profile/useCreateProfile";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useNavbar } from "@/components/NavbarProvider";

export const CreateProfileForm = () => {
   /**
    * Hooks
    */
   const navigate = useNavigate();
   const { setTitle } = useNavbar();
 
   const [loading, setLoading] = useState(false);
   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm<z.infer<typeof CreateUserSchema>>({
      resolver: zodResolver(CreateUserSchema),
   });
   const { mutate, isError } = useCreateProfile();

   /**
    * Effects
    */

   useEffect(() => {
      setTitle(`Create user profile`);
   }, [setTitle]);

   /**
    * Functions
    */
   const onSubmit = (data: z.infer<typeof CreateUserSchema>) => {
      setLoading(true);
      mutate(data, {
         onSuccess: (user) => {
            // Handle successful profile creation
            console.log("Profile created:", user);
            toast("Profile created!");
            navigate(`/profiles/${user.id}`);
         },
         onError: (err) => {
            // Handle error
            console.error("Error creating profile:", err);
            toast.error("Failed to create profile: " + err?.message || "Unknown message.");
         },
      });
   };

   return (
      <section className="space-y-4 bg-gray-900">
         <form onSubmit={handleSubmit(onSubmit)} className="p-4 py-2">
            {isError && <div className="bg-red-300 text-black text-center rounded py-1 my-2">Error creating profile.</div>}
            <div className="grid grid-cols-2 gap-4">
               <div>
                  <label htmlFor="firstName" className="block font-medium">
                     First Name
                  </label>
                  <input
                     {...register("firstName")}
                     id="firstName"
                     type="text"
                     className={`w-full bg-slate-400 text-black rounded h-8 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 ${
                        errors.firstName ? "border-red-500" : ""
                     }`}
                  />
                  {errors.firstName && <p className="text-red-500">{errors.firstName.message}</p>}
               </div>
               <div>
                  <label htmlFor="lastName" className="block font-medium">
                     Last Name
                  </label>
                  <input
                     {...register("lastName")}
                     id="lastName"
                     type="text"
                     className={`w-full bg-slate-400 text-black rounded h-8 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 ${
                        errors.lastName ? "border-red-500" : ""
                     }`}
                  />
                  {errors.lastName && <p className="text-red-500">{errors.lastName.message}</p>}
               </div>
            </div>

            <div>
               <label htmlFor="middleName" className="block font-medium ">
                  Middle Name
               </label>
               <input
                  {...register("middleName")}
                  id="middleName"
                  type="text"
                  className={`w-full bg-slate-400 text-black rounded h-8 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 ${
                     errors.middleName ? "border-red-500" : ""
                  }`}
               />
               {errors.middleName && <p className="text-red-500">{errors.middleName.message}</p>}
            </div>

            <div>
               <label htmlFor="email" className="block font-medium ">
                  Email
               </label>
               <input
                  {...register("email")}
                  id="email"
                  type="email"
                  className={`w-full bg-slate-400 text-black rounded h-8 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 ${
                     errors.email ? "border-red-500" : ""
                  }`}
               />
               {errors.email && <p className="text-red-500">{errors.email.message}</p>}
            </div>

            <div>
               <label htmlFor="phoneNumber" className="block font-medium ">
                  Phone Number
               </label>
               <input
                  {...register("phoneNumber")}
                  
                  id="phoneNumber"
                  type="tel"
                  className={`w-full text-black  bg-slate-400 rounded h-8 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 ${
                     errors.phoneNumber ? "border-red-500" : ""
                  }`}
               />
               {errors.phoneNumber && <p className="text-red-500">{errors.phoneNumber.message}</p>}
            </div>

            <div>
               <label htmlFor="photo" className="block font-medium ">
                  Photo
               </label>
               <input
                  {...register("photo")}
                  id="photo"
                  type="file"
     
                  className={`w-full border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 ${
                     errors.photo ? "border-red-500" : ""
                  }`}
               />
      
               {errors.photo && <p className="text-red-500">{errors.photo.message}</p>}
            </div>

            <button disabled={loading} type="submit" className="bg-indigo-500 w-full rounded text-white py-2 px-4 mt-4 hover:bg-indigo-600">
               Create Profile
            </button>
         </form>
      </section>
   );
};
