"use client";

import React from "react";
import { Tabs } from "react-tabs";
import * as yup from "yup";

import { useMutation, useQueryClient } from "react-query";
import { useAuthToken } from "../../contexts/authContext";
import { toast } from "react-hot-toast";
import useRoomTypes from "../../utils/Hooks/useRoomTypes";
import { Formik } from "formik";
import availabilityApi from "../../utils/Api/availability.api";

const addAvailAbilityFormValidation = yup.object().shape({
  roomTypeId: yup
    .string()
    .notOneOf(["Type Of Room City"])
    .required("Select A select room Id Please"),
  price: yup.number().required("Enter a price"),
  numberOfOccupancies: yup.number().required("Enter Number of occupancies"),
});

function AddAvailabilityModal({
  displayAM,
  toggleAM,
  Availability,
  residentId,
}) {
  const { roomTypes } = useRoomTypes();
  console.log(residentId);

  const queryClient = useQueryClient();
  const token = useAuthToken();
  const { mutate } = useMutation({
    mutationFn: (data) => availabilityApi.addNewAvailability(data, token),
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
      ...values,
      residentId,
      price: Number(values.price),
      numberOfOccupancies: Number(values.numberOfOccupancies),
    });
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

            <h5>Add Availability </h5>

            <div className="tab-content" id="myTabContent">
              <div className="tab-pane fade show active" id="login">
                <div className="miran-login">
                  <span className="sub-title">
                    <span>Add Availability</span>
                  </span>

                  <Formik
                    initialValues={{
                      roomTypeId: "Type Of Room City",
                      price: undefined,
                      numberOfOccupancies: undefined,
                    }}
                    onSubmit={handleOnSubmit}
                    validationSchema={addAvailAbilityFormValidation}
                  >
                    {({ handleSubmit, handleChange, values, errors }) => (
                      <form onSubmit={handleSubmit}>
                        <div className="form-group">
                          <div className="form-group">
                            <label
                              className={`${
                                errors.roomTypeId ? "pb-3 text-danger" : "pb-3"
                              }`}
                            >
                              {errors.roomTypeId ?? "Select Room Type"}
                            </label>
                            <select
                              name="roomTypeId"
                              className="dashbaord-category-select"
                              required={true}
                              value={values.roomTypeId}
                              onChange={handleChange}
                            >
                              <option value="Type Of Room City">
                                Select Type Of Room
                              </option>
                              {roomTypes.map(({ id, typeOfRoom }) => {
                                if (!Availability.includes(typeOfRoom))
                                  return (
                                    <option value={id} key={id}>
                                      {typeOfRoom}
                                    </option>
                                  );
                              })}
                            </select>
                          </div>
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
                              type="text"
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

                        <button type="submit">Add Aminities</button>
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

export default AddAvailabilityModal;
