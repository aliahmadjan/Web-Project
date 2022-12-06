import axios from "axios"
let URL="http://localhost:5000/"
export async function getAllHobbies() {
    let tempURL = "http://localhost:5000/hobby/gethobbies"; // 'http://localhost:5000/student'
    console.log(tempURL);
    const response = await axios.get(tempURL);
      return response;
  }