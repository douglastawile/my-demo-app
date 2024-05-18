import { Tabs } from "flowbite-react";

export function ProfileTabs() {
  return (
    <Tabs aria-label="Pills" style="pills" className="lg:flex justify-between">
      <Tabs.Item active title="Posts" className="lg:w-1/4">
        <p className="text-sm text-gray-500 dark:text-gray-400">Content 1</p>
      </Tabs.Item>
      <Tabs.Item title="About" className="lg:w-1/4">
        <p className="text-sm text-gray-500 dark:text-gray-400">Content 2</p>
      </Tabs.Item>
      <Tabs.Item title="Followings" className="lg:w-1/4">
        <p className="text-sm text-gray-500 dark:text-gray-400">Content 3</p>
      </Tabs.Item>
      <Tabs.Item title="Followers" className="lg:w-1/4">
        <p className="text-sm text-gray-500 dark:text-gray-400">Content 4</p>
      </Tabs.Item>
    </Tabs>
  );
}
