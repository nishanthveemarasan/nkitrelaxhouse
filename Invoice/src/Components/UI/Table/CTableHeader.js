import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import FormInputLabel from "../Input/FormInputLabel";
import FormSelect from "../Input/FormSelect";

const CTableHeader = (props) => {
  const [cRow, setCRow] = useState("10");
  const [search, setSearch] = useState("");
  const [typed, setTyped] = useState(false);
  useEffect(() => {
    let delayDebounceFn;
    if (typed) {
      delayDebounceFn = setTimeout(() => {
        props.searchHandler(search);
      }, 500);
    }
    return () => {
      clearTimeout(delayDebounceFn);
    };
  }, [search, typed]);
  const onValueChange = (e, type) => {
    const value = e.target.value;

    if (type === "row") {
      setCRow(value);
      const row = Number(value);
      props.rowChangeHandler(row);
    }
    if (type === "search") {
      setTyped(true);
      setSearch(value);
    }
  };
  return (
    <Container
      style={{ marginTop: "5%" }}
      className="d-flex justify-content-between"
      sm={12}
    >
      <div style={{ width: "8%" }}>
        <FormSelect
          label={false}
          value={cRow}
          change={(e) => onValueChange(e, "row")}
          options={["10", "20", "50", "100", "250"]}
          chooseOption={false}
        />
      </div>
      <div style={{ width: "30%" }}>
        <FormInputLabel
          type="text"
          readOnly={false}
          label={false}
          placeHolder="Search Items"
          value={search}
          change={(e) => onValueChange(e, "search")}
        />
      </div>
    </Container>
  );
};
export default CTableHeader;
