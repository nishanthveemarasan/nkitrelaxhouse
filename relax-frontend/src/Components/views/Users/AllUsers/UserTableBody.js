import ActionButton from "src/Components/UI/ActionButton/ActionButton";
import classes from "./AllUsers.module.css";
import { CBadge } from "@coreui/react";
const UserTableBody = (props) => {
  return (
    <>
      {props.body.map((row, i) => {
        return (
          <tr key={i}>
            <td>{row.id}</td>
            <td>{row.name}</td>
            <td>{row.last_name}</td>
            <td>{row.username}</td>
            <td>{row.email}</td>
            <td>{row.job_title}</td>
            <td>{row.phone}</td>
            <td>{getRoles(row.roles)}</td>
            <td>
              <ActionButton
                value="Assign Roles"
                class={classes.view}
                name="cil-align-center"
              />{" "}
              |{" "}
              <ActionButton
                value="Delete"
                class={classes.delete}
                name="cil-trash"
              />
            </td>
          </tr>
        );
      })}
    </>
  );
};

export default UserTableBody;
const getRoles = (value) => {
  switch (value) {
    case "admin":
      return <CBadge color="success">Admin</CBadge>;
    case "user":
      return <CBadge color="warning">User</CBadge>;

    default:
      return false;
  }
};
