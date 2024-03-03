import { useEffect, useState } from 'react'
import BlogList from './BlogList'
import Featured from './Featured'
import Footer from './Footer'
import FeaturedSection from './FeaturedSection'
import HeroSection from './HeroSection'
const Home = () => {
  const [blogs, setBlogs] = useState()

  const [name, setName] = useState('mario')

  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id)
    setBlogs(newBlogs)
  }

  // useEffect(() => {
  //   console.log("use effect ran");
  //   console.log(blogs);
  // }, [name]);

  return (
    <div className='home'>
      <HeroSection></HeroSection>
      <Featured />
      <br />
      <br />

      <BlogList blogs={blogs} title='All Blogs' handleDelete={handleDelete} />
      <br />
      <br />
      <FeaturedSection></FeaturedSection>

      <Footer></Footer>
      <br />
    </div>
  )
}

export default Home
