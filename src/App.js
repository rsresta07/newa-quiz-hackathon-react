import "./App.css";
import SignIn from "./pages/LoginRegister/Login";
import SignUp from "./pages/LoginRegister/Register";
import Header from "./components/modules/Navigation";
import Footer from "./components/modules/Footer";
import Landing from "./components/modules/Landing";
import { Route, Routes, useLocation } from "react-router-dom";
import Lesson from "./pages/Lesson/Lesson";
import Categories from "./pages/CardComponents/Categories";
import AboutUs from "./pages/AboutUs";
import Profile from "./pages/Profile";
import LessonDetails from "./pages/Lesson/LessonDetails";
import QuizLoader from "./pages/QuizLoader";
import AdminDashboard from "./components/AdminDashboard/AdminDashboard";
import AdminCategories from "./components/AdminDashboard/Categories";
import AdminLessonList from "./components/AdminDashboard/LessonList"; 
import Facts from "./components/AdminDashboard/Facts";
import AdminEditCategory from "./components/AdminDashboard/EditCategory";
import AdminAddCategory from "./components/AdminDashboard/AddCategory"; 

function App() {
    const location = useLocation();

    // Hide the Header and Footer on specific routes
    const hideHeaderFooterRoutes = [
        "/login",
        "/register",
        "/admin",
        "/admin/categories",
        "/admin/lessons",
        "/admin/facts",
        "/admin/editCategory",
        "/admin/addCategory",];

    const showHeaderFooter = !hideHeaderFooterRoutes.includes(
        location.pathname
    );

    // Sample admin check (you may replace this with actual authentication logic)
    const isAdmin = true; // Replace with actual admin check

    return (
        <div className="App">
            {showHeaderFooter && <Header />}

            <Routes>
                {/* Public Routes */}
                <Route path="/" element={<Landing />} />
                <Route path="/login" element={<SignIn />} />
                <Route path="/register" element={<SignUp />} />
                <Route path="/about-us" element={<AboutUs />} />

                {/* Categories and Lessons */}
                <Route path="/categories" element={<Categories />} />
                <Route path="/lesson" element={<Lesson />} />
                <Route path="/lesson/:lessonId" element={<LessonDetails />} />

                {/* Quiz */}
                <Route path="/quiz/:lessonId" element={<QuizLoader />} />

                {/* Profile */}
                <Route path="/profile" element={<Profile />} />

                {/* Admin Routes */}
                {/* {isAdmin && ( */}
                    <>
                        <Route path="/admin" element={<AdminDashboard />} />
                        <Route
                            path="/admin/categories"
                            element={<AdminCategories />}
                        />
                        <Route path="/admin/lessons" element={<AdminLessonList />} />
                        <Route path="/admin/facts" element={<Facts />} />
                        <Route
                            path="/admin/editCategory"
                            element={<AdminEditCategory />}
                        />
                        <Route
                            path="/admin/addLesson"
                            element={<AdminAddCategory />}
                        />
                    </>
                {/* )} */}
            </Routes>

            {showHeaderFooter && <Footer />}
        </div>
    );
}

export default App;
