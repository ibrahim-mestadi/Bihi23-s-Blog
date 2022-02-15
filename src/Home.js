import { useState } from "react";
import BlogList from "./Blogs-list";
const Home = () => {

   
    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'Tanjiro', id: 1 },
        { title: 'How to Hash a map?', body: 'lorem ipsum...', author: 'Ismail', id: 2 },
        { title: 'How to cook a great css stylesheet?', body: 'lorem ipsum...', author: 'Hajar', id: 3 },
        { title: 'Jump start your career in DevOps', body: 'lorem ipsum...', author: 'ibrahim', id: 4 },
    ]) ; 

    const handelDelete = (id) => {
        const newBlog = blogs.filter(blog => blog.id != id) ;
        setBlogs(newBlog) ;

    }

    return (
        <div className="home">
            <BlogList blogs={blogs} title="All Blogs :" handelDelete={handelDelete}/> 
            {/* props */}
        </div>
    )
    
    
    return;

}
 
export default Home;
