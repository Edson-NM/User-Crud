import React from "react";
import {
  MdOutlineDeleteForever,
  MdOutlineModeEditOutline,
} from "react-icons/md";

const UsersList = ({ users, deleteUser, selectUser }) => {
  return (
    <div style={{ width: "50%", height: "50%" }}>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <strong>{`${user.first_name} ${user.last_name}`}</strong>
            <ul>
              <li>{user.email}</li>
              <li>{user.birthday}</li>
            </ul>
            <MdOutlineDeleteForever
              type="button"
              onClick={() => deleteUser(user.id)}
            >
              Delete
            </MdOutlineDeleteForever>
            <MdOutlineModeEditOutline
              type="button"
              onClick={() => selectUser(user)}
            >
              Edit
            </MdOutlineModeEditOutline>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UsersList;
