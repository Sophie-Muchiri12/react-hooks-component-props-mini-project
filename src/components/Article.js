import React from "react";

function Article({title,date,preview,minutes}){

    const defaultDate = date ||"January 1, 1970"


 function MinuteEmoji(minutes){
        let emoji
    if(minutes < 30){
            const coffeEmojis = Math.ceil(minutes/5)
            emoji ='☕️'.repeat(coffeEmojis);
        }
        else {
            // For 30 minutes or more, use bento box emoji
            const bentoBoxes = Math.ceil(minutes / 10);
            emoji = '🍱'.repeat(bentoBoxes);
    }
    return `${emoji} ${minutes} min read`
}

const MinuteRead  =MinuteEmoji(minutes)
    return(
        <div>
           <article>
            <h3>{title}</h3>
            <small>{defaultDate}</small>
            <p>{preview}</p>
            <p>{MinuteRead}</p>
           </article>
        </div>
    )
}

export default Article