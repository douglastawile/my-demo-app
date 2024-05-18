import HomeProfile from "../posts/HomeProfile";
import PostsPage from "../posts/PostsPage";
import { FindTeacher } from "../users/FindTeacher";

export default function HomePage() {
  return (
    <section className="flex flex-wrap justify-between px-6 my-4 dark:bg-slate-950">
      <section className="flex-auto w-full lg:w-3/12 mx-2">
        <HomeProfile />
      </section>
      <section className="flex-auto w-full lg:w-5/12">
        <PostsPage />
      </section>
      <section className="flex-auto w-full lg:w-3/12 mx-2">
        <FindTeacher />
      </section>
    </section>
  );
}
