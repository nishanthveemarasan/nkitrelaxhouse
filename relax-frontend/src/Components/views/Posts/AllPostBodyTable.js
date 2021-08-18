import ActionButton from "src/Components/UI/ActionButton/ActionButton";
import { useSelector, useDispatch } from "react-redux";
import { getDate } from "src/custom-functions";
import classes from "./Posts.module.css";
import { getSinglePostData, openPostModal } from "src/store/post.slice";
import CBadge from "src/Components/UI/Badge/CBadge";
import CButton from "src/Components/UI/Button/Button";
import { useHistory } from "react-router";
const AllPostBodyTable = (props) => {
  const mapStateToProps = (state) => {
    return {
      singlePostData: state.postStore.singlePostData,
    };
  };
  const state = useSelector(mapStateToProps);
  const history = useHistory();
  const dispatch = useDispatch();
  const updateHandler = (id) => {
    const data = {
      id: props.body[id].id,
      postData: props.body[id],
      status: "update",
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

  const onSubmitHandler = (id) => {
    dispatch(getSinglePostData(id, "post"));
    history.push("/admin/singlePost");
  };
  return (
    <>
      {props.body.map((row, i) => {
        return (
          <tr key={i}>
            <td>{row.id}</td>
            <td>{row.name}</td>
            <td>{row.title}</td>
            <td>
              {
                <CButton
                  color={"primary"}
                  name={"View Post"}
                  type="button"
                  size="20%"
                  loading={state.singlePostData.isDataReceived}
                  click={onSubmitHandler.bind(null, row.id)}
                />
              }
            </td>
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
              | {getAction(row.id, row.type, dispatch)}
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
      return <CBadge color="primary" value={"Published"} size="100%" />;
    case "draft":
      return <CBadge color="warning" value={"Draft"} size="100%" />;
    case "active":
      return <CBadge color="success" value={"Active"} size="100%" />;
    case "disabled":
      return <CBadge color="danger" value={"Inactive"} size="100%" />;
    default:
      return false;
  }
};

const getAction = (id, type, dispatch) => {
  const deleteleHandler = (id, status) => {
    const data = {
      id,
      status,
      action: "Delete",
    };
    dispatch(openPostModal(data));
  };
  switch (type) {
    case "active":
      return (
        <CButton
          color={"danger"}
          name={"Disable"}
          type="button"
          size="20%"
          loading={false}
          click={deleteleHandler.bind(null, id, "disabled")}
        />
      );
    case "disabled":
      return (
        <CButton
          color={"success"}
          name={"Enable"}
          type="button"
          size="20%"
          loading={false}
          click={deleteleHandler.bind(null, id, "active")}
        />
      );
    default:
      return false;
  }
};
