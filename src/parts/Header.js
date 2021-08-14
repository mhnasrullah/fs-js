import React from 'react'
import BrandIcon from './BrandIcon'
import './Header.scss'
import Button from '../elements/Button'

export default function Header(props) {

    const getNavClass = path =>{
        return props.location.pathname === path ? "active" : ""
    }

    return (
        
        <nav className="navbar navbar-expand-lg navbar-light bg-transparent flex-wrap ">
        <div className="container align-items-center">
            <BrandIcon />
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto">
                <ul className="d-flex">
                    <li className={`nav-item ${getNavClass("/")}`}>
                        <Button className="nav-link" type="Link" href="/">
                            Home
                        </Button>
                    </li>
                    <li className={`nav-item ${getNavClass("/browse-by")}`}>
                        <Button className="nav-link" type="Link" href="/browse-by">
                            Browse by
                        </Button>
                    </li>
                    <li className={`nav-item ${getNavClass("/stories")}`}>
                        <Button className="nav-link" type="Link" href="/stories">
                            Stories
                        </Button>
                    </li>
                    <li className={`nav-item ${getNavClass("/agents")}`}>
                        <Button className="nav-link" type="Link" href="/agents">
                            Agents
                        </Button>
                    </li>
                </ul>
            </div>
            </div>
        </div>
    </nav>
    )
}
