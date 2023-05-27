"use client";

import { Formik } from "formik";
import React, { useState } from "react";
import { useMutation } from "react-query";
import { TabPanel } from "react-tabs";
import { Tab } from "react-tabs";
import { TabList } from "react-tabs";
import { Tabs } from "react-tabs";
import scheduleVisitApi from "../../utils/Api/scheduleVisit.api";
import { toast } from "react-hot-toast";

function ScheduleModal({ displaySM, toggleSM, roomType, residentId }) {
  const { mutate } = useMutation({
    mutationFn: (data) => scheduleVisitApi.addNewScheduleVisit(data),
    onSuccess: () => {
      toast.success("You Added Successfuly a schedule visit");
      toggleSM();
    },
    onError: (err) => {
      console.log();
      toast.error(
        err?.response?.data?.message ?? "You Are Alrey schedule a visit"
      );
      toggleSM({
        user_name: "",
        phoneNo: "",
        date: new Date(),
        time: "12-3pm",
      });
    },
  });
  const handleSubmit = (values, { resetForm }) => {
    mutate({ ...values, roomType, residentId });
    resetForm({});
    toggleSM();
  };

  return (
    <div
      className={
        displaySM ? "modal loginRegisterModal show" : "modal loginRegisterModal"
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
                toggleSM(!displaySM);
              }}
            >
              <i className="bx bx-x"></i>
            </button>

            <ul className="nav nav-tabs" id="myTab">
              <TabList>
                <Tab className="nav-item">
                  <a className="nav-link" id="login-tab">
                    Schedule
                  </a>
                </Tab>
              </TabList>
            </ul>

            <div className="tab-content" id="myTabContent">
              <TabPanel>
                <div className="tab-pane fade show active" id="login">
                  <Formik
                    initialValues={{
                      user_name: "",
                      phoneNo: "",
                      date: new Date(),
                      time: "12-3pm",
                    }}
                    onSubmit={handleSubmit}
                  >
                    {({
                      handleSubmit,
                      handleChange,
                      values,
                      setFieldValue,
                    }) => (
                      <form onSubmit={handleSubmit}>
                        <div className="form-group">
                          <input
                            type="text"
                            minLength={6}
                            value={values.user_name}
                            onChange={handleChange}
                            required
                            name="user_name"
                            placeholder="Enter Your Name"
                            className="form-control"
                          />
                        </div>
                        <div className="form-group">
                          <input
                            type="text"
                            minLength={10}
                            maxLength={10}
                            value={values.phoneNo}
                            required
                            name="phoneNo"
                            onChange={handleChange}
                            placeholder="Enter Your Phone No"
                            className="form-control"
                          />
                        </div>

                        <div className="miran-login">
                          <span className="sub-title">
                            <span>Schedule A Visite On</span>
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
                                onChange={handleChange}
                                required
                                id="date"
                                className="form-control"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="miran-login">
                          <span className="sub-title">
                            <span>What is your preferred time slot?</span>
                          </span>

                          <div className="form-group">
                            <div
                              className="btn-group"
                              role="group"
                              aria-label="Basic radio toggle button group"
                            >
                              {["9-12pm", "12-3pm", "3-6pm", "6-9pm"].map(
                                (value) => (
                                  <>
                                    <input
                                      type="radio"
                                      className="btn-check"
                                      name="time"
                                      id={value}
                                      value={value}
                                      required
                                      key={value}
                                      onChange={(e) => {
                                        setFieldValue("time", e.target.value);
                                      }}
                                    />
                                    <label
                                      className="btn btn-outline-primary"
                                      htmlFor={value}
                                    >
                                      {value}
                                    </label>
                                  </>
                                )
                              )}
                            </div>
                          </div>

                          <button className="btn btn-primary" type="submit">
                            Schedule A Call
                          </button>
                        </div>
                      </form>
                    )}
                  </Formik>
                </div>
              </TabPanel>
            </div>
          </Tabs>
        </div>
      </div>
    </div>
  );
}

export default ScheduleModal;
