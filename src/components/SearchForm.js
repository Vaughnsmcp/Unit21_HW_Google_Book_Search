import React from "react"

function SearchForm({ q, handleInputChange, handleFormSubmit }) {

    return (

        <form>
            <h1>Book</h1>
            <input
                id="title"
                type="text"
                value={q}
                placeHolder="book title"
                name="q"
                onChange={handleInputChange}
                required
            ></input>

            <div>
                <button
                    onClick={handleFormSubmit}
                    type="submit">

                    Search For Book
                </button>
            </div>



        </form>
    )
}

export default SearchForm
