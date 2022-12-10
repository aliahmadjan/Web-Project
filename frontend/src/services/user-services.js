import axios from "axios"


let URL="http://localhost:5000/"

  export async function getHobby(hobby)
  {
    let tempURL = URL  + `hobby/${hobby}`;
    const res = await axios.get(tempURL);
    return res;
  }

  export async function updateHobby(oldhobby,hobby,description)
  {
    let tempURL = URL + `hobby/${oldhobby}`;
    const res = await axios.patch(tempURL,{
      hobby,description 
    });
  return res;
  }

  export async function GetUser(users)
  {
    let tempURL = URL + `signup/${users}`;
    const res = await axios.get(tempURL);
  return res;
  }

