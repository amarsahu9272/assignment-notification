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
  // const dobDate = new Date();
  // console.log(dobDate.getDate());
  // console.log(dobDate.getMonth());
  return (
    <div className="Notification">
      <div className="Notification-p">
        {notifData.map((fData, i) => {
          const dobDate = new Date();
          const userDate = fData.dob.split("/");
          const notifDate = parseInt(userDate[0]);
          const currDates = dobDate.getDate();
          const notifMonth = parseInt(userDate[1]);
          const currMonth = dobDate.getMonth() + 1;
          //console.log("NotifMonth", notifMonth);
          //console.log("cuurMonth", currMonth);
          if (notifDate === currDates && notifMonth === currMonth) {
            return (
              <div key={i} className="Notification-s">
                <div className="Notification-c">
                  <Avatar src={fData?.profilePic} />
                  <div className="Notification-InC">
                    <h3>{fData?.name}</h3>
                    <p>DOB: {fData?.dob}</p>
                  </div>
                </div>
                <MoreHorizIcon />
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}

export default Notification;
