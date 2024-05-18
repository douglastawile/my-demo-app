import { FC, ReactElement } from "react";
import { Card } from "flowbite-react";
import {
  FaUserFriends,
  FaChalkboardTeacher,
  FaHandsHelping,
  FaBookOpen,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const CommunityPage: FC = (): ReactElement => {
  return (
    <div className="container mx-auto px-4 mt-4 dark:bg-slate-950">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        {/* Discoverability Card */}
        <Card>
          <FaUserFriends className="h-8 w-8 text-blue-500" />
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Discover Teachers
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Connect with educators who share similar interests, subjects, or
            locations.
          </p>
          <Link
            to={"/discover-teacher"}
            className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Explore
          </Link>
        </Card>

        {/* Networking Card */}
        <Card>
          <FaChalkboardTeacher className="h-8 w-8 text-green-500" />
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Networking
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Build your professional network and exchange innovative teaching
            ideas.
          </p>
          <Link
            to={"/network"}
            className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Network
          </Link>
        </Card>

        {/* Collaboration Card */}
        <Card>
          <FaHandsHelping className="h-8 w-8 text-yellow-500" />
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Collaboration
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Collaborate on projects, lesson plans, and research initiatives.
          </p>
          <Link
            to={"/collaboration"}
            className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Collaborate
          </Link>
        </Card>

        {/* Resource Sharing Card */}
        <Card>
          <FaBookOpen className="h-8 w-8 text-red-500" />
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Resource Sharing
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Share and access valuable resources, materials, and best practices.
          </p>
          <Link
            to={"/"}
            className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Share Resources
          </Link>
        </Card>
      </div>
    </div>
  );
};

export default CommunityPage;
