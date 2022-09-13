import React, { useCallback, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { SocketContext } from "../../context";
import { RoomEvents, SearchResultsType, UserType } from "../../types";
import Icon from "../Icon/Icon";
import "./searchResults.scss";

const SearchResults: React.FC<SearchResultsType> = ({
  searchResults,
  clear,
}) => {
  const navigate = useNavigate();
  const socket = useContext(SocketContext);
  const onClick = useCallback(
    (user: UserType) => {
      (async () => {
        const currentUser = localStorage.getItem("user_id");
        socket?.emit(RoomEvents.JOIN_ROOM, {
          usersIds: [currentUser, user._id],
        });
        navigate(user.username);
      })();
    },
    [socket, navigate]
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
