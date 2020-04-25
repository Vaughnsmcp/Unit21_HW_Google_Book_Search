import axios from "axios"

export default {
    getBooks: function (q){
        return axios.get("/api/google",{
            params: {

            q:"title"+q}
        })
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