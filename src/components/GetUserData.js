import React from "react";
function NewsArticle({ data }) {
  console.log(data);
  return (
    <div className="">
      <div className="ImageGallery">
        <img src={data.picture.large} alt="User Title" />
        <img src={data.picture.large} alt="User Title" />
        <img src={data.picture.large} alt="User Title" />
        <img src={data.picture.large} alt="User Title" />
      </div>
      <div className="ImageGallery">
        <img src={data.picture.large} alt="User Title" className="thumbnail" />
        <img src={data.picture.large} alt="User Title" />
        <img src={data.picture.large} alt="User Title" />
        <img src={data.picture.large} alt="User Title" />
      </div>
      <h3 className="head__text">You are Viewing</h3>
      <br />
      <table>
        <tr>
          <th colSpan="3">
            <span className="th_row">{data.name.title}</span>{" "}
            <span className="th_row">{data.name.first}</span>
            <span className="th_row">{data.name.last}</span>
          </th>
        </tr>
        <tr>
          <td style={{ width: "100px" }}>
            <img src={data.picture.large} alt="User Title" />
          </td>
          <td colSpan="2">{data.login.username}</td>
        </tr>
        <tr>
          <td>Address</td>
          <td>
            {data.location.street.number}, {data.location.street.name},{" "}
            {data.location.city}, {data.location.state}, {data.location.country}
            , {data.location.postcode}
          </td>
        </tr>
        <tr>
          <td>Email</td>
          <td>{data.email}</td>
        </tr>
        <tr>
          <td>Phone</td>
          <td>{data.phone}</td>
        </tr>
      </table>
    </div>
  );
}

export default NewsArticle;
