import API from "../utils/API";
import React, { useState } from "react";
import Header from "../components/Header";
import Card from "../components/Card";

function Home() {
    let [scholarSearch, setScholarSearch] = useState("");
    let [scholarResult, setScholarResult] = useState([]);
    const handleFormSubmit = event => {
        event.preventDefault();
        API.getBooks(scholarSearch).then(res => {
            console.log(res);
            setScholarResult(res.data.items);
        })
            .catch(err => {
                throw err;
            });
    }
    const favoriteBooks = (book) => {
        const shelf = book.volumeInfo.title && book.volumeInfo.authors;
        if (shelf) {
            API.saveBooks({
                title: book.volumeInfo.title,
                authors: book.volumeInfo.authors,
                image: book.volumeInfo.imageLinks.thumbnail,
                description: book.volumeInfo.description,
                link: book.volumeInfo.infoLink

            })
                .then(() => setScholarResult())
                .catch(err => {
                    throw err;

                })

        }
        else {
            alert(`Why you no save?`)
        }

    }

    return (
        <>

        <Header />
        <form className="form-group">
            <h1>What shall we read today, fellow scholar?</h1>
            <input className="form-control form-control-lg"
                value={scholarSearch}
                onChange={event => setScholarSearch(event.target.value)}
                type="text"
                placeholder="checkout"
            />
            <button type="button" className="btn btn-primary" onClick={handleFormSubmit}>Read me, Seymore!</button>
        </form>
        <div>
            {scholarResult && scholarResult.map(book=>(
            <Card
                title={book.volumeInfo.title}
                authors={book.volumeInfo.authors}
                image={book.volumeInfo.imageLinks.thumbnail}
                description={book.volumeInfo.description}
                link={book.volumeInfo.infoLink}
                onClick={favoriteBooks}
                book={book}
                key={book.volumeInfo.infoLink}
                message={"Good Read!"} />

                ))}

        </div>
        </>
        )

}





export default Home;