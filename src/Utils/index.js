import toast from "react-hot-toast";
//local storage e post thakle khuje ene dibe
export const getblogs = () =>{
    let blogs = [];
    let storedBlogs = localStorage.getItem('blogs');
    if(storedBlogs){
        blogs = JSON.parse(storedBlogs);
    }

    return blogs;
}

//save
export const saveBlog = blog =>{
    let blogs = getblogs();
    const isExist = blogs.find(b => b.id === blog.id);

    if(isExist){
        return toast.error("Already Bookmarked!!");
    }

    blogs.push(blog);
    localStorage.setItem('blogs', JSON.stringify(blogs));
    toast.success('Blog Bookmarked Successfully!!');
}

//delete
export const deleteBlog = id =>{
    let blogs = getblogs();
    const remaining = blogs.filter(b => b.id != id);

    localStorage.setItem('blogs', JSON.stringify(remaining));
    toast.success('Blog Removed Successfully!!');

}