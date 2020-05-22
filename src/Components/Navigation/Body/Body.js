import React from 'react'
import classes from './Body.module.scss'

const Body = ()=>{
    return(
        <div className={classes.header} >
           <h2>
               Shubhankar 
               <br/>Web developer
           </h2>
           <p>
               Hi there, welcome to my portfolio. I am a developer who views himself as 
               <br/>a generalist and confident in adapting to any technology introduced 
               <br/>to. Please explore this website to know more about me.
            </p>
            <a href="?" className={classes.btn}>Explore &rarr;</a>
        </div> 
    )
}

export default Body;