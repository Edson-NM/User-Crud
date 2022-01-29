import React, { useEffect } from "react";

//useForm
import { useForm } from "react-hook-form";

//styles
import "./UsersForm.styles.css";

//icons
import { FaUserAlt, FaBirthdayCake } from "react-icons/fa";
import { MdEmail, MdPassword } from "react-icons/md";

const UsersForm = ({
  addUser,
  updateUser,
  userSelected,
  desSelectuser,
  setUserSelected,
  handleFocusOnButton,
}) => {
  //const
  const defaultUser = {
    email: "",
    password: "",
    first_name: "",
    last_name: "",
    birthday: "",
  };

  //useState
  const { register, handleSubmit, reset } = useForm();

  //useEffect
  useEffect(() => {
    if (userSelected?.first_name) {
      const autofill = () => {
        reset({
          email: userSelected.email,
          password: userSelected.password,
          first_name: userSelected.first_name,
          last_name: userSelected.last_name,
          birthday: userSelected.birthday,
        });
      };
      autofill();
    } else {
      reset(defaultUser);
    }
  }, [userSelected]);

  //functions
  const submit = (data) => {
    if (userSelected?.first_name) {
      updateUser(data);
      reset(defaultUser);
      handleFocusOnButton(userSelected.id);
      setUserSelected(null);
    } else {
      addUser(data);
      reset(defaultUser);
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit(submit)}>
        <p>New User</p>
        <div className="names-container">
          <FaUserAlt />
          <input
            className="form-container_first-name"
            type="text"
            placeholder="First Name"
            {...register("first_name")}
            id="form"
          />
          <input
            className="form-container_last-name"
            type="text"
            placeholder="Last Name"
            {...register("last_name")}
          />
        </div>
        <div>
          <MdEmail />
          <input type="email" placeholder="Email" {...register("email")} />
        </div>
        <div>
          <MdPassword />
          <input
            type="password"
            placeholder="Password"
            {...register("password")}
          />
        </div>
        <div>
          <FaBirthdayCake />
          <input type="date" placeholder="Birthday" {...register("birthday")} />
        </div>
        <div className="form-container_button">
          {userSelected !== null ? (
            <>
              <button id="button">Update</button>
              <button onClick={desSelectuser}>Cancel</button>
            </>
          ) : (
            <button>Create</button>
          )}
        </div>
      </form>
    </div>
  );
};

export default UsersForm;
