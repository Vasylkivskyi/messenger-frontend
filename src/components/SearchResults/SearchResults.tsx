import React, { useCallback, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { SocketContext } from "../../context";
import { createRoom } from "../../requests";
import { RoomEvents, SearchResultsType, UserType } from "../../types";
import Icon from "../Icon/Icon";
import "./searchResults.scss";

const SearchResults: React.FC<SearchResultsType> = ({
  searchResults,
  hideSearchResults,
  clear,
}) => {
  const onClick = useCallback((user: UserType) => {
    (async () => {
      const room = await createRoom(user._id);
      // const roomExists = rooms.find((room) =>
      //   room.users.find((u) => u._id === user._id)
      // );
      // if (!roomExists) {
      //   socket?.emit(RoomEvents.CREATE_ROOM, {
      //     usersIds: [currentUser, user._id],
      //   });
      // }
      // navigate(user.username);
      // clear(false);
      // hideSearchResults();
    })();
  }, []);

  const hideResults = useCallback(() => {
    hideSearchResults();
    clear(false);
  }, [clear, hideSearchResults]);

  return (
    <ul className="search-results">
      <div className="curtain" onClick={() => hideResults()} />
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
