import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  //useState
  const [users, setUsers] = useState([]);

  //useEffect
  useEffect(() => {
    axios
      .get("https://users-crud1.herokuapp.com/users/")
      .then((res) => setUsers(res.data));
  }, []);

  return <div className="App"></div>;
}

export default App;
