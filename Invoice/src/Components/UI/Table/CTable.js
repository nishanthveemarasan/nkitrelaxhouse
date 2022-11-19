import Table from "react-bootstrap/Table";
const CTable = (props) => {
  const Header = props.header.map((th, i) => {
    return <th key={i}>{th}</th>;
  });
  return (
    <>
      <Table responsive="md" striped bordered hover>
        <thead className="thead-light">
          <tr>{Header}</tr>
        </thead>
        <tbody>{props.children}</tbody>
      </Table>
    </>
  );
};
export default CTable;
