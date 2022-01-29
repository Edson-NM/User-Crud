import React from "react";

//icons
import {
  MdOutlineDeleteForever,
  MdOutlineModeEditOutline,
} from "react-icons/md";
import { FaBirthdayCake } from "react-icons/fa";

//styles
import "./UsersList.style.css";

const UsersList = ({ users, deleteUser, selectUser }) => {
  return (
    <div className="usersList-container" id="prueba">
      <ul className="usersList-container_ul">
        {users.map((user) => (
          <li className="usersList-container_ul-li" key={user.id}>
            <div className="usersList-container_ul-li__info">
              <strong>{`${user.first_name} ${user.last_name}`}</strong>
              <ul>
                <li className="email">{user.email}</li>
                <div className="birthday-container">
                  <FaBirthdayCake className="birthday-icon" />
                  <li className="birthday">{user.birthday}</li>
                </div>
              </ul>
            </div>
            <div className="usersList-container_ul-li__buttons">
              <MdOutlineDeleteForever
                className="delete-button"
                type="button"
                onClick={() => deleteUser(user.id)}
              />

              <MdOutlineModeEditOutline
                className="edit-button"
                type="button"
                onClick={() => selectUser(user)}
                tabIndex={0}
                id={user.id}
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UsersList;
