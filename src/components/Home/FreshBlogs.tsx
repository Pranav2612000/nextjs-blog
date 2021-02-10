import React from 'react';
import FreshBlogCard from './FreshBlogCard';
const FreshBlogs = () => {
  return (
    <div className="mx-5 mt-10">
      <div>
        <div className="font-sfprobold text-2xl my-2">
          Fresh from the blog
        </div>
        <div className="font-sfprolight text-sm">
          Lorem ipsum dolor sit amet, consectetur
        </div>
      </div>
      <div className="flex flex-row flex-nowrap overflow-auto">
        <FreshBlogCard/>
        <FreshBlogCard/>
      </div>
    </div>
  );
};
export default FreshBlogs;
