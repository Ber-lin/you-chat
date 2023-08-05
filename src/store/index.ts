import { StateCreator, create } from "zustand";
import { persist } from "zustand/middleware";

export type Gender = "MALE" | "FEMALE";
export type MsgType = "common" | "markdown";
export interface IUser {
  uid: string;
  email: string;
  phone?: string;
  userName: string;
  salt: string;
  password: string;
  avatar: string;
  slogan: string;
  birthday?: Date;
  age?: number;
  gender?: Gender;
  createTime: Date;
  updateTime: Date;
  isDel?: Date;
}

/**
 * 用户间关系表
 */
export interface IUserRelation {
  uuid: string;
  friend: IUser;
  user: IUser;
  createTime: Date;
  updateTime?: Date;
  isDel?: Date;
}

/**
 * 用户间聊天Room
 */
export interface IPrivateRoom {
  uuid: string;
  user: IUser;
  friend: IUser;
  createTime: Date;
  isDel?: Date;
}

export interface IGroup {
  gid: string;
  avatar?: string;
  createdBy: IUser;
  groupName: string;
  createTime: string;
  updateTime: string;
  isDel?: Date;
}

/**
 * 群组与用户关系表
 */
export interface IGroupUserRelation {
  uuid: string;
  group: IGroup;
  user: IUser;
  createTime: Date;
  isDel?: Date;
}

export interface IMessage {
  uuid: string;
  user: IUser;
  content: string;
  createTime: Date;
  type: MsgType;
  isReturn?: Date;
}

/**
 * 信息与群组关系表
 */
export interface IMessageGroupRelation {
  uuid: string;
  group: IGroup;
  msg: IMessage;
}

/**
 * 信息与用户关系表
 */
export interface IMessagePrivateRelation {
  uuid: string;
  user: IUser;
  msg: IMessage;
}
interface IPerson {
  user: Partial<IUser>;
  chatList: Partial<IUser>[];
  token: string;
  setToken: (token: string) => void;
  setUser: (user: Partial<IUser>) => void;
  setLinkMan: (chatList: Partial<IUser>[]) => void;
}

let userStore = (set: any) => ({
  user: {
    uid: "",
    email: "",
    phone: "",
    userName: "",
    avatar: "",
    slogan: "",
  },
  token: "",
  chatList: [],
  setUser: (user: Partial<IUser>) => {
    set(() => ({ user }));
  },
  setLinkMan: (chatList: Partial<IUser>[]) => {
    set((state: IPerson) => ({
      ...state,
      linkMan: [...state.chatList, ...chatList],
    }));
  },
  setToken: (token: string) => {
    set((state: IPerson) => ({ ...state, token }));
  },
});
let store = persist(userStore, { name: "user" });
export const usePersonStore = create(store);
