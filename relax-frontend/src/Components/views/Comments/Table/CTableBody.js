import CBadge from "src/Components/UI/Badge/CBadge";
import { getDate } from "src/custom-functions";

const CTableBody = (props) => {
  const body = props.body;
  //console.log(body);
  return (
    <>
      {body.map((row, i) => {
        return (
          <tr key={i}>
            <td>{row.id}</td>
            <td>{row.name}</td>
            <td>{row.title}</td>
            <td>view</td>
            <td>{row.content}</td>
            <td>{getDate(row.created_at)}</td>
            <td>{getStatus(row.status)}</td>
            <td>Action Available Soon</td>
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
