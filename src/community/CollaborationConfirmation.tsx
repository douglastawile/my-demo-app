import { AiOutlineCheckCircle } from "react-icons/ai";
import { Link } from "react-router-dom";

function CollaborationConfirmation() {
  return (
    <div className="container mx-auto p-4 text-center dark:bg-slate-950">
      <AiOutlineCheckCircle className="w-16 h-16 mx-auto text-green-500" />
      <h2 className="text-2xl font-bold my-4 dark:text-slate-300">
        Thank You for Joining!
      </h2>
      <p className="mb-4 dark:text-slate-400">
        Your request to join the collaboration has been successfully submitted.
      </p>
      <p className="mb-4 dark:text-slate-500">
        Please check your email for confirmation and further instructions.
      </p>
      <Link
        to={"/community"}
        className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
      >
        Back to Community
      </Link>
    </div>
  );
}

export default CollaborationConfirmation;
