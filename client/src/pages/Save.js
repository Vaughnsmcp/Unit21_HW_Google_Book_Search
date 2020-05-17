import React, { useState, useEffect } from "react";
import API from "../utils/API";
import Header from "../components/Header";
import Card from "../components/Card";

function Save() {
    let [scholarResult, setScholarResult] = useState
        ();
    function getchaBooks() {
        API.getBooks().then(res => {
            setScholarResult(res.data)
        })
    }
    useEffect(() => {
        getchaBooks();
    }, []);
    function thisBookIsGahbage(id) {
        API.deleteBooks(id).then(() => {
            getchaBooks();
        })
            .catch(err => {
                throw err;
            })
    }
    return (
        <>
            <Header />
            <div>
            {scholarResult && scholarResult.map(book=>(
            <Card
                title={book.title}
                authors={book.authors}
                image={book.image}
                description={book.description}
                link={book.link}
                onClick={thisBookIsGahbage}
                id={book._id}
                key={book._id}
                message={"G'Bye!!"} />

                ))}

                </div>
        </>
    )
}

export default Save;