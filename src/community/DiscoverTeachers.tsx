import { Card, Avatar, Button } from "flowbite-react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

import userOne from "../assets/doug.jpg";
import userTwo from "../assets/avatar3.png";
import userThree from "../assets/avatar6.png";
import userFour from "../assets/avatar5.png";

function DiscoverTeachers() {
  // Dummy data for teacher profiles
  const teachers = [
    {
      name: "Douglas Tawile",
      subject: "Mathematics",
      location: "Tamale",
      avatar: userOne,
    },
    {
      name: "Effah Richard",
      subject: "ICT, Mathematics",
      location: "Koforidua",
      avatar: userTwo,
    },
    {
      name: "Queeny Takyi Ansah",
      subject: "Science, Mathematics",
      location: "Kumasi",
      avatar: userThree,
    },
    {
      name: "Abigail Designer",
      subject: "ICT, English Language",
      location: "Tamale",
      avatar: userFour,
    },
  ];

  return (
    <div className="container mx-auto p-4 dark:bg-slate-950">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold dark:text-white my-2">
          Discover Teachers
        </h1>
        <div className="flex items-center">
          <input
            type="search"
            placeholder="Search teachers..."
            className="form-input rounded-l border-0"
          />
          <Button color="gray" className=" hidden sm:block">
            <FaSearch />
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {teachers.map((teacher, index) => (
          <Card key={index}>
            <div className="flex flex-col items-center">
              <Avatar img={teacher.avatar} rounded={true} />
              <h5 className="mt-2 text-xl font-bold tracking-tight text-gray-900 dark:text-slate-400">
                {teacher.name}
              </h5>
              <p className="text-sm text-gray-500">{teacher.subject}</p>
              <p className="text-sm text-gray-500">{teacher.location}</p>
              <Link
                to="/profile"
                className="my-4 text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
              >
                View Profile
              </Link>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default DiscoverTeachers;
