import { Formik } from "formik";
import React from "react";
import toast from "react-hot-toast";
import useRazorpay from "react-razorpay";
import { TabPanel } from "react-tabs";
import { Tab } from "react-tabs";
import { TabList } from "react-tabs";
import { Tabs } from "react-tabs";
import advanceBookingApi from "../../utils/Api/advanceBooking.api";

function BookRoomModal({ displayVM, toggleVM, roomType, residentId }) {
  const Razorpay = useRazorpay();

  const handleSubmitHandler = async (values) => {
    try {
      const { data: order, advanceBookingId } =
        await advanceBookingApi.addNewAdanceBooking({
          ...values,
          residentId,
          roomTypeName: roomType,
        });
      toggleVM(!displayVM);
      const options = {
        key: "rzp_test_ftb5flv3icVffB",
        amount: "3000",
        currency: "INR",
        name: "Acme Corp",
        description: "Test Transaction",
        image: "https://example.com/your_logo",
        order_id: order.id,
        handler: async (res) => {
          try {
            await advanceBookingApi.updateAdvanceBooing(res, advanceBookingId);
            toast.success("You have successfully added a booking");
          } catch (error) {
            console.log(error);
          }
        },
        prefill: {
          name: "Piyush Garg",
          email: "youremail@example.com",
          contact: "9999999999",
        },
        notes: {
          address: "Razorpay Corporate Office",
        },
        theme: {
          color: "#3399cc",
        },
      };

      const rzpay = new Razorpay(options);
      rzpay.open();
    } catch (error) {
      toast.error(
        error?.response?.data?.message || "You Already done a booking"
      );
    }
  };

  return (
    <div
      className={
        displayVM ? "modal loginRegisterModal show" : "modal loginRegisterModal"
      }
      id="loginRegisterModal"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <Tabs>
            <button
              type="button"
              className="close"
              onClick={() => {
                toggleVM(!displayVM);
              }}
            >
              <i className="bx bx-x"></i>
            </button>

            <ul className="nav nav-tabs" id="myTab">
              <TabList>
                <Tab className="nav-item">
                  <a className="nav-link" id="login-tab">
                    Book Now
                  </a>
                </Tab>
              </TabList>
            </ul>

            <div className="tab-content" id="myTabContent">
              <TabPanel>
                <div className="tab-pane fade show active" id="login">
                  <div className="miran-login">
                    <span className="sub-title">
                      <span>Name</span>
                    </span>

                    <Formik
                      initialValues={{
                        user_name: "",
                        phoneNo: "",
                        date: Date.now(),
                      }}
                      onSubmit={handleSubmitHandler}
                    >
                      {({ values, handleChange, handleSubmit }) => (
                        <form onSubmit={handleSubmit}>
                          <div className="form-group">
                            <input
                              type="text"
                              name="user_name"
                              value={values.user_name}
                              required
                              onChange={handleChange}
                              placeholder="name"
                              className="form-control"
                            />
                          </div>

                          <span className="sub-title">
                            <span>phone number</span>
                          </span>

                          <div className="form-group">
                            <input
                              type="text"
                              name="phoneNo"
                              value={values.phoneNo}
                              onChange={handleChange}
                              required
                              placeholder="Phone number"
                              className="form-control"
                            />
                          </div>

                          <span className="sub-title">
                            <span>Advance Book From</span>
                          </span>

                          <div className="form-group">
                            <div
                              id="date-picker-example"
                              className="md-form md-outline input-with-post-icon datepicker"
                            >
                              <input
                                placeholder="Select date"
                                type="date"
                                value={values.date}
                                required
                                name="date"
                                onChange={handleChange}
                                id="example"
                                className="form-control"
                              />
                            </div>
                          </div>

                          <button type="submit">Pay Now</button>
                        </form>
                      )}
                    </Formik>
                  </div>
                </div>
              </TabPanel>
            </div>
          </Tabs>
        </div>
      </div>
    </div>
  );
}

export default BookRoomModal;
