import React, { useState } from "react";
import "./genealogy.css";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import Layout from "../../common/layout";
import Users from "./users.object";
const Genealogy = () => {
  const [user, setUser] = useState([...Users]);
  const [selected, setSelected] = useState({});
  const deleteUser = (user, index) => {
    Users[index].delete = true;
    setSelected(user);
    const selectedUser = user.filter((i) => i.id == index + 1);
    selectedUser[0].delete = true;
    setUser(Users);
    console.log(selectedUser[0]);
  };
  return (
    <Layout>
      <div className="mainContainer">
        <p className="title">Genealogy</p>
        <div className="mainContent">
<div className="tbl-scrull">
<div className="title-header">
            <span>#</span>
            <span>Name</span>
            <span>Email</span>
            <span>Date</span>
            <span></span>
          </div>
          {user.map((user, index) => (
            <div className="body-content" key={user.id}>
              {!user.delete ? (
                <>
                  <span>{user.id}</span>
                  <span>{user.name}</span>
                  <span>
                    <a href={"mailto:" + user.email}>{user.email}</a>
                  </span>
                  <span>{user.date}</span>
                  <span>
                    <DeleteForeverIcon
                      onClick={() => deleteUser(user, index)}
                    />
                  </span>
                </>
              ) : null}
            </div>
          ))}
</div>
        
        </div>
        <div className="textContainer">
          <div className="caption">
           <p>
           Your Link :
            <span>
              https://cyruscoin.io/?ref=YUlJV2dNcjFRTTZHNTRHZHhtUUNWZz09
            </span>
           </p>
          </div>
          <div className="circleTitle">
            <p>45</p>
            <p>Invited Friends</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Genealogy;
