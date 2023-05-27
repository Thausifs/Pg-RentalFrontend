import { useRouter } from "next/router";
import React, { useState } from "react";

import AddAvailabilityModal from "../../../components/Modal/AddAvailAbilityMocal";
import ImageModal from "../../../components/Modal/ImageAddModal";
import Loading from "../../../components/Shared/Loading";
import useGetListingById from "../../../utils/Hooks/useGetListingById";
import CommentTable from "../../../components/AdminDashBoard/CommentTable";
import EditAvailabilityModal from "../../../components/Modal/EditAvailabilityModal";

const EditListing = () => {
  const [displayIM, toggleIM] = useState(false);
  const [diaplayEditModal, setdisplayEditModal] = useState(false);
  const [availabilityForModal, setAvailabilityForModal] = useState(undefined);
  const [displayAddvailabiltyModal, setDisplayAddAvailabiltyModal] =
    useState(false);
  const router = useRouter();

  const { id } = router.query;

  const { listing, isLoading } = useGetListingById(id);

  if (isLoading || !listing) {
    return <Loading />;
  }
  const toggleAddAvailabilityModal = () => {
    setDisplayAddAvailabiltyModal(!displayAddvailabiltyModal);
  };

  const { name, location, AvailAbility } = listing;
  return (
    <div className="p-3">
      <div className="">
        <div className="breadcrumb-area">
          <h1>Edit Listing</h1>
        </div>

        {/* Basic details */}

        <div className="add-listings-box">
          <h3>Basic Details</h3>

          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div className="form-group">
                <label>Name: {name}</label>
              </div>
            </div>

            <div className="col-lg-6 col-md-6">
              <div className="form-group">
                <label>Location {location.address} </label>
              </div>
            </div>
          </div>
        </div>

        {/* list of listings */}
        <div className="add-listings-box">
          <h3>lists</h3>

          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Type Of Room</th>
                <th scope="col">Number Of Availability</th>
                <th scope="col">Price</th>
                <th scope="col">Edit </th>
              </tr>
            </thead>

            <tbody>
              {AvailAbility.map((availability) => {
                const { id, roomType, numberOfOccupancies, price } =
                  availability;
                return (
                  <tr key={id}>
                    <th scope="row">1</th>
                    <td>{roomType.typeOfRoom}</td>
                    <td>{numberOfOccupancies}</td>
                    <td>{price}</td>
                    <td>
                      <button
                        type="button"
                        onClick={() => {
                          setdisplayEditModal(!diaplayEditModal);
                          setAvailabilityForModal(availability);
                        }}
                        className="btn btn-success"
                      >
                        <i className="fas fa-edit"></i>
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>

          <div className="add-listings-btn sub-btn">
            <button
              onClick={() => setDisplayAddAvailabiltyModal(true)}
              type="submit"
            >
              Add new Availability
            </button>
          </div>
        </div>

        <div className="flex-grow-1"></div>
      </div>
      <CommentTable residentId={id} />
      {/*..........................Image MODAL................................................. */}
      <ImageModal displayIM={displayIM} toggleIM={toggleIM} />
      {/*..........................Image MODAL................................................. */}
      <AddAvailabilityModal
        Availability={AvailAbility.reduce((res, ele) => {
          return res + " " + ele.roomType.typeOfRoom;
        }, "")}
        displayAM={displayAddvailabiltyModal}
        toggleAM={toggleAddAvailabilityModal}
        residentId={id}
      />
      <EditAvailabilityModal
        displayAM={diaplayEditModal}
        toggleAM={setdisplayEditModal}
        availability={availabilityForModal}
        residentId={id}
      />
    </div>
  );
};

export default EditListing;
