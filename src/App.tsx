import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Flowbite } from "flowbite-react";

import { Navigation } from "./components/Navigation";
import SignupForm from "./auth/Signup";
import SigninForm from "./auth/Signin";
import ProfilePage from "./users/Profile";
import EditProfileForm from "./users/EditProfileForm";
import HomePage from "./pages/HomePage";
import AddPostForm from "./posts/AddPostForm";
import CommunityPage from "./community/CommunityPage";
import DiscoverTeachers from "./community/DiscoverTeachers";
import NetworkComponent from "./community/NetworkComponent";
import Collaboration from "./community/Collaboration";
import JoinCollaborationComponent from "./community/JoinCollaboration";
import CollaborationConfirmation from "./community/CollaborationConfirmation";

export default function App() {
  return (
    <div className="bg-white max-h-fit h-screen dark:bg-slate-950">
      <BrowserRouter>
        <Flowbite>
          <Navigation />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/auth/signup" element={<SignupForm />} />
            <Route path="/auth/signin" element={<SigninForm />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/edit" element={<EditProfileForm />} />
            <Route path="/add-post" element={<AddPostForm />} />
            <Route path="/community" element={<CommunityPage />} />
            <Route path="/discover-teacher" element={<DiscoverTeachers />} />
            <Route path="/network" element={<NetworkComponent />} />
            <Route path="/collaboration" element={<Collaboration />} />
            <Route path="/join" element={<JoinCollaborationComponent />} />
            <Route
              path="/confirmation"
              element={<CollaborationConfirmation />}
            />
            <Route path="*" element={<h1>404</h1>} />
          </Routes>
        </Flowbite>
      </BrowserRouter>
    </div>
  );
}
