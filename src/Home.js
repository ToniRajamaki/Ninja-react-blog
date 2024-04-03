import { useEffect, useState } from 'react';
import BlogList from './BlogList';
import Featured from './Featured';
import FeaturedSection from './FeaturedSection';
import HeroSection from './HeroSection';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Make sure AOS CSS is imported

const Home = () => {
  const [blogs, setBlogs] = useState([]);

  // Initialize AOS when the component mounts
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      easing: 'ease-in-out', // An easing function
      once: true, // Specify if animation should happen only once - while scrolling down
    });
  }, []);

  const handleDelete = (id) => {
    const newBlogs = blogs.filter(blog => blog.id !== id);
    setBlogs(newBlogs);
  };

  return (
    <div className='home'>
        
        <HeroSection />
      <div data-aos="fade-up" data-aos-delay="1400" duration="1000">
        <Featured />
      </div>
      <br />
      <br />
      <br />
      <br />
        <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete} />
      <br />
      <br />
      <br />
        <FeaturedSection />
      <br />
    </div>
  );
};

export default Home;
