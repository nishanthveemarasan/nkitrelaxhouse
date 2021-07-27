import React, { useState, useEffect } from "react";
import { CCol, CRow } from "@coreui/react";
import Card from "src/Components/UI/Card/Card";
import PostComment from "../Comment/PostComment";
import Like from "../Like/Like";
const SinglePost = (props) => {
  const [like, setLike] = useState(0);
  const [likeChanged, setLikeChanged] = useState(true);
  const post = props.data;
  useEffect(() => {
    if (likeChanged) {
      setLike(post.likes_count);
    }
  }, [like, likeChanged]);

  const getTotalLikes = (likes) => {
    console.log("likes", likes);
    setLikeChanged(false);
    setLike(likes);
  };
  console.log("like", like);
  return (
    <>
      <Card
        color="primary"
        header={post.title}
        subTitle={true}
        by={post.name}
        date={post.created_at}
      >
        <div className="mx-3 my-2">
          <div className="text-justify mb-3">{post.content}</div>
          <div>Total Likes: {like}</div>
          <div className="mt-3">
            <Like id={post.id} getLikes={getTotalLikes} />
          </div>
          <div className="mt-3">
            <CRow>
              <CCol md={6} sm={12}>
                <PostComment id={post.id} />
              </CCol>
            </CRow>
          </div>
        </div>
      </Card>
    </>
  );
};
export default SinglePost;
