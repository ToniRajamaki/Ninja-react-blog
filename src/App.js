import Navbar from "./Navbar";
import Home from "./Home";
import Create from "./Create";
import BlogDetails from "./BlogDetails";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoadingAnimation from "./LoadingAnimation";
import Footer from "./Footer";
import "./Styles/app.css";
import AOS from 'aos';
import PageFAQ from './PageFAQ';
import PageAbout from './PageAbout';
import SpecialOffer from './SpecialOffer';

import 'aos/dist/aos.css'; 
import BlogList from "./BlogList";
AOS.init();


// Set the base URL for all routes
const baseURL = "/Ninja-react-blog";

function App() {
  return (
    <Router basename={baseURL}>
      <div className="app">
        <SpecialOffer />        
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
            <Route path="/about-us">
              <PageAbout />
            </Route>
            <Route path="/blogs">
              <br></br>
              <BlogList />
            </Route>
            <Route path="/faq">
              <PageFAQ />
            </Route>
            <Route path="/blog/:id">
              <BlogDetails />
            </Route>
            {/* You can add more routes here */}
          </Switch>
        </div>
      </div>
        <Footer />
    </Router>
  );
}

export default App;
