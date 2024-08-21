import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./screens/Home";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./utils/queryClient";
import Profile from "./screens/Profile";
import Profiles from "./screens/Profiles";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CreateProfileForm } from "./screens/CreateProfile";
function App() {
   return (
      <>
         <QueryClientProvider client={queryClient}>
            <BrowserRouter>
               <Layout>
                  <Routes>
                     <Route path="/" element={<Home />} />
                     <Route path="/profiles" element={<Profiles />} />
                     <Route path="/profiles/create" element={<CreateProfileForm />} />
                     <Route path="/profiles/:id" element={<Profile />} />
                  </Routes>
               </Layout>
            </BrowserRouter>
         </QueryClientProvider>
         <ToastContainer />
      </>
   );
}

export default App;
