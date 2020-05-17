import axios from "axios"

export default {
    getBooks: function (query){
        return axios.get(`https://www.googleapis.com/books/v1/volumes?q=intitle:${query}&maxResults=40`)


    },


    getSavedBooks: function (){
        return axios.get("/api/books")
    },


    deleteBooks: function (id){
        return axios.delete("/api/books/"+id)
    },


    saveBooks: function (bookInfo){
        return axios.post("/api/books",bookInfo)
    },
}