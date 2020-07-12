import React from "react";
import {Link} from 'react-router-dom'

const Home = () => {
  return (
    <div className="container">
      <div className="jumbotron">
        <h1 class="display-4">Welcome to Blogs</h1>
        <p class="lead">
          We make all kinds of awesome blogs about various topics.
        </p>
        <hr class="my-4" />
        <p>Click the button below to check out our blogs.</p>
        <Link class="btn btn-primary btn-lg" to="/blog" role="button">
          Check it out
        </Link>
      </div>
    </div>
  );
};

export default Home;
