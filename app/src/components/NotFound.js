import React from 'react'
import { Link } from 'react-router-dom';

function NotFound() {
    return (
        <section style={{ backgroundColor: '#fff' }}>
            <div className="container mt-3">
                <div className="text-404">
                    <h1>404</h1>
                    <h3>Opps! This page Could Not Be Found!</h3>
                    <p>Sorry bit the page you are looking for does not exist, have been removed or name changed</p>
                    <form action="#" className="search-404">
                        <input type="text" placeholder="Enter your keyword" />
                        <button type="submit"><i className="fa fa-search"></i></button>
                    </form>
                    <Link to="/"><i className="fa fa-home"></i> Go back home</Link>
                </div>
            </div>
        </section>
    )
}

export default NotFound