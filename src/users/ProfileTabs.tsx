import { Tabs } from "flowbite-react";

export function ProfileTabs() {
  return (
    <Tabs aria-label="Pills" style="pills" className="lg:flex justify-between">
      <Tabs.Item active title="Posts" className="lg:w-1/4">
        <p className="text-sm text-gray-500 dark:text-gray-400">Posts</p>
      </Tabs.Item>
      <Tabs.Item title="About" className="lg:w-1/4">
        <p className="text-sm text-gray-500 dark:text-gray-400">About</p>
      </Tabs.Item>
      <Tabs.Item title="Followings" className="lg:w-1/4">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Content for Followings
        </p>
      </Tabs.Item>
      <Tabs.Item title="Followers" className="lg:w-1/4">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Content for Followers
        </p>
      </Tabs.Item>
    </Tabs>
  );
}
