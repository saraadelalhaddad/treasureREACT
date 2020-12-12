import { useState } from "react";
import { CreateButtonStyled } from "../styles";
import authStore from "../stores/authStore";
import { observer } from "mobx-react";

const Signin = () => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const handleChange = (event) =>
    setUser({ ...user, [event.target.name]: event.target.value });

  const handleSubmit = (event) => {
    event.preventDefault();
    authStore.signin(user);
  };

  return (
    <>
      <h3>Signin</h3>
      <form>
        <div className="form-group">
          <label>Username</label>
          <input
            name="username"
            value={user.username}
            type="text"
            className="form-control"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            name="password"
            value={user.password}
            type="text"
            className="form-control"
            onChange={handleChange}
          />
        </div>
        <CreateButtonStyled
          className="btn float-right"
          type="submit"
          onClick={handleSubmit}
        >
          Sign In
        </CreateButtonStyled>
      </form>
    </>
  );
};

export default observer(Signin);
