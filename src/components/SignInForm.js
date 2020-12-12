//state
import { useState } from "react";

//styles
import { CreateButtonStyled } from "../styles";

//store
import authStore from "../stores/authStore";

//observer
import { observer } from "mobx-react";

//Link
import { Link } from "react-router-dom";

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
      <form onSubmit={handleSubmit}>
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
        <CreateButtonStyled className="btn float-right" type="submit">
          Signin
        </CreateButtonStyled>
      </form>
    </>
  );
};

export default observer(Signin);
