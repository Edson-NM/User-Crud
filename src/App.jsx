//axios
import axios from "axios";

//hooks
import { useEffect, useState } from "react";

//styles
import "./App.css";

//components
import UsersForm from "./components/UsersForm/UsersForm";
import UsersList from "./components/UsersList/UsersList";

//incons
import { BiDownArrow } from "react-icons/bi";

//scroll
import { animateScroll as scroll } from "react-scroll";

function App() {
  document.body.style =
    "background-image: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);";

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
    axios
      .post("https://users-crud1.herokuapp.com/users/", data)
      .then(() => getUsers());
  };

  const deleteUser = (userId) => {
    console.log(userId);
    axios
      .delete(`https://users-crud1.herokuapp.com/users/${userId}/`)
      .then(() => getUsers());
  };

  const handleFocusOnForm = () => {
    document.getElementById("form").focus();
  };

  const handleFocusOnButton = (id) => {
    document.getElementById(id).focus();
  };

  const selectUser = (user) => {
    setUserSelected(user);
    handleFocusOnForm();
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

  const handleGoDown = () => {
    scroll.scrollTo(560);
  };

  return (
    <div className="App">
      <BiDownArrow onClick={handleGoDown} className="arrowIcon" />
      <UsersForm
        addUser={addUser}
        updateUser={updateUser}
        userSelected={userSelected}
        desSelectuser={desSelectuser}
        setUserSelected={setUserSelected}
        handleFocusOnButton={handleFocusOnButton}
      />
      <UsersList
        users={users}
        deleteUser={deleteUser}
        selectUser={selectUser}
      />
    </div>
  );
}

export default App;
