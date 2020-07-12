import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [featuredBlog, setFeaturedBlog] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/blog/featured`);
        setFeaturedBlog(response.data[0]);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/blog/`);
        setBlogs(response.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div className="container mt-3">
      <div className="nav-scroller py-1 mb-2">
        <nav className="nav d-flex justify-content-between">
          <Link className="p-2 text-muted" to="/category/world">
            World
          </Link>
          <Link className="p-2 text-muted" to="/category/environment">
            Environment
          </Link>
          <Link className="p-2 text-muted" to="/category/technology">
            Technology
          </Link>
          <Link className="p-2 text-muted" to="/category/design">
            Design
          </Link>
          <Link className="p-2 text-muted" to="/category/culture">
            Culture
          </Link>
          <Link className="p-2 text-muted" to="/category/business">
            Business
          </Link>
          <Link className="p-2 text-muted" to="/category/politics">
            Politics
          </Link>
          <Link className="p-2 text-muted" to="/category/opinion">
            Opinion
          </Link>
          <Link className="p-2 text-muted" to="/category/science">
            Science
          </Link>
          <Link className="p-2 text-muted" to="/category/health">
            Health
          </Link>
          <Link className="p-2 text-muted" to="/category/sryle">
            Style
          </Link>
          <Link className="p-2 text-muted" to="/category/travel">
            Travel
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Blog;
