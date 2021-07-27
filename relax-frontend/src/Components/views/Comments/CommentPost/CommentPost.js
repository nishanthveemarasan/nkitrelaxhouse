import React, { useEffect, useState } from "react";
import Pagination from "src/Components/UI/Table/Pagination";
import { getDate } from "src/custom-functions";
import { sendGetAdminApi } from "src/service/appService";
import { getUrl } from "src/service/customService";
const CommentPost = (props) => {
  const [comment, setComment] = useState([]);
  const [cPagination, setpagination] = useState("");
  const [param, setParam] = useState("");

  useEffect(() => {
    if (props.id) {
      const url = getUrl(`comments/get-post-comment/${props.id}`, param);
      console.log(url);
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
  }, [props.id, param]);
  const pageChangeHandler = (url) => {
    const param = url.split("?")[1];
    setParam(param);
  };
  return (
    <>
      {comment.length === 0 && (
        <span className="text-primary font-italic">
          no comment yet for this post
        </span>
      )}
      {comment.length > 0 && (
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
    </>
  );
};
export default React.memo(CommentPost);
