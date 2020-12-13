//style
import { ListWrapper } from "../styles";

//observer
import { observer } from "mobx-react";

//store
import thingStore from "../stores/thingStore";

function TreasureList() {
  thingStore.getTreasure();
  const treasure = thingStore.things;

  return (
    <ListWrapper>
      <h1>Treasure</h1>
      {treasure.map((item) => (
        <h3>{item}</h3>
      ))}
    </ListWrapper>
  );
}

export default observer(TreasureList);
