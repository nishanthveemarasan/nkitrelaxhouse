import ActionButton from "src/Components/UI/ActionButton/ActionButton";
import { useDispatch } from "react-redux";
import { getDate } from "src/custom-functions";
import classes from "./Posts.module.css";
import { CBadge } from "@coreui/react";
import { openPostModal } from "src/store/post.slice";
const AllPostBodyTable = (props) => {
  const dispatch = useDispatch();
  const updateHandler = (id) => {
    const data = {
      id: props.body[id].id,
      postData: props.body[id],
      action: "Update",
    };
    dispatch(openPostModal(data));
  };
  const deleteleHandler = (id) => {
    const data = {
      id: props.body[id].id,
      postData: props.body[id],
      action: "Delete",
    };
    dispatch(openPostModal(data));
  };
  return (
    <>
      {props.body.map((row, i) => {
        return (
          <tr key={i}>
            <td>{row.id}</td>
            <td>{row.name}</td>
            <td>{row.title}</td>
            <td>{`${row.content.substring(0, 10)}...`}</td>
            <td>{getDate(row.updated_at)}</td>
            <td>{row.comments_count}</td>
            <td>{row.likes_count}</td>
            <td>{getStatus(row.status)}</td>
            <td>{getStatus(row.type)}</td>
            <td>
              <ActionButton
                value="Edit Post"
                class={classes.view}
                name="cil-align-center"
                action={() => updateHandler(i)}
              />{" "}
              |{" "}
              <ActionButton
                value="Delete"
                class={classes.delete}
                name="cil-trash"
                action={() => deleteleHandler(i)}
              />
            </td>
          </tr>
        );
      })}
    </>
  );
};
export default AllPostBodyTable;

const getStatus = (value) => {
  switch (value) {
    case "publish":
      return <CBadge color="primary">Published</CBadge>;
    case "draft":
      return <CBadge color="warning">Draft</CBadge>;
    case "active":
      return <CBadge color="success">Active</CBadge>;
    case "disabled":
      return <CBadge color="danger">Inactive</CBadge>;
    default:
      return false;
  }
};