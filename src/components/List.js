//style
import { ListWrapper } from "../styles";

//observer
import { observer } from "mobx-react";
import thingStore from "../stores/thingStore";

function List({ mylist }) {
  return (
    <>
      {mylist === "random" ? thingStore.getRandom : thingStore.getTreasure}

      <ListWrapper>
        {thingStore.things.map((item) => (
          <>
            <h1>{item}</h1>
            <hr />
          </>
        ))}
      </ListWrapper>
    </>
  );
}

export default observer(List);
