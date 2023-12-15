import React, { useState ,useEffect} from "react";
import Admin from "./Admin";
import UserInfo from "../userInfo";
function Check() {
 

  const [userData, setUserData] = useState("");
  const [admin, setAdmin] = useState(false);

  useEffect(() => {
    fetch("http://localhost:5000/dash", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        token: window.localStorage.getItem("token"),
      }),
    })
      .then((res) => res.json())
      .then((data) => {
       
        
        if (data.data.userType == "Admin") {
          setAdmin(true);
        }

        setUserData(data.data);

        if (data.data == "token expired") {
          alert("Token expired login again");
          window.localStorage.clear();
          window.location.href = "./login";
        }
      });
  });

  return (
     admin ? <Admin /> : <UserInfo userData={userData}/>
  )
    
  
}

export default Check;
