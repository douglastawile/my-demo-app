import { Card, Dropdown } from "flowbite-react";
import { Link } from "react-router-dom";
import { ProfileTabs } from "./ProfileTabs";
import { DeleteUserProfile } from "./DeleteUserProfile";

function ProfilePage() {
  return (
    <section className="flex flex-wrap justify-between px-6 my-4 dark:bg-slate-950">
      <section className="flex-auto w-full lg:w-7/12 mb-3">
        <Card className="shadow-sm my-2 sm:my-0 mx-2">
          <div className="flex justify-between text-slate-400">
            <span>10 Followings</span>
            <span>20 Followers</span>
          </div>
          <div className="flex justify-end px-4 pt-4">
            <Dropdown inline label="">
              <Dropdown.Item>
                <Link
                  to="/edit"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Edit
                </Link>
              </Dropdown.Item>
              <Dropdown.Item>
                <Link
                  to="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Export Data
                </Link>
              </Dropdown.Item>
              <Dropdown.Item>
                <DeleteUserProfile />
              </Dropdown.Item>
            </Dropdown>
          </div>
          <div className="flex flex-col items-center pb-10">
            <img
              alt="Bonnie image"
              height={200}
              src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
              width={200}
              className="mb-3 rounded-full shadow-lg"
            />
            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
              Queeny Takyi Ansah
            </h5>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Teacher
            </span>
            <div className="mt-4 flex space-x-3 lg:mt-6">
              <Link
                to="#"
                className="inline-flex items-center rounded-lg bg-cyan-700 px-4 py-2 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
              >
                Follow
              </Link>
              <Link
                to="#"
                className="inline-flex items-center rounded-lg border border-gray-300 bg-white px-4 py-2 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
              >
                Message
              </Link>
            </div>
            <div className="flex flex-wrap my-2 text-gray-500 dark:text-gray-400">
              <span className="mx-4 my-2 sm:my-0">
                <i className="bi bi-briefcase-fill"></i> Teacher
              </span>
              <span className="mx-4 my-2 sm:my-0">
                <i className="bi bi-geo-alt-fill"></i> Kumasi
              </span>
              <span className="mx-4 my-2 sm:my-0">
                <i className="bi bi-calendar-date-fill"></i>{" "}
                {`Joined: ${new Date().toDateString()}`}
              </span>
            </div>
          </div>
          <hr className="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700" />
          <ProfileTabs />
        </Card>
      </section>
      <section className="flex-auto w-full lg:w-4/12 mb-4">
        <Card className=" shadow-sm mx-2">
          <h4 className="text-2xl font-bold dark:text-white">About</h4>
          <p className="mb-3 text-gray-500 dark:text-gray-400">
            Hello! My name is Queeny Takyi Ansah, and I am passionate about
            teaching mathematics. With over 4 years of experience... in the
            education field, I have had the privilege of helping students from
            diverse backgrounds develop a deep understanding and appreciation
            for math.
          </p>
          <p className="mb-3 text-gray-500 dark:text-gray-400">
            <strong>
              <i className="bi bi-envelope-fill"></i>
            </strong>{" "}
            queenyansah@gmail.com
          </p>

          <p className="mb-3 text-gray-500 dark:text-gray-400">
            <strong>
              <i className="bi bi-telephone-fill"></i>
            </strong>{" "}
            0242369415
          </p>

          <p className="mb-3 text-gray-500 dark:text-gray-400">
            <strong>
              <i className="bi bi-book-half"></i>
            </strong>
            : English, Maths
          </p>
        </Card>
      </section>
    </section>
  );
}

export default ProfilePage;
