import CBadge from "src/Components/UI/Badge/CBadge";
import CButton from "src/Components/UI/Button/Button";
import { getDate } from "src/custom-functions";
import { useDispatch } from "react-redux";
import { commentStoreAction } from "src/store/store";
const CTableBody = (props) => {
  const body = props.body;
  const dispatch = useDispatch();
  return (
    <>
      {body.map((row, i) => {
        return (
          <tr key={i}>
            <td>{row.id}</td>
            <td>{row.name}</td>
            <td>{row.title}</td>
            <td>{showCommentContent(row.content, dispatch)}</td>
            <td>{row.content}</td>
            <td>{getDate(row.created_at)}</td>
            <td>{getStatus(row.status)}</td>
            <td>{getCommentStatus(row.status, row.id, dispatch)}</td>
          </tr>
        );
      })}
    </>
  );
};
export default CTableBody;
const getStatus = (value) => {
  switch (value) {
    case "approve":
      return <CBadge color="success" value="Approved" size="100%" />;
    case "disapprove":
      return <CBadge color="danger" value="Disabled" size="100%" />;
    default:
      return false;
  }
};

const showCommentContent = (content, dispatch) => {
  const onOpenContentModal = (content, dispatch) => {
    dispatch(
      commentStoreAction.openCommentContent({
        content,
      })
    );
  };
  return (
    <CButton
      color={"primary"}
      name={"View"}
      type="button"
      size="20%"
      click={onOpenContentModal.bind(null, content, dispatch)}
    />
  );
};

const getCommentStatus = (value, id, dispatch) => {
  const onCommentChangeHandler = (id, action, dispatch) => {
    let data;
    if (action === "Disable") {
      data = {
        id,
        action,
        heading: "Disable the Comment",
        color: "danger",
        body: "Please confirm that you are going to disable this Comment?",
      };
    } else {
      data = {
        id,
        action,
        heading: "Aprrove the Comment",
        color: "success",
        body: "Please confirm that you are going to Approve this Comment?",
      };
    }

    dispatch(commentStoreAction.openCommentModal(data));
  };

  switch (value) {
    case "approve":
      return (
        <CButton
          color={"danger"}
          name={"Disable"}
          type="button"
          size="20%"
          click={onCommentChangeHandler.bind(null, id, "Disable", dispatch)}
        />
      );
    case "disapprove":
      return (
        <CButton
          color={"success"}
          name={"Approve"}
          type="button"
          size="20%"
          click={onCommentChangeHandler.bind(null, id, "Approve", dispatch)}
        />
      );
    default:
      return false;
  }
};
