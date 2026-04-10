import Posts from "@/components/Posts";
import { Suspense } from "react";

const PostsPage = async () => {
    // const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    // const data = await res.json();
    // console.log(posts);

    const postsPromise = fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json());

    return (
        <div>
            <div>
                <Suspense fallback={<h2>Posts is loading...</h2>}>
                    <Posts postsPromise={postsPromise} />
                </Suspense>
            </div>
        </div>
    );
};

export default PostsPage;