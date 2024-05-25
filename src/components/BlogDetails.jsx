import React from "react";
import { NavLink } from "react-router-dom";

const BlogDetails = ({ post }) => {
  return (
    <div className="flex flex-col bg-[#f2f2eb] bg-transparent mt-[10px] p-10 border-[2px] rounded-xl">
      <NavLink to={`/blog/${post.id}`}>
        <span className="font-bold mt-2">{post.title}</span>
      </NavLink>
      <p className="text-sm">   
        By
        <span className="text-black mx-1">{post.author}</span>
        on
        <NavLink to={`/categories/${post.category.replaceAll(" ", "-")}`}>
          <span className="mx-2 text-slate-900 underline font-bold ">{post.category}</span>
        </NavLink>
      </p>
      <p className="text-sm mb-[20px]">Posted <span className="text-xs">on</span> <span className="text-blue-500 text-xs">{post.date}</span></p>
      <p className="leading-6 text-[14px]">{post.content}</p>
      <div>
        {post.tags.map((tag, index) => (
          <NavLink key={index} to={`/tags/${tag.replaceAll(" ", "-")}`}>
            <span className="text-blue-800  mx-[4px] mt-[20px] underline text-[0.80rem]">{` #${tag} `}</span>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default BlogDetails;
