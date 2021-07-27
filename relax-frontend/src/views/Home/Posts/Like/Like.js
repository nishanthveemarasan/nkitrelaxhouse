import ToolTip from "src/Components/UI/Tooltip/ToolTip";
import { useState, useEffect } from "react";
import { sendPostAdminApi } from "src/service/appService";
const Like = (props) => {
  const id = props.id;
  const [dataChanged, setDataChanged] = useState(true);
  const [liked, setliked] = useState(false);
  useEffect(() => {
    if (dataChanged) {
      const data = {
        postId: id,
      };
      sendPostAdminApi("likes/is-post-liked", data)
        .then((response) => {
          if (response.data.data.userLiked) {
            setliked(true); //unlike
          } else {
            setliked(false); //like
          }
        })
        .catch((error) => {
          console.log(error.message);
        });
    }
  }, [dataChanged]);

  const onUpdateLikeHandler = () => {
    const data = {
      postId: id,
      status: liked,
    };
    sendPostAdminApi("likes/update-user-like", data)
      .then((response) => {
        const totalLikes = +response.data.data.totalLikes;
        setliked((prevState) => !prevState);
        props.getLikes(totalLikes);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <>
      <p>
        <ToolTip value={`${liked ? "Unlike" : "Like"} this post`}>
          <span className="text-primary" onClick={onUpdateLikeHandler}>
            {liked ? "Unlike" : "Like"}
          </span>
        </ToolTip>{" "}
        this Post
      </p>
    </>
  );
};
export default Like;
