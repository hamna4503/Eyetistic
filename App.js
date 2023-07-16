import { Login } from "./components/login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "./components/signup";
import ForgotPassword from "./components/forgotPassword";
import ForgotPassword2 from "./components/forgotPassword2";
// import Home from "./components/home";
import Video from "./components/video";
import Shop from "./components/Shop";
import ViewProductCart from "./components/viewCart";
import Logout from "./components/logout";
import CheckoutForm from "./components/CheckoutForm";
import NewWebDesign from "./components/Blog";
import Blog1 from "./components/Blog1";
import Blog3 from "./components/blog3";
import Blog2 from "./components/blog2";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import Footer from "./components/footer";
import ImageSlider from "./components/latestintown";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Favourite from "./components/favourite/Favourite";
import Home from "./components/home/Home";
// import { FaV } from "react-icons/fa6";
// import Favourite from "./components/Favourite";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <div>
                <Video />
                <Login />
              </div>
            }
          ></Route>
          <Route
            exact
            path="/signup"
            element={
              <div>
                <Video />
                <Signup />
              </div>
            }
          ></Route>
          <Route
            exact
            path="/forgotPassword_pg_1"
            element={
              <div>
                <Video />
                <ForgotPassword />
              </div>
            }
          ></Route>
          <Route
            exact
            path="/forgotPassword_pg_2"
            element={
              <div>
                <Video />
                <ForgotPassword2 />
              </div>
            }
          ></Route>
          <Route exact path="/home" element={<Home />}></Route>
          <Route exact path="/about" element={<About />}></Route>
          <Route exact path="/shop" element={<Shop />}></Route>
          <Route exact path="/cart" element={<ViewProductCart />}></Route>
          <Route exact path="/logout" element={<Logout />}></Route>
          <Route exact path="/contact" element={<Contact />}></Route>

          <Route
            exact
            path="/blogs"
            element={
              <div className="website">
                <Main />
                <NewWebDesign />
                <ImageSlider />
              </div>
            }
          />
          <Route exact path="/blog3" element={<Blog3 />}></Route>
          <Route exact path="/blog1" element={<Blog1 />}></Route>
          <Route exact path="/blog2" element={<Blog2 />}></Route>
          <Route exact path="checkout" element={<CheckoutForm />}></Route>
          <Route exact path="/favourites" element={<Favourite />}></Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
