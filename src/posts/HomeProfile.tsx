import { Card } from "flowbite-react";
import { Link } from "react-router-dom";

function HomeProfile() {
  return (
    <Card className="shadow-sm max-w-sm my-2 hidden lg:block sm:my-0 mx-2">
      <div className="flex flex-col items-center pb-10">
        <img
          alt="Bonnie image"
          height={80}
          src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
          width={80}
          className="mb-3 rounded-full shadow-lg"
        />
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
          Queeny Takyi Ansah
        </h5>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          Teacher
        </span>

        <span className="text-sm text-gray-500 dark:text-gray-400">
          Hello! My name is Queeny Takyi Ansah, and I am passionate about
          teaching mathematics. With over 4 years of experience...
        </span>

        <div className="flex justify-between text-slate-400 mt-2">
          <p className="pr-1 mr-1">
            {" "}
            Posts <br /> 30
          </p>
          {" | "}
          <p className="pr-1 mr-1">
            {" "}
            Followings <br />
            10
          </p>
          {" | "}
          <p className="pl-1 ml-1">
            {" "}
            Followers <br />
            20
          </p>
        </div>
        <hr className="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700" />
        <Link
          to={"/profile"}
          className="py-1 px-3 mt-2 rounded-lg bg-blue-600 text-white hover:bg-blue-800"
        >
          View Profile
        </Link>
      </div>
    </Card>
  );
}

export default HomeProfile;
