import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "fe4a254608da4db0ac9071e6d9ba51d0",
  },
});
