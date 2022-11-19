import { Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import CButton from "src/Components/UI/Button/Button";
import Card from "src/Components/UI/Card/Card";
import { useHistory } from "react-router";
import CommentPost from "../../Comments/CommentPost/CommentPost";
const SinglePost = () => {
  const mapStateToProps = (state) => {
    return {
      data: state.postStore.singlePostData,
    };
  };
  const history = useHistory();
  const state = useSelector(mapStateToProps);
  const post = state.data.data;
  const onGobackHandler = () => {
    if (state.data.type === "post") {
      history.push("/admin/posts/all");
    }
  };

  return (
    <>
      {post && (
        <>
          <Row>
            <Col sm={12} className="text-right mb-3">
              <CButton name="Go back" color="success" click={onGobackHandler} />
            </Col>
          </Row>
          <Card
            color="primary"
            header={post.title}
            subTitle={true}
            by={post.name}
            date={post.created_at}
          >
            <div className="mx-3 my-2">
              <div className="text-justify mb-3">{post.content}</div>
              <div>Likes: {post.likes_count}</div>
              <div>comments: {post.comments_count}</div>
              <div className="mt-3">
                <CommentPost id={post.id} />
              </div>
            </div>
          </Card>
        </>
      )}
    </>
  );
};
export default SinglePost;
/**
 * comments_count: 12
content: "This is the sample Post. This is the sample Post. This is the sample Post. This is the sample Post. This is the sample Post.This is the sample Post.This is the sample Post.This is the sample Post.This is the sample Post.This is the sample Post.This is the sample Post.This is the sample Post.This is the sample Post.This is the sample Post.This is the sample Post.This is the sample Post.This is the sample Post.This is the sample Post.This is the sample Post.This is the sample Post."
created_at: "2020-11-06T20:13:44.000000Z"
id: 4
likes_count: 0
name: "Nishanthan"
status: "publish"
title: "3rd Post has been Updated"
type: "disabled"
updated_at: "2021-07-25T05:54:52.000000Z"
user_id: 1
 */
