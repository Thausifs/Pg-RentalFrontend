
"use client";

import React, { useEffect, useState } from "react";
import { TabPanel } from "react-tabs";
import { Tab } from "react-tabs";
import { TabList } from "react-tabs";
import { Tabs } from "react-tabs";

import { toast } from "react-hot-toast";
import { useAuthToken } from "../../contexts/authContext";
import { useMutation, useQueryClient } from "react-query";
import cityApi from "../../utils/Api/city.api";

function AddUserModal({ displayAUM, toggleAUM }) {

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChnageHandler = (e) => {
    setCityName(e.target.value);
  };

  return (
    <div
      className={
        displayAUM ? "modal loginRegisterModal show" : "modal loginRegisterModal"
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
                toggleAUM(!displayAUM);
              }}
            >
              <i className="bx bx-x"></i>
            </button>

            <ul className="nav nav-tabs" id="myTab">
              <TabList>
                <Tab className="nav-item">
                  <a className="nav-link" id="login-tab">
                    Add Users
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

                        <form onSubmit={(e) => {handleSubmit(e);}}>
                            <div className="form-group">
                                <input
                                type="text"
                                placeholder="Name"
                                className="form-control"
                                />
                            </div>

                            <span className="sub-title">
                                <span>phone number</span>
                            </span>

                            <div className="form-group">
                                <input
                                type="Number"
                                placeholder="Phone number"
                                className="form-control"
                                />
                            </div>

                            <span className="sub-title">
                                <span>Type</span>
                            </span>

                            <form onSubmit={(e) => {handleSubmit(e);}}>
                                <div className="form-group">
                                    <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
                                        <input type="radio" className="btn-check" name="btnradio" id="btnradio1" autocomplete="off"/>
                                        <label className="btn btn-outline-primary" htmlFor="btnradio1">User</label>

                                        <input type="radio" className="btn-check" name="btnradio" id="btnradio2" autocomplete="off"/>
                                        <label className="btn btn-outline-primary" htmlFor="btnradio2">Admin</label>
                                    </div>
                                </div>
                            </form>

                            <button
                            type="submit"
                            onClick={() => {togglevM(!displayvM);}}>
                                Add User
                            </button>
                        </form>
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

export default AddUserModal;
