import React, { useEffect, useState } from "react";
import { CCol, CRow } from "@coreui/react";
import Pagination from "src/Components/UI/Table/Pagination";
import FormTextArea from "src/Components/UI/Input/FormTextArea";
import { getDate } from "src/custom-functions";
import { sendGetAdminApi, sendPostAdminApi } from "src/service/appService";
import { getUrl } from "src/service/customService";
import CButton from "src/Components/UI/Button/Button";
const PostComment = (props) => {
  const [comment, setComment] = useState([]);
  const [cPagination, setpagination] = useState("");
  const [param, setParam] = useState("");
  const [writeComment, setWriteComment] = useState("");
  const [commentChanged, setCommentChanged] = useState(true);
  const [sendRequest, setSendRequest] = useState(false);
  useEffect(() => {
    if (props.id && commentChanged) {
      const url = getUrl(`comments/get-post-comment/${props.id}`, param);
      sendGetAdminApi(url)
        .then((response) => {
          const data = {
            data: response.data.data,
          };
          setComment(response.data.data.data);
          setpagination(response.data.data);
        })
        .catch((error) => {
          console.log(error.message);
        });
    }
  }, [props.id, commentChanged, param]);
  const pageChangeHandler = (url) => {
    const param = url.split("?")[1];
    setParam(param);
  };

  const onCommentChangeHandler = (e) => {
    setWriteComment(e.target.value);
  };
  const onCreateCommentHandler = () => {
    if (writeComment) {
      setSendRequest(true);
      setCommentChanged(false);
      const data = {
        post_id: props.id,
        content: writeComment,
      };
      sendPostAdminApi("comments/create", data)
        .then((response) => {
          setParam("");
          setCommentChanged(true);
          setSendRequest(false);
          setWriteComment("");
        })
        .catch((error) => {
          console.log(error.response);
        });
    }
  };
  return (
    <>
      <>
        {comment && comment.length === 0 && (
          <span className="text-primary font-italic">
            no comment yet for this post
          </span>
        )}
        {comment && comment.length > 0 && (
          <>
            {comment.map((row, index) => {
              return (
                <div key={index}>
                  <h6 className="font-weight-bolder text-primary">
                    {row.name}{" "}
                    <small className="font-italic">
                      On {getDate(row.created_at)}
                    </small>
                  </h6>
                  <p className="mt-2">{row.content}</p>
                </div>
              );
            })}
            <Pagination body={cPagination} change={pageChangeHandler} />
          </>
        )}
        {props.isAuthenticatd && (
          <>
            <CRow>
              <CCol md={8} sm={12}>
                <FormTextArea
                  labelName="Write your comment here"
                  readOnly={false}
                  row={5}
                  value={writeComment}
                  change={onCommentChangeHandler}
                ></FormTextArea>
              </CCol>
            </CRow>
            <CRow>
              <CCol md={4} sm={12}>
                <CButton
                  type="button"
                  color="success"
                  width="30%"
                  name="Submit"
                  click={onCreateCommentHandler}
                  loading={sendRequest}
                />
              </CCol>
            </CRow>
          </>
        )}
      </>
    </>
  );
};
export default PostComment;
