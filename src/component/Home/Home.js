import React, { useState } from "react";
import "./Home.css";
import CustomSelect from "../Atoms/customSelect/CustomSelect";
import { yearArray, monthArray, dateArray } from "../../const";
import { useRecoilState } from "recoil";
import { notificationDatas } from "../RecoilState";
import { useNavigate } from "react-router-dom";
// import { useSetRecoilState } from "recoil";

function Home() {
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");
  const [date, setDate] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [counter, setCounter] = useState(5);
  const navigate = useNavigate()

  // const setNotifData = useSetRecoilState(notificationDatas);
  const [notifData, setNotifData] = useRecoilState(notificationDatas);

  function handleName(e) {
    setName(e.target.value);
  }
  function handleURL(e) {
    setUrl(e.target.value);
  }
  function handleDate(inputDate) {
    setDate(inputDate);
  }
  function handleMonth(inputMonth) {
    setMonth(inputMonth);
  }
  function handleYear(inputYear) {
    setYear(inputYear);
  }
  const handleSubmit = () => {
    setCounter(counter + 1);
    const userData = {
      id: counter,
      profilePic: url,
      name: name,
      dob: `${date + "/" + month + "/" + year}`,
    };
    setNotifData([userData, ...notifData]);
    setDate("");
    setMonth("");
    setYear("");
    setName("");
    setUrl("");
    navigate('Notification')
    console.log(userData);
  };
  return (
    <div className="home">
      <div className="home-p">
        <div className="home-s">
          <input className="homeInput" placeholder="Name" onChange={(e) => handleName(e)} />
          <input className="homeInput" placeholder="URL for image" onChange={(e) => handleURL(e)} />
          <div className="selectWrapper">
            <CustomSelect
              keys={dateArray[0]}
              data={dateArray}
              handleSelect={handleDate}
              defaultOption="Date"
            />
            <CustomSelect
              keys={monthArray[0]}
              data={monthArray}
              handleSelect={handleMonth}
              defaultOption="Month"
            />
            <CustomSelect
              keys={yearArray[0]}
              data={yearArray}
              handleSelect={handleYear}
              defaultOption="Year"
            />
          </div>
          <button className="NotificationBtn" onClick={handleSubmit}>Submit</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
