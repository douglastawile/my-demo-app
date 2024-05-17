import { Flowbite } from "flowbite-react";
import HomeProfile from "../posts/HomeProfile";
import PostsPage from "../posts/PostsPage";
import { FindTeacher } from "../users/FindTeacher";

export default function HomePage() {
  return (
    <Flowbite>
      <section className="flex flex-wrap justify-between px-6 my-4 dark:gb-slate-950 h-screen">
        <section className="flex-auto w-full lg:w-3/12 mx-2">
          <HomeProfile />
        </section>
        <section className="flex-auto w-full lg:w-5/12 mx-2">
          <PostsPage />
        </section>
        <section className="flex-auto w-full lg:w-3/12 mx-2">
          <FindTeacher />
        </section>
      </section>
    </Flowbite>
  );
}
