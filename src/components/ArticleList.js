import React from "react";
import Article from "./Article";

function ArticleList({posts}){
    return(
        <div>
            <main>
           
            {posts.map((post,index) =>(
                <Article
                key = {index}
                title ={post.name}
                date={post.date}
                preview= {post.preview}
                minutes={post.minutes}

                
                
                
                />
            ))}
            
            
            </main>
        </div>
    )
}

export default ArticleList
