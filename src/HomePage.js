import React, { useEffect, useState } from "react";
import TableComp from "./TableComp";
import Navbar from "./Navbar";
import { apidata } from "./apidata";
function HomePage() {
  const [res, setRes] = useState(apidata);
  console.log("before sort" + apidata);
   function authorize() {
      const response = await fetch("http://20.244.56.144/train/auth", {
      method: "POST",
      body: JSON.stringify({
        companyName: process.env.name,
        clientID: process.env.clientid,
        clientSecret: process.env.clientsecret,
        ownerName: process.env.username,
        ownerEmail: process.env.name,
        rollNo: "15320802720",
      }),
    });
    const data = await response.json();
    return data;
  }
  useEffect(() => {
    const fetchDetails = async () => {
      let token = localStorage.getItem("token");
      if (!token) {
        const data = await authorize();
        token = data.access_token;
        localStorage.setItem("token", token);
      }
      const response = await fetch("http://20.244.56.144/train/trains", {
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      const data = await response.json();
    };
    fetchDetails();
  }, []);
  return (
    <div>
      <Navbar />
      <TableComp />
    </div>
  );
}

export default HomePage;
