'use client'

import { use } from "react";

const Posts = ({postsPromise}) => {
    const posts = use(postsPromise);
    console.log(posts);
    return (
        <div>
            Posts : {posts.length}
        </div>
    );
};

export default Posts;