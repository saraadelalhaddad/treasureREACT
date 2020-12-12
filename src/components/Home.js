//styles
import { Title } from "../styles";

//Link
import { Link } from "react-router-dom";
import thingStore from "../stores/thingStore";

const Home = () => {
  return (
    <>
      <Title>Welcome </Title>

      <Link to="/randomthings" className="nav-link">
        Random Things
        <span className="sr-only"></span>
      </Link>
      <Link to="/treasure" className="-link">
        Treasure ! <span className="sr-only"></span>
      </Link>
    </>
  );
};

export default Home;
