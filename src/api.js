import axios from "axios";
const baseURL = "https://userroulette-backend.herokuapp.com";
export default axios.create({ baseURL });
