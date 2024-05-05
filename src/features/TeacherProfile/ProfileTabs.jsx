import { useState } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

function ProfileTabs() {
  const [key, setKey] = useState("home");

  return (
    <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className="mb-3"
    >
      <Tab eventKey="posts" title="Posts">
        <marquee>Posts Coming Soon👍🍌😂</marquee>
      </Tab>
      <Tab eventKey="followings" title="Followings">
        <marquee>Followings Coming Soon🎉💖🍒</marquee>
      </Tab>
      <Tab eventKey="followers" title="Followers">
        <marquee>Followers Coming Soon🙌✨🍩</marquee>
      </Tab>
    </Tabs>
  );
}

export default ProfileTabs;
