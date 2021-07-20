import { getDate } from "src/custom-functions";
import { getWarning } from "src/service/customService";

const ItemTableBody = (props) => {
  // console.log(props.data.data);
  return (
    <>
      {props.data.data.map((row, i) => {
        return (
          <tr key={i} className={getWarning(row.count)}>
            <td>{row.id}</td>
            <td>{row.itemname}</td>
            <td>{row.itemcode}</td>
            <td>{row.count}</td>
            <td>{getDate(row.updated_at)}</td>
          </tr>
        );
      })}
    </>
  );
};
export default ItemTableBody;
