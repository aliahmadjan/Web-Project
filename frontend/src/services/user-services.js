import axios from "axios"
let URL="http://localhost:5000/"

export async function getAllHobbies() {
    let tempURL = "http://localhost:5000/hobby/gethobbies"; 
    console.log(tempURL);
    const response = await axios.get(tempURL);
      return response;
  }

export async function getVeteranNames() {
    let tempURL = "http://localhost:5000/signup/ViewVeteranNames/";
    console.log(tempURL);
    const response = await axios.get(tempURL);
      return response;
}

export async function getUsers() {
  let tempURL = "http://localhost:5000/signup/getuser/";
  console.log(tempURL);
  const response = await axios.get(tempURL);
    return response;
}