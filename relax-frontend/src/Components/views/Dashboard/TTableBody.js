import { CBadge } from "@coreui/react";
const TTableBody = (props) => {
  return (
    <>
      {props.body.map((row, i) => {
        return (
          <tr key={i}>
            <td>{i + 1}</td>
            <td>{row.order_number}</td>
            <td>{row.itemname}</td>
            <td>{row.sellcount}</td>
            <td>{getStatus(row.sell_type)}</td>
          </tr>
        );
      })}
    </>
  );
};
export default TTableBody;

const getStatus = (value) => {
  switch (value) {
    case "received":
      return <CBadge color="danger">Received</CBadge>;
    case "processing":
      return <CBadge color="warning">Processing</CBadge>;
    case "packed":
      return <CBadge color="info">Packed</CBadge>;
    case "sent":
      return <CBadge color="success">Sent</CBadge>;
    default:
      return false;
  }
};
