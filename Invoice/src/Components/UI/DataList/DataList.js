const DataList = (props) => {
  return (
    <datalist id={props.listName}>
      {props.body.map((item, i) => {
        return (
          <option value={item} key={i}>
            {item}
          </option>
        );
      })}
    </datalist>
  );
};
export default DataList;
