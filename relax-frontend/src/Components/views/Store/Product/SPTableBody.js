import { CBadge } from "@coreui/react";
import ActionButton from "src/Components/UI/ActionButton/ActionButton";
import classes from "./Product.module.css";
const SPTableBody = (props) => {
  const data = props.body;
  return (
    <>
      {props.body.map((row, i) => {
        return (
          <tr key={i} className="text-center">
            <td>{row.id}</td>
            <td>
              <img src={row.image_url} style={{ width: "20%" }} />
            </td>
            <td>{row.name}</td>
            <td>{`$${row.price}`}</td>
            <td>{row.offer_price ? `$${row.offer_price}` : ""}</td>
            <td>{convertArray(row.color, "primary")}</td>
            <td>{convertArray(row.height, "warning")}</td>
            <td>{getStatus(row.status)}</td>
            <td>
              <ActionButton
                value="Edit Product"
                class={classes.view}
                name="cil-align-center"
                action={() => props.action(i)}
              />
            </td>
          </tr>
        );
      })}
    </>
  );
};
export default SPTableBody;
const getStatus = (value) => {
  switch (value) {
    case "active":
      return <CBadge color="success">Active</CBadge>;
    case "draft":
      return <CBadge color="danger">Draft</CBadge>;
    default:
      return false;
  }
};

const convertArray = (str, color) => {
  const arr = str.split(",");
  const value = arr.map((el, i) => {
    return (
      <CBadge color={color} key={i} className="mr-2 p-2">
        {el}
      </CBadge>
    );
  });
  return value;
};
