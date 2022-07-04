import axios from "axios";

const KEY = "AIzaSyB62Z0Oc1w1a12BicZYOBhqarNyqpYPgWg";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 10,
    key: KEY,
  },
});
