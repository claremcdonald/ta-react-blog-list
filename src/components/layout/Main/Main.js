import useBlogs from '../../../hooks/useBlogs';
import BlogCard from '../../BlogCard/BlogCard';

export default function Main() {
  const { blogs } = useBlogs();
  console.log(blogs);
    
  return (
    <main>
      {blogs.map((blog) => (
        <BlogCard key={blog.title} {...blog} />
      ))}
    </main>
  );
}
