
import React, { useState } from "react";
import Header from "../components/Header";

function Home() {
    let [scholarSearch, setScholarSearch] = useState("");
    let [scholarResult, setScholarResult] = useState([]);
    const handleFormSubmit = event => {
        event.preventDefault();
        API.searchResults(scholarSearch).then(res=>{
            console.log(res);
            setScholarResult(res.data.items);
        })
        .catch(err=>{
            throw err;
        });
    }

    return (
       
            <Header />
       
        )
       
}





export default Home