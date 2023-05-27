"use client";

import React from "react";
import { Tabs } from "react-tabs";
import * as yup from "yup";

import { useMutation, useQueryClient } from "react-query";
import { useAuthToken } from "../../contexts/authContext";
import { toast } from "react-hot-toast";
import { Formik } from "formik";
import availabilityApi from "../../utils/Api/availability.api";

const addAvailAbilityFormValidation = yup.object().shape({
  price: yup.number().required("Enter a price"),
  numberOfOccupancies: yup.number().required("Enter Number of occupancies"),
});

function EditAvailabilityModal({
  displayAM,
  toggleAM,
  availability,
  residentId,
}) {
  console.log(availability);
  const queryClient = useQueryClient();
  const token = useAuthToken();
  const { mutate } = useMutation({
    mutationKey: "editAvailability",
    mutationFn: (data) =>
      availabilityApi.updateAvailability(data, token, availability.uid),
    onSuccess: () => {
      toggleAM();
      toast.success(`New Availability added Successfully`);
      queryClient.invalidateQueries([`listingDetailById ${residentId}`]);
    },
    onError: (error) => {
      const message =
        error?.response?.data?.message || `${featureName} alredy exist`;
      toast.error(message);
      setFeatureName("");
    },
  });
  const handleOnSubmit = (values) => {
    mutate({
      numberOfOccupancies: Number(values.numberOfOccupancies),
      price: Number(values.price),
    });
  };
  if (!availability) {
    return (
      <div
        className={
          displayAM
            ? "modal loginRegisterModal show"
            : "modal loginRegisterModal"
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

              <h5>No Availability Found </h5>
            </Tabs>
          </div>
        </div>
      </div>
    );
  }

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

            <h5>Edit Availability </h5>

            <div className="tab-content" id="myTabContent">
              <div className="tab-pane fade show active" id="login">
                <div className="miran-login">
                  <span className="sub-title">
                    <span>
                      Edit Availability for {availability.roomType.typeOfRoom}
                    </span>
                  </span>

                  <Formik
                    initialValues={{
                      price: availability.price,
                      numberOfOccupancies: availability.numberOfOccupancies,
                    }}
                    onSubmit={handleOnSubmit}
                    validationSchema={addAvailAbilityFormValidation}
                  >
                    {({ handleSubmit, handleChange, values, errors }) => (
                      <form onSubmit={handleSubmit}>
                        <div className="form-group">
                          <div className="form-group"></div>
                          <div className="form-group">
                            <label
                              className={`${
                                errors.numberOfOccupancies
                                  ? "pb-3 text-danger"
                                  : "pb-3"
                              }`}
                            >
                              {errors.numberOfOccupancies ??
                                "Enter Number Of Occupancy"}
                            </label>
                            <input
                              type="number"
                              placeholder="Enter Number Of Availability"
                              onChange={handleChange}
                              name="numberOfOccupancies"
                              value={values.numberOfOccupancies}
                              required={true}
                              className="form-control"
                            />
                          </div>
                          <div className="form-group">
                            <label
                              className={`${
                                errors.price ? "pb-3 text-danger" : "pb-3"
                              }`}
                            >
                              {errors.price ?? "Enter price"}
                            </label>
                            <input
                              type="text"
                              placeholder="Enter The price"
                              onChange={handleChange}
                              value={values.price}
                              name="price"
                              required={true}
                              className="form-control"
                            />
                          </div>
                        </div>

                        <button type="submit">Save New Availability</button>
                      </form>
                    )}
                  </Formik>
                </div>
              </div>
            </div>
          </Tabs>
        </div>
      </div>
    </div>
  );
}

export default EditAvailabilityModal;
