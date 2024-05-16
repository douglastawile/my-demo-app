"use client";

import { Avatar, Dropdown, Navbar } from "flowbite-react";
import { Link } from "react-router-dom";

export function Navigation() {
  return (
    <Navbar fluid rounded>
      <Link to={`/`}>
        <Navbar.Brand as={"div"}>
          {/* <img
          src="/favicon.svg"
          className="mr-3 h-6 sm:h-9"
          alt="Flowbite React Logo"
        /> */}
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            LOGO
          </span>
        </Navbar.Brand>
      </Link>
      <div className="flex md:order-2">
        <Dropdown
          arrowIcon={false}
          inline
          label={
            <Avatar
              alt="User settings"
              img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
              rounded
            />
          }
        >
          <Dropdown.Header>
            <span className="block text-sm">Effah Richard</span>
            <span className="block truncate text-sm font-medium">
              effah@gmail.com.com
            </span>
          </Dropdown.Header>
          <Link to={"/profile"}>
            <Dropdown.Item>Your Profile</Dropdown.Item>
          </Link>
          <Link to={"/edit"}>
            <Dropdown.Item>Settings</Dropdown.Item>
          </Link>
          <Dropdown.Divider />
          <Dropdown.Item>Sign out</Dropdown.Item>
        </Dropdown>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Link to={"/"}>
          <Navbar.Link active as={"div"}>
            Home
          </Navbar.Link>
        </Link>
        <Link to={"auth/signup"}>
          <Navbar.Link as={"div"}>Signup</Navbar.Link>
        </Link>
        <Link to={"auth/signin"}>
          <Navbar.Link as={"div"}>Signin</Navbar.Link>
        </Link>
        <Link to={"profile"}>
          <Navbar.Link as={"div"}>Profile</Navbar.Link>
        </Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
