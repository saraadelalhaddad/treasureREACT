//style
import { ListWrapper } from "../styles";

//observer
import { observer } from "mobx-react";

//store
import thingStore from "../stores/thingStore";

function RandomList() {
  thingStore.getRandom();
  const random = thingStore.things;
  return (
    <ListWrapper>
      <h1>Random</h1>
      {random.map((item) => (
        <h3>{item}</h3>
      ))}
    </ListWrapper>
  );
}

export default observer(RandomList);
