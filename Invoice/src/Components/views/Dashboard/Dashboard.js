import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { CRow, CCol } from "@coreui/react";
import DWidget from "src/Components/UI/DWidget";
import { getWidgetData } from "src/store/dashboard-slice";
import Loader from "src/Components/UI/Loader/Loader";
import _widget from "src/Components/UI/Array/_widget";
import Card from "src/Components/UI/Card/Card";
import CTable from "src/Components/UI/Table/CTable";
import RTableBody from "./RTableBody";
import TTableBody from "./TTableBody";
const Dashboard = () => {
  const mapStateToProps = (state) => {
    return {
      widget: state.dashboardStore.widget,
      isDataChanged: state.dashboardStore.isDataChanged,
      topOrders: state.dashboardStore.topOrders,
      recentOrders: state.dashboardStore.recentOrders,
    };
  };
  const state = useSelector(mapStateToProps);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getWidgetData());
  }, [dispatch]);

  const widget =
    state.isDataChanged &&
    state.widget.map((item, i) => {
      return (
        <CCol sm="12" md="3" key={i}>
          <DWidget
            value={item[_widget[i].type]}
            text={_widget[i].text}
            color={_widget[i].color}
            icon={_widget[i].icon}
          />
        </CCol>
      );
    });

  return (
    <>
      {!state.isDataChanged && <Loader />}

      <CRow>{widget}</CRow>
      {state.isDataChanged && (
        <CRow>
          <CCol sm="12" md="12" lg="6">
            <Card header="Top 10 Selling Items">
              <CTable header={["#", "Product Name", "Total Sell Count"]}>
                <RTableBody body={state.topOrders} />
              </CTable>
            </Card>
          </CCol>
          <CCol sm="12" md="12" lg="6">
            <Card header="Most Recent Orders">
              <CTable
                header={["#", "Order ID", "Product", "Quantity", "Status"]}
              >
                <TTableBody body={state.recentOrders} />
              </CTable>
            </Card>
          </CCol>
        </CRow>
      )}
    </>
  );
};
export default Dashboard;
