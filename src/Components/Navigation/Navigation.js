import React from 'react'
import classes from './Navigation.module.scss'
import lang from '../../Assets/icons/language.png'

const Navigation = ()=>{
    return(
        <div className={classes.nav}>
            <ul className={classes.left}>
                <li><a href="?">Portflio</a></li>
                <li><a href="?">About me</a></li>
                <li><a href="?">Skills</a></li>
                <li><a href="?">Experience</a></li>
                <li><a href="?">Projects</a></li>
                <li style={{float:"right"}}>
                    <img src={lang} alt="logo"/>
                    <a href="?">ENG</a> / <a href="?">JP</a>
                </li>
            </ul>
        </div>
    )
}

export default Navigation;