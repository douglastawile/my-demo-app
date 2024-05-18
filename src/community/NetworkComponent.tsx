import { Card, Avatar, Button, Badge } from "flowbite-react";
import { FaUserPlus, FaEnvelope, FaGlobeAmericas } from "react-icons/fa";
//import { Link } from "react-router-dom";

import userOne from "../assets/doug.jpg";
import userTwo from "../assets/avatar3.png";
import userThree from "../assets/avatar6.png";
import userFour from "../assets/avatar5.png";

function NetworkComponent() {
  // Dummy data for networking teachers
  const teachers = [
    {
      name: "Douglas Tawile",
      email: "douglas@example.com",
      subjects: ["ICT", "Math"],
      location: "Tamale",
      avatar: userOne,
    },
    {
      name: "Effah Richard",
      email: "effah@example.com",
      subjects: ["Science", "Math"],
      location: "Koforidua",
      avatar: userTwo,
    },
    {
      name: "Queeny Takyi Ansah",
      email: "queeny@example.com",
      subjects: ["Chemistry", "Math"],
      location: "Kumasi",
      avatar: userThree,
    },
    {
      name: "Abigail Designer",
      email: "abigail@example.com",
      subjects: ["Social", "Management"],
      location: "Tamale",
      avatar: userFour,
    },
  ];

  const handleConnectClick = () => {
    alert("You are now connected: 🎉🎉✨✨👍");
  };

  return (
    <div className="container mx-auto p-4 dark:bg-slate-950">
      <h1 className="text-2xl font-bold mb-4 dark:text-white">
        Teacher Network
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {teachers.map((teacher, index) => (
          <Card key={index}>
            <div className="flex flex-col items-center p-4">
              <Avatar img={teacher.avatar} rounded={true} />
              <h5 className="text-xl font-bold mt-2 dark:text-slate-400">
                {teacher.name}
              </h5>
              <div className="flex mt-1">
                {teacher.subjects.map((subject, idx) => (
                  <Badge key={idx} color="blue" className="mr-1">
                    {subject}
                  </Badge>
                ))}
              </div>
              <div className="flex flex-col items-center mt-2">
                <a
                  href={`mailto:${teacher.email}`}
                  className="text-sm text-gray-500 flex items-center"
                >
                  <FaEnvelope className="mr-2" />
                  {teacher.email}
                </a>
                <p className="text-sm text-gray-500 flex items-center">
                  <FaGlobeAmericas className="mr-2" />
                  {teacher.location}
                </p>
              </div>
              <Button className="my-4" onClick={() => handleConnectClick()}>
                <FaUserPlus className="mr-2" />
                Connect
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default NetworkComponent;
