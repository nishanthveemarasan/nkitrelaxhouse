import CModal from "src/Components/UI/Modal/CModal";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import useFormValidate from "src/Hooks/input-validation";
import FormInputLabel from "src/Components/UI/Input/FormInputLabel";
import { userStoreAction } from "src/store/store";
const ContactDetailModal = () => {
  const mapStateToProps = (state) => {
    return {
      data: state.userStore.addressModal,
    };
  };
  const state = useSelector(mapStateToProps);
  const dispatch = useDispatch();
  const {
    inputValue: phone,
    setInputValue: setPhone,
    inputChangeHandler: phoneChangeHandler,
  } = useFormValidate();
  const {
    inputValue: city,
    setInputValue: setCity,
    inputChangeHandler: cityChangeHandler,
  } = useFormValidate();
  const {
    inputValue: zip,
    setInputValue: setZip,
    inputChangeHandler: zipChangeHandler,
  } = useFormValidate();
  const {
    inputValue: country,
    setInputValue: setCountry,
    inputChangeHandler: countryChangeHandler,
  } = useFormValidate();
  useEffect(() => {
    if (state.data.isDataChanged) {
      setPhone(state.data.details.phone);
      setCity(state.data.details.city);
      setZip(state.data.details.postal_code);
      setCountry(state.data.details.country);
    }
  }, [setPhone, setCity, setZip, setCountry, state.data]);
  const onModalCloseHandler = () => {
    dispatch(userStoreAction.closeAddressModal());
  };
  return (
    <CModal
      onShow={state.data.isModalOpen}
      heading="View the Contact Details"
      variant="primary"
      action={false}
      loading={false}
      onClose={onModalCloseHandler}
      width="20%"
    >
      <FormInputLabel
        type="text"
        readOnly={true}
        label="Phone Number"
        value={phone}
        change={phoneChangeHandler}
      />
      <FormInputLabel
        type="text"
        readOnly={true}
        label="City"
        value={city}
        change={cityChangeHandler}
      />
      <FormInputLabel
        type="text"
        readOnly={true}
        label="Postal Code"
        value={zip}
        change={zipChangeHandler}
      />
      <FormInputLabel
        type="text"
        readOnly={true}
        label="Country"
        value={country}
        change={countryChangeHandler}
      />
    </CModal>
  );
};
export default ContactDetailModal;
