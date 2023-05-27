"use client";

import React, { useState } from "react";
import { TabPanel } from "react-tabs";
import { Tab } from "react-tabs";
import { TabList } from "react-tabs";
import { Tabs } from "react-tabs";

import { useMutation, useQueryClient } from "react-query";
import { useAuthToken } from "../../contexts/authContext";
import featureApi from "../../utils/Api/features.api";
import { toast } from "react-hot-toast";

function AminityModal({ displayAM, toggleAM }) {
  const [featureName, setFeatureName] = useState("");
  const queryClient = useQueryClient();
  const token = useAuthToken();
  const { mutate } = useMutation({
    mutationFn: (data) => featureApi.addNewFeatures(data, token),
    onSuccess: () => {
      toggleAM();
      toast.success(`${featureName} added Successfully`);
      queryClient.invalidateQueries(["getAllFeatures"]);
      setFeatureName("");
    },
    onError: (error) => {
      const message =
        error?.response?.data?.message || `${featureName} alredy exist`;
      toast.error(message);
      setFeatureName("");
    },
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    mutate(formData);
  };
  const onChnageHandler = (e) => {
    setFeatureName(e.target.value);
  };

  return (
    <div
      className={
        displayAM ? "modal loginRegisterModal show" : "modal loginRegisterModal"
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
                toggleAM(!displayAM);
              }}
            >
              <i className="bx bx-x"></i>
            </button>

            <ul className="nav nav-tabs" id="myTab">
              <TabList>
                <Tab className="nav-item">
                  <a className="nav-link" id="login-tab">
                    Add Aminities
                  </a>
                </Tab>
              </TabList>
            </ul>

            <div className="tab-content" id="myTabContent">
              <TabPanel>
                <div className="tab-pane fade show active" id="login">
                  <div className="miran-login">
                    <span className="sub-title">
                      <span>Add Aminities</span>
                    </span>

                    <form onSubmit={handleSubmit}>
                      {/*..............................................................................................................................*/}

                      <div className="form-group">
                        <div className="form-group">
                          <input
                            type="text"
                            placeholder="Aminites Name"
                            value={featureName}
                            onChange={onChnageHandler}
                            name="feature_name"
                            required={true}
                            className="form-control"
                          />
                        </div>
                        <div className="form-group">
                          <input
                            type="file"
                            required={true}
                            name="feature_image"
                            accept="image/*"
                            placeholder="Aminites Name"
                            className="form-control"
                          />
                        </div>
                      </div>

                      <button type="submit">Add Aminities</button>
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

export default AminityModal;
