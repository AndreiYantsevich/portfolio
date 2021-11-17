import React, { FC, memo } from "react";

import allBlogs from "../components/AllBlogs";
import Tittle from "../components/Tittle";

const BlogPage: FC = memo(() => (
  <div>
    <div className="b-title">
      <Tittle title="Recent Blogs" span="Recent Blogs" />
    </div>
    <div className="BlogsPage">
      {allBlogs.map((blog) => (
        <div className="blog" key={blog.id}>
          <div className="blog-content">
            <img src={blog.image} alt="" />
            <a href={blog.link} className="blog-link">
              {blog.title}
            </a>
          </div>
        </div>
      ))}
    </div>
  </div>
));

export default BlogPage;
