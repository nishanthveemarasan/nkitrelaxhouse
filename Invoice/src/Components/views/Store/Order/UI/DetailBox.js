const DetailBox = (props) => {
  return (
    <div className={props.mainClass}>
      <div className={props.headingClass}>
        <h5>{props.heading}</h5>
      </div>
      {props.children}
    </div>
  );
};
export default DetailBox;
