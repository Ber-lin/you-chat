export type Gender = "MALE" | "FEMALE";

export interface IUser {
  uid: string;
  email: string;
  phone?: string;
  userName: string;
  salt: string;
  password: string;
  avatar: string;
  header: string;
  slogan?: string;
  birthday?: Date;
  age?: number;
  gender?: Gender;
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
}

/**
 * 用户间聊天Room
 */
export interface IPrivateRoom {
  uuid: string;
  user: IUser;
  friend: IUser;
  createTime: Date;
}

export interface IGroup {
  gid: string;
  avatar?: string;
  createdBy: IUser;
  groupName: string;
  createTime: string;
  updateTime: string;
}

/**
 * 群组与用户关系表
 */
export interface IGroupUserRelation {
  uuid: string;
  group: IGroup;
  user: IUser;
  createTime: Date;
}

export interface IMessage {
  uuid: string;
  user: IUser;
  content: string;
  createTime: Date;
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
