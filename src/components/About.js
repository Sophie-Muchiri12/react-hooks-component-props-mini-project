import React from "react";

function About({image,about}){

    const defaultImage = image ||  "https://via.placeholder.com/215"  
    return(
        <div>
            <aside>
                <img src={defaultImage} alt="blog logo"/>
                <p>{about}</p>
            </aside>
        </div>
    )
}

export default About