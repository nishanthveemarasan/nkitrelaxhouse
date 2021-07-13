const Pagination = (props) => {
  const to = props.body.to;
  const total = props.body.total;
  const links = props.body.links;

  const pageChangeHandler = (url) => {
    props.change(url);
  };
  return (
    <nav className="d-flex justify-content-end">
      <div className="align-self-center mr-3 font-weight-bold">
        <span>{`${to} of ${total}`}</span>
      </div>
      <ul className="pagination">
        {links.map((link, i) => {
          return (
            <li key={i} className={`page-item ${link.active && "active"}`}>
              {i === 0 && (
                <span
                  className="page-link"
                  onClick={pageChangeHandler.bind(null, link.url)}
                >
                  &laquo;
                </span>
              )}
              {i === links.length - 1 && (
                <span
                  className="page-link"
                  onClick={pageChangeHandler.bind(null, link.url)}
                >
                  &raquo;
                </span>
              )}
              {i !== 0 && i !== links.length - 1 && (
                <span
                  className="page-link"
                  onClick={pageChangeHandler.bind(null, link.url)}
                >
                  {link.label}
                </span>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
export default Pagination;
