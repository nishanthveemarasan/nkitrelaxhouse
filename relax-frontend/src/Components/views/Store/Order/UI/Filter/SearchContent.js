import { useSelector } from "react-redux";
const CONTENT = ["abcdcdcdc", "dfdfsdfsf", "dfdsfsdf"];

const SearchContent = (props) => {
  const mapStateToProps = (state) => {
    return {
      data: state.shopStore.orderIdArray.data,
    };
  };
  const state = useSelector(mapStateToProps);
  return (
    <>
      {state.data.length > 0 &&
        state.data.map((el, index) => {
          return (
            <li key={index} onClick={() => props.idChange(el.order_id)}>
              {el.order_id}
            </li>
          );
        })}
    </>
  );
};
export default SearchContent;
