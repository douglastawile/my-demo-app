import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navigation } from "./components/Navigation";
import SignupForm from "./auth/Signup";
import SigninForm from "./auth/Signin";
import ProfilePage from "./users/Profile";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route
            path="/"
            element={
              <h1 className="text-3xl font-bold underline text-slate-100">
                Hello world!
              </h1>
            }
          />
          <Route path="/auth/signup" element={<SignupForm />} />
          <Route path="/auth/signin" element={<SigninForm />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
