import React from "react";
import Article from "./Article";

function ArticleList({posts}){
    return(
        <div>
            <main>
           
            {posts.map((post,index) =>(  // SO LIKE REMEMBER .MAP ALREADY ITERATES THRROUGH AN ARRAY SO YOU ARE ACCESSING AN ELEMENT FIRST HAND APPLYING THE FOLLOWING TO EACH
                <Article
                key = {index}
                title ={post.title}
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
