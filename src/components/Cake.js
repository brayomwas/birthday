import React from 'react'
import CakeSVG from '../assets/cake.svg'
export default function Cake() {
    return (
        <div className="cake-bg">
            <div className="velas">
                <div className="fuego"></div>
                <div className="fuego"></div>
                <div className="fuego"></div>
                <div className="fuego"></div>
                <div className="fuego"></div>
            </div>
            <CakeSVG />
        </div>
    )
}