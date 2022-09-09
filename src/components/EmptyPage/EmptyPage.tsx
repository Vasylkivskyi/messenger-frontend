import Icon from "../Icon/Icon";
import "./emptyPage.scss";

const EmptyPage = () => {
  return (
    <div className="empty-page">
      <div className="content">
        <Icon
          name="notification_important"
          className="empty-page-icon-container"
        />
        <h1>Start search to find users</h1>
      </div>
    </div>
  );
};

export default EmptyPage;
