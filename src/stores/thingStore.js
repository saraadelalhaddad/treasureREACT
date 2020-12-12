import { makeAutoObservable } from "mobx";
import instance from "./instance";
import decode from "jwt-decode";

class ThingStore {
  things = [];
  constructor() {
    makeAutoObservable(this);
  }

  getRandom = async () => {
    try {
      const res = await instance.get("/things/random");

      const check = res.data.map((item) => item.name);
      console.log("check", check);
      this.things = check;
    } catch (error) {
      console.log("thingStore -> getRandom -> error", error);
    }
  };

  getTreasure = () => {};
}

const thingStore = new ThingStore();
thingStore.getRandom();
export default thingStore;
