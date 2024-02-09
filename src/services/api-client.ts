import axios from "axios";

export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        key:'874ea13afb4b401ca9206ffcddf78436'
    }

})