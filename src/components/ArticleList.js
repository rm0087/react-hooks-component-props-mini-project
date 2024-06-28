import React from "react";
import Article from "./Article";

export default function ArticleList({posts}){
    const articleList = posts.map(post=>{
        return(
            <Article key={post.id} post={post}/>
        )
    })
    return(
        <main>
            {articleList}
        </main>
    )
}