import { RoomActionType, RoomsListType } from "../types";

export enum ROOM_ACTION_TYPES {
  ADD_ROOM = "add_room",
  SET_ROOMS = "set_rooms",
}

export const roomReducer = (state: RoomsListType, action: RoomActionType) => {
  switch (action.type) {
    case ROOM_ACTION_TYPES.SET_ROOMS:
      return [...action.payload];
    case ROOM_ACTION_TYPES.ADD_ROOM:
      return [...state, ...action.payload];
  }
};
