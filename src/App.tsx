import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Flowbite } from "flowbite-react";
import { Navigation } from "./components/Navigation";
import SignupForm from "./auth/Signup";
import SigninForm from "./auth/Signin";
import ProfilePage from "./users/Profile";
import EditProfileForm from "./users/EditProfileForm";
import HomePage from "./pages/HomePage";

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
            <Route path="*" element={<h1>404</h1>} />
          </Routes>
        </Flowbite>
      </BrowserRouter>
    </div>
  );
}
