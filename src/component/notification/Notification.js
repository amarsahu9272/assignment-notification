import { Avatar } from "@mui/material";
import React from "react";
import "./Notification.css";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { useRecoilValue } from "recoil";
import { notificationDatas } from "../RecoilState";

function Notification() {
  // let [notifData] = useState(notificationData);
  const notifData = useRecoilValue(notificationDatas);
  // console.log("dfsfs",notifData)
  return (
    <div className="Notification">
      <div className="Notification-p">
        {notifData.map((fData, i) => (
          <div key={i} className="Notification-s">
            <div  className="Notification-c">
              <Avatar src={fData?.profilePic} />
              <div className="Notification-InC">
                <h3>{fData?.name}</h3>
                <p>DOB: {fData?.dob}</p>
              </div>
            </div>
            <MoreHorizIcon />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Notification;
