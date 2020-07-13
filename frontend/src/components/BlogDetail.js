import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const BlogDetail = (props) => {
  const [blog, setBlog] = useState({});

  useEffect(() => {
    const slug = props.match.params.id;

    console.log("Slug", slug);

    const fetchData = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/blog/${slug}`);
        console.log("BlogDetail:", response.data);
        setBlog(response.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, [props.match.params.id]);

  const createBlog = () => {
    return { __html: blog.content };
  };

  const capitalize = (word) => {
    if (word) return word.charAt(0).toUpperCase() + word.slice(1);
    return "";
  };

  return (
    <div className="container mt-3">
      <h1 className="display-2">{blog.title}</h1>
      <h2 className="text-muted mt-3">Categoty: {capitalize(blog.category)}</h2>
      <h4>
        {blog.month} {blog.day}
      </h4>
      <div className="mt-5 mb-5" dangerouslySetInnerHTML={createBlog()} />
      <hr />
      <p className="lead mb-5">
        <Link to="/blog" className="font-weight-bold">
          Back to Blogs
        </Link>
      </p>
    </div>
  );
};

export default BlogDetail;
