import { useEffect, useState } from "react";
import axios from "axios";

const LandingPage = () => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:5078/test")
      .then((response) => setMessage(response.data.message))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>React + .NET Minimal API</h1>
      <p>{message || "Loading..."}</p>
    </div>
  );
};
export default LandingPage;
