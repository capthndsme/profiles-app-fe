import { Loader2 } from "lucide-react";

const SimpleLoader = () => {
   return (
      <div className="flex justify-center p-2">
         <Loader2 className="animate-spin" />
      </div>
   );
};
export default SimpleLoader;
