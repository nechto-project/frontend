import { Link } from 'react-router-dom'
import React from 'react'

function Logo(): JSX.Element {
    return (
        <div className="logo">
            <Link to="/">
                <svg width="100" viewBox="0 0 2398 710" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="2398" height="710" rx="142" fill="black" />
                    <rect x="115" y="111" width="226" height="473" fill="#FFFBF2" />
                    <path d="M552.345 362.403L678.685 584.95L427.243 585.647L552.345 362.403Z" fill="#FFFBF2" />
                    <path d="M548.015 327.083L427.162 113.923L671.407 115.383L548.015 327.083Z" fill="#FFFBF2" />
                    <rect x="428.914" y="115" width="196.932" height="283.18" transform="rotate(24.8843 428.914 115)"
                        fill="#FFFBF2" />
                    <rect x="321" y="346.5" width="203.374" height="263" transform="rotate(-24.7051 321 346.5)"
                        fill="#FFFBF2" />
                    <rect x="716" y="116" width="108" height="467" fill="#FFFBF2" />
                    <rect x="1102" y="116" width="105" height="467" fill="#FFFBF2" />
                    <rect x="1101.96" y="116" width="104.324" height="535.386" transform="rotate(41.5363 1101.96 116)"
                        fill="#FFFBF2" />
                    <rect x="1252" y="116" width="202" height="467" fill="#FFFBF2" />
                    <rect x="1527" y="116" width="202" height="467" fill="#FFFBF2" />
                    <rect x="1446" y="296" width="90" height="86" fill="#FFFBF2" />
                    <ellipse cx="2032" cy="351.5" rx="258" ry="262.5" fill="#FFFBF2" />
                    <ellipse cx="2031.5" cy="350" rx="73.5" ry="73" fill="black" />
                </svg>
            </Link>
        </div>
    );
}

export default Logo;