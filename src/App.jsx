import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import UsersForm from "./components/UsersForm";
import UsersList from "./components/UsersList";
import { useForm } from "react-hook-form";

function App() {
  const { reset } = useForm();

  //useState
  const [users, setUsers] = useState([]);
  const [userSelected, setUserSelected] = useState(null);

  //useEffect
  useEffect(() => {
    axios
      .get("https://users-crud1.herokuapp.com/users/")
      .then((res) => setUsers(res.data));
  }, []);

  //functions
  const getUsers = () => {
    axios
      .get("https://users-crud1.herokuapp.com/users/")
      .then((res) => setUsers(res.data));
  };

  const addUser = (data) => {
    // axios
    //   .post("https://users-crud1.herokuapp.com/users/", data)
    //   .then(() => getUsers());
    console.log(data);
  };

  const deleteUser = (userId) => {
    console.log(userId);
    axios
      .delete(`https://users-crud1.herokuapp.com/users/${userId}/`)
      .then(() => getUsers());
  };

  const selectUser = (user) => {
    setUserSelected(user);
  };

  const desSelectuser = () => {
    setUserSelected(null);
  };

  const updateUser = (updatedData) => {
    axios
      .put(
        `https://users-crud1.herokuapp.com/users/${userSelected.id}/`,
        updatedData
      )
      .then(() => getUsers());
  };

  return (
    <div className="App" style={{ display: "flex", height: "100vh" }}>
      <UsersList
        users={users}
        deleteUser={deleteUser}
        selectUser={selectUser}
      />
      <UsersForm
        addUser={addUser}
        updateUser={updateUser}
        userSelected={userSelected}
        desSelectuser={desSelectuser}
        setUserSelected={setUserSelected}
      />
    </div>
  );
}

export default App;
