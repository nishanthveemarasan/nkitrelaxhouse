import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import CTable from "src/Components/Table/CTable";
import { getProviderData } from "src/store/provider-slice";
import TableBody from "./TableBody";
const IpgProvider = () => {
  const mapStateToProps = (state) => {
    return {
      providerData: state.providerStore.providerData,
    };
  };
  const state = useSelector(mapStateToProps);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProviderData());
  }, [dispatch]);
  return (
    <>
      <CTable
        header={[
          "ID",
          "Name",
          "Gateway Code",
          "Status",
          "Created_at",
          "Action",
        ]}
      >
        {state.providerData?.data && (
          <TableBody data={state.providerData.data} />
        )}
      </CTable>
    </>
  );
};

export default IpgProvider;
