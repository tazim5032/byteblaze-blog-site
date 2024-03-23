import { useEffect } from "react";
import { useState } from "react";
import BlogCard from "../Components/BlogCard";
import EmptySatate from "../Components/EmptySatate";
import { getblogs } from "../Utils";
import { deleteBlog } from "../Utils";
const Bookmarks = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(
        () =>{
            const storedBlogs = getblogs();
            setBlogs(storedBlogs);
        }
    ,[]);
    const handleDelete = id =>{
        deleteBlog(id);
        const storedBlogs = getblogs();
        setBlogs(storedBlogs);
    }
    if(blogs.length<1)return <EmptySatate message='No Bookmarks Available' address={'/blogs'} label={'Go To Blogs'}></EmptySatate>
    return (
        <div className="grid px-4 sm:px-8 lg:px-16 py-8 justify-center grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {
                    blogs.map((blog) => <BlogCard handleDelete={handleDelete} deletable={true} key={blog.id} blog={blog}></BlogCard> )
                }
                
        </div>
    );
};

export default Bookmarks;