import { makeAutoObservable } from "mobx";
import instance from "./instance";

class ThingStore {
  things = [];
  constructor() {
    makeAutoObservable(this);
  }

  getRandom = async () => {
    try {
      const res = await instance.get("/things/random");

      const randomThings = res.data.map((item) => item.name);

      this.things = randomThings;
    } catch (error) {
      console.log("thingStore -> getRandom -> error", error);
    }
  };

  getTreasure = async () => {
    try {
      const res = await instance.get("/things/treasure");

      const treasureThings = res.data.map((item) => item.name);

      this.things = treasureThings;
    } catch (error) {
      console.log("thingStore -> getRandom -> error", error);
    }
  };
}

const thingStore = new ThingStore();

export default thingStore;
