import CBadge from "src/Components/UI/Badge/CBadge";
import CButton from "src/Components/UI/Button/Button";
import { getDate } from "src/custom-functions";
import { useSelector, useDispatch } from "react-redux";
import { getSinglePostData } from "src/store/post.slice";
import { useHistory } from "react-router";
const LTableBody = (props) => {
  const data = props.body;
  const mapStateToProps = (state) => {
    return {
      singlePostData: state.postStore.singlePostData,
    };
  };
  const state = useSelector(mapStateToProps);
  const history = useHistory();
  const dispatch = useDispatch();
  const onSubmitHandler = (id) => {
    dispatch(getSinglePostData(id, "post"));
    history.push("/admin/singlePost");
  };
  return (
    <>
      {data.data.map((row, i) => {
        console.log(row.posts);
        return (
          <tr key={i}>
            <td>{row.id}</td>
            <td>{row.posts.title}</td>
            <td>
              {
                <CButton
                  color={"primary"}
                  name={"View Post"}
                  type="button"
                  size="20%"
                  loading={state.singlePostData.isDataReceived}
                  click={onSubmitHandler.bind(null, row.posts.id)}
                />
              }
            </td>
            <td>{getDate(row.created_at)}</td>
            <td>{row.posts.comments}</td>
            <td>{row.posts.likes}</td>
            <td>
              {<CBadge color="primary" value={"You Liked"} size="100%" />}
            </td>
          </tr>
        );
      })}
    </>
  );
};
export default LTableBody;
