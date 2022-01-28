import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

const UsersForm = ({
  addUser,
  updateUser,
  userSelected,
  desSelectuser,
  setUserSelected,
}) => {
  const defaultUser = {
    email: "",
    password: "",
    first_name: "",
    last_name: "",
    birthday: "",
  };

  const { register, handleSubmit, reset } = useForm();

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

  const submit = (data) => {
    if (userSelected?.first_name) {
      updateUser(data);
      reset(defaultUser);
      setUserSelected(null);
    } else {
      addUser(data);
      reset(defaultUser);
    }
  };

  return (
    <div style={{ width: "50%" }}>
      <form onSubmit={handleSubmit(submit)}>
        <input
          type="text"
          placeholder="First Name"
          {...register("first_name")}
        />
        <input type="text" placeholder="Last Name" {...register("last_name")} />
        <input type="email" placeholder="Email" {...register("email")} />
        <input
          type="password"
          placeholder="Password"
          {...register("password")}
        />
        <input type="date" placeholder="Birthday" {...register("birthday")} />
        {userSelected !== null ? (
          <>
            <button>Update</button>
            <button onClick={desSelectuser}>Cancel</button>
          </>
        ) : (
          <button>Create</button>
        )}
      </form>
    </div>
  );
};

export default UsersForm;
