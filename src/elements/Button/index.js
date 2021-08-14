import React from 'react'
import propTypes from 'prop-types'
import { Link } from 'react-router-dom'


export default function Button(props) {
    const className = [props.className]
    if(props.isPrimary){className.push("btn-primary")}
    if(props.isSmall){className.push("btn-sm")}
    if(props.isLarge){className.push("btn-lg")}
    if(props.isBlock){className.push("btn-block")}
    if(props.isShadow){className.push("btn-shadow")}
    if(!props.isDecoration){className.push("text-decoration-none")}

    const onClick = () => {
        if(props.onClick){props.onClick()}
    }

    if(props.isDisabled){
        if(props.isDisabled){
            className.push("disabled")
        }
        return(
            <span className={className.join(" ")}
            style={props.style}>
                {props.children}
            </span>
        )
    }

    if(props.type === "Link"){
        if(props.isExternal){
            return (
            <a
            href={props.href}
            className={className.join(" ")}
            style={props.style}
            target={props.target === "__blank" ? "__blank":undefined}
            rel={props.target === "__blank" ? "noopener noreferrer" : undefined} >
            
                {props.children}

            </a>);
        }
        else{
            return (
                <Link
                to={props.href}
                className={className.join(" ")}
                style={props.style}
                onClick={onClick}
                >
                    {props.children}
                </Link>
            );
        }
    }

    return (
        <button
        href={props.href}
        className={className.join(" ")}
        style={props.style}
        >
            {props.children}
        </button>
    )
}


Button.propTypes = {
    type : propTypes.oneOf(["Button","Link"]),
    onClick : propTypes.func,
    target : propTypes.string,
    className : propTypes.string,
    href : propTypes.string,
    isLoading : propTypes.bool,
    isexternal : propTypes.bool,
    isSmall : propTypes.bool,
    isLarge : propTypes.bool,
    isBlock : propTypes.bool,
    isShadow : propTypes.bool,
    isDecoration : propTypes.bool
}