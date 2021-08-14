import React from 'react'
import Button from '../elements/Button'
import "./brandicon.scss"


export default function BrandIcon() {
    return (
        <div>
            <Button className="brand-logo text-primary" type="Link" href="">
                Stay<span className="text-secondary">cation</span>
            </Button>
        </div>
    )
}
