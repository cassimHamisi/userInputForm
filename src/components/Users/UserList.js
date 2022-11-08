import React from "react";
import Card from "../UI/Card";
import classes from "./UsersList.module.css";

const UserList = (props) => {
  return (
    <Card className={classes.users}>
      <div>
        <ul>
          <li>
            <h2> Form git initInputs Rendered Here</h2>
          </li>
          {props.users.map((user) => (
            <li key={user.id}>
              {user.name} ({user.age} years old)
            </li>
          ))}
        </ul>
      </div>
    </Card>
  );
};

export default UserList;
