import { atom } from "recoil";
import { notificationData } from "../const";

export const notificationDatas = atom({
  key: "notificationDatas",
  default: notificationData,
});
