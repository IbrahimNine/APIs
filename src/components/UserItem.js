import React from "react";

function UserItem(props) {
  return (
    <div className="UserItem" onMouseOver={()=>props.setUserData(props)}>
      <img
        src="https://www.utsmotorsports.com/wp-content/uploads/2019/03/kisspng-computer-icons-user-image-person-silhouette-my-svg-png-icon-free-download-419940-onlinewe-5b6512e70b0b21.9641097515333506310452.png"
        alt="User Pic"
        width={50}
      />
      <h4>{props.name}</h4>
    </div>
  );
}

export default UserItem;
