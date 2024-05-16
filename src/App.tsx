import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navigation } from "./components/Navigation";
import SignupForm from "./auth/Signup";
import SigninForm from "./auth/Signin";
import ProfilePage from "./users/Profile";
import EditProfileForm from "./users/EditProfileForm";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route
            path="/"
            element={
              <h1 className="text-3xl font-bold underline text-slate-700">
                <marquee behavior="" direction="">
                  App data coming soon...
                </marquee>
              </h1>
            }
          />
          <Route path="/auth/signup" element={<SignupForm />} />
          <Route path="/auth/signin" element={<SigninForm />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/edit" element={<EditProfileForm />} />
          <Route path="*" element={<h1>404</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
