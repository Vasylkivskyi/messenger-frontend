import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { ROOM_ACTION_TYPES } from "../../reducers";
import { createRoom } from "../../requests";
import { SearchResultsType, UserType } from "../../types";
import Icon from "../Icon/Icon";
import "./searchResults.scss";

const SearchResults: React.FC<SearchResultsType> = ({
  searchResults,
  clear,
  hideSearchResults,
  rooms,
  dispatch,
}) => {
  const navigate = useNavigate();
  const onClick = useCallback(
    (user: UserType) => {
      (async () => {
        const roomExists = rooms.find((room) =>
          room.members.find((u) => u._id === user._id)
        );
        if (!roomExists) {
          const room = await createRoom(user._id);
          if (room) {
            dispatch({ type: ROOM_ACTION_TYPES.ADD_ROOM, payload: [room] });
          }
        }
        clear(false);
        hideSearchResults();
        navigate(user.name);
      })();
    },
    [navigate, rooms, dispatch, clear, hideSearchResults]
  );

  const hideAndClose = useCallback(() => {
    hideSearchResults();
    clear(false);
  }, [hideSearchResults, clear]);

  return (
    <ul className="search-results">
      <div className="curtain" onClick={() => hideAndClose()} />
      {searchResults.map((user) => (
        <li onClick={() => onClick(user)} key={user._id}>
          <Icon name="face" className="result-icon-wrapper" />
          {user.name}
        </li>
      ))}
    </ul>
  );
};

export default SearchResults;
