import { Card, Avatar, Button } from "flowbite-react";
import { FaRegHandshake } from "react-icons/fa";
import { Link } from "react-router-dom";
import userOne from "../assets/doug.jpg";
import userTwo from "../assets/avatar3.png";
import userThree from "../assets/avatar6.png";
import userFour from "../assets/avatar5.png";

function Collaboration() {
  // Dummy data for collaboration opportunities
  const collaborations = [
    {
      title: "Math Curriculum Development",
      description:
        "Join us to create an innovative math curriculum for primary schools.",
      organizer: "Douglas Tawile",
      avatar: userOne,
    },
    {
      title: "Science Fair Coordination",
      description:
        "Seeking science teachers to organize a regional science fair for high school students.",
      organizer: "Effah Richard",
      avatar: userTwo,
    },
    {
      title: "Literacy Program Workshop",
      description:
        "Join our workshop to develop a literacy program aimed at improving reading skills in early education.",
      organizer: "Queeny Takyi Ansah",
      avatar: userThree,
    },
    {
      title: "Educational Technology Seminar",
      description:
        "Inviting educators to share insights and experiences on integrating technology in the classroom.",
      organizer: "Abigail Designer",
      avatar: userFour,
    },
  ];

  return (
    <div className="container mx-auto p-4 dark:bg-slate-950">
      <h1 className="text-2xl font-bold mb-4 dark:text-white">
        Collaboration Opportunities
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {collaborations.map((collab, index) => (
          <Card key={index}>
            <div className="flex flex-col items-center p-4">
              <Avatar img={collab.avatar} rounded={true} />
              <h5 className="text-xl font-bold mt-2 dark:text-slate-400">
                {collab.title}
              </h5>
              <p className="text-sm text-gray-500 my-2">{collab.description}</p>
              <p className="text-sm text-gray-500 my-2">
                Organized by: {collab.organizer}
              </p>
              <Link
                to={`/join`}
                className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
              >
                <FaRegHandshake className="mr-2" />
                Join Collaboration
              </Link>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Collaboration;
