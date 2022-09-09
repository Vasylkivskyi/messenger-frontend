import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { getFilteredUserName } from "../../lib/helpers";
import { ROOM_ACTION_TYPES } from "../../reducers";
import { createRoom } from "../../requests";
import { SearchResultsType, UserType } from "../../types";
import Icon from "../Icon/Icon";
import "./searchResults.scss";

const SearchResults: React.FC<SearchResultsType> = ({
  searchResults,
  clear,
  rooms,
  dispatch,
}) => {
  const navigate = useNavigate();

  const onClick = useCallback(
    (user: UserType) => {
      (async () => {
        const room = await createRoom(user._id);
        if (room) {
          const path = getFilteredUserName(room?.users);
          if (rooms.find((existingRoom) => existingRoom._id === room?._id)) {
            navigate(path);
            clear(false);
            return;
          } else {
            dispatch({
              type: ROOM_ACTION_TYPES.ADD_ROOM,
              payload: [room],
            });
            navigate(path);
            clear(false);
            return;
          }
        }
      })();
    },
    [rooms, navigate, clear, dispatch]
  );

  return (
    <ul className="search-results">
      <div className="curtain" onClick={() => clear(true)} />
      {searchResults.map((user) => (
        <li onClick={() => onClick(user)} key={user._id}>
          <Icon name="face" className="result-icon-wrapper" />
          {user.username}
        </li>
      ))}
    </ul>
  );
};

export default SearchResults;
