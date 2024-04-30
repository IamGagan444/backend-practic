import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import axios from "axios";
function App() {
  const [cricketer, setCricketer] = useState([]);
  useEffect(() => {
    axios
      .get("/api/cricketers")
      .then((res) => setCricketer(res.data))
      .catch((err) => console.log(err));
  },[]);
  console.log(cricketer.length)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>cricketers of your api ||{cricketer.length} </h1>
      <br />
      {cricketer.length &&
        cricketer?.map((item) => (
          <div key={item.id}>
            <h2>{item.name} </h2>
            <p>{item.place} </p>
          </div>
        ))}
    </>
  );
}

export default App;
