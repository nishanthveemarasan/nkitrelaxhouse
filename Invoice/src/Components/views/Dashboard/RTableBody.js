const RTableBody = (props) => {
  return (
    <>
      {props.body.map((row, i) => {
        return (
          <tr key={i}>
            <td>{i + 1}</td>
            <td>{row.itemname}</td>
            <td>{row.total}</td>
          </tr>
        );
      })}
    </>
  );
};
export default RTableBody;
