import { useCallback, useContext, useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LoggedContext } from "../../context";
import { makeSearch } from "../../requests";
import { HeaderPropsType, UserType } from "../../types";
import Icon from "../Icon/Icon";
import SearchResults from "../SearchResults/SearchResults";
import "./header.scss";

const Header: React.FC<HeaderPropsType> = ({
  roomName,
  isLogged,
  searchResults,
  setSearchResults,
}) => {
  const navigate = useNavigate();
  const [showSearchResults, setShowSearchResults] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [term, setTerm] = useState<string>("");

  const logout = useCallback(() => {
    localStorage.setItem("token", "");
    localStorage.setItem("user_id", "");
    navigate("/login");
  }, [navigate]);

  useEffect(() => {
    const timeOutId = setTimeout(async () => {
      const users = await makeSearch(term);
      setSearchResults(users);
      if (users.length) {
        setShowSearchResults(true);
      }
    }, 500);
    return () => clearTimeout(timeOutId);
  }, [term, setSearchResults]);

  const clear = useCallback((willFocus = true) => {
    setTerm("");
    if (willFocus) {
      inputRef.current?.focus();
    }
  }, []);

  return (
    <div className="head">
      <div className="left">
        <Link to="/" className="header-logo-wrapper">
          <Icon name="mark_email_unread" className="header-logo-icon-wrapper" />
          <span className="logo-text">MessengerApp</span>
        </Link>
        {isLogged && (
          <div className="search-container">
            <input
              type="text"
              placeholder="Search"
              value={term}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setTerm(e.target.value)
              }
            />
            <Icon name="search" className="header-search-icon-wrapper" />
            {!!term.length && (
              <Icon
                name="cancel"
                className="header-cancel-icon-wrapper"
                onClick={() => clear(true)}
              />
            )}
            {!!searchResults.length && showSearchResults && (
              <SearchResults
                searchResults={searchResults}
                hideSearchResults={() => setShowSearchResults(false)}
                clear={clear}
              />
            )}
          </div>
        )}
      </div>
      {isLogged && (
        <div className="right">
          {roomName && (
            <>
              <Icon name="3p" className="header-icon" />
              <div className="user-name">{roomName}</div>
            </>
          )}
          <Icon name="logout" className="header-logout" onClick={logout} />
        </div>
      )}
    </div>
  );
};

export default Header;
