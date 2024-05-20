import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex items-center justify-center h-screen w-full bg-gray-50">
      <div className="flex flex-col items-center py-12 px-20 rounded-md border bg-white border-gray-200">
        <h1 className="text-8xl font-bold">404</h1>
        <p className="text-xl font-semibold tracking-wide">Page Not Found</p>
        <p className="text-gray-700 mb-5 italic">Sorry, the page you are looking for could not be found.</p>
        <Link
          to="/"
          className="text-white bg-[#0c0a09] px-4 py-2 font-medium rounded-md flex items-center gap-2"
        >
          <ArrowLeft size={14} />
          Return Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
