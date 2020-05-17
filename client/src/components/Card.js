import React from "react"

function Card({ title, image, authors, description, link, onClick, message, book, id }) {

    return (


        <div className="container mt-3">
            <div className="card" style={{ width: "100" }}>
                <img src={image} className="card-img-top" alt={title} />
                <div className="card-body">
                    <h2 className="card-text">{title}</h2>

                    <p className="card-text">{authors}</p>
                    <p className="card-text">{description}</p>
                    <a href={link} className="card-link">Literature Info</a>
                    <button onClick={() => id ? onClick(id) : onClick(book)} type="button">{message}</button>
                </div>
            </div>
        </div>
    )
}

export default Card;