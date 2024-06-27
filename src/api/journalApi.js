import axios from "axios";

const journalApi = axios.create({
  baseURL: "https://vue-demos-73233-default-rtdb.firebaseio.com",
});

export default journalApi;
