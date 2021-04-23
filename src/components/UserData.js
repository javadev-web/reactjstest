import React, { useContext } from "react";
import { NewsContext } from "../NewsContext";
import GetUserData from "./GetUserData";

function UserData(props) {
  const { data } = useContext(NewsContext);
  console.log(data);
  return (
    <div>
      <br />
      {data
        ? data.results.map((news) => <GetUserData data={news} key={news.url} />)
        : "Loading"}
    </div>
  );
}

export default UserData;
