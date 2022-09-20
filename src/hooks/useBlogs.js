import { useEffect, useState } from 'react';
import { getBlogs } from '../services/blogs';

export default function useBlogs() {
  const [blogs, setBlogs] = useState([]);
    
  useEffect(() => {
    async function fetchBlogs() {
      const blogsData = await getBlogs();
      setBlogs(blogsData);
    }
    fetchBlogs();
  }, []);
    
  return { blogs };
}
