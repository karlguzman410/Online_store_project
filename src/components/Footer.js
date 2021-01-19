import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <footer>
            <div>
                <h5>Made by Karl Guzman 2021</h5>
                <Link to="/contact">
                    <i className="ri-mail-line"><span><strong>Contact me</strong></span></i>
                </Link>

            </div>
        </footer>
    )
}

export default Footer
