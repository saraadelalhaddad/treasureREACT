//styles
import { ButtonStyled, Title } from "../styles";

//Link
import { Link } from "react-router-dom";

//store
import authStore from "../stores/authStore";

const Home = () => {
  return (
    <>
      {authStore.user !== null ? (
        <>
          <Title>Welcome </Title>
          <ButtonStyled>
            <Link to="/randomthings">Random Things</Link>
          </ButtonStyled>

          <ButtonStyled>
            <Link to="/treasure">Treasure !</Link>
          </ButtonStyled>
        </>
      ) : (
        <>
          <Title>Welcome </Title>
          <ButtonStyled>
            <Link to="/randomthings">Random Things</Link>
          </ButtonStyled>
        </>
      )}
    </>
  );
};

export default Home;
