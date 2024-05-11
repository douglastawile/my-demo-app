import { BrowserRouter, Routes, Route } from "react-router-dom";
import TeacherNavbar from "./components/Navbar";
import TeacherFooter from "./components/Footer";
import HomePage from "./pages/HomePage";
import AddNewPost from "./features/Posts/AddNewPost";
import QuestionForumPage from "./features/QuestionForum/QuestionForumPage";
import Community from "./features/Community/Community";
import TeacherProfilePage from "./features/TeacherProfile/TeacherProfilePage";
import SignupForm from "./features/Authentication/SignupForm";
import LoginForm from "./features/Authentication/LoginForm";
import EditProfile from "./features/TeacherProfile/EditProfilePage";

export default function App() {
  return (
    <BrowserRouter>
      <TeacherNavbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/auth/signup" element={<SignupForm />} />
        <Route path="/auth/login" element={<LoginForm />} />
        <Route path="/addPost" element={<AddNewPost />} />
        <Route path="/questions" element={<QuestionForumPage />} />
        <Route path="/community" element={<Community />} />
        <Route path="/profile" element={<TeacherProfilePage />} />
        <Route path="/profile/edit" element={<EditProfile />} />
      </Routes>
      <TeacherFooter />
    </BrowserRouter>
  );
}
