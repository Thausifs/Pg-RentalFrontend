
import Link from "next/link";
import Image from "next/image";

import ImageAddModal from "../../../components/Modal/ImageAddModal";

import React, { useState,useEffect } from "react";
import { useDropzone } from "react-dropzone";
import { Formik } from "formik";
import * as yup from "yup";

import useCities from "../../../utils/Hooks/useCities";
import useFacilites from "../../../utils/Hooks/useFacilities";
import DashboardNavbar from "../../../components/Dashboard/DashboardNavbar";
import { useMutation } from "react-query";
import listingApi from "../../../utils/Api/listing.api";
import { useAuthToken } from "../../../contexts/authContext";

import Loading from "../../../components/Shared/Loading";

const AddListing = () => {
  const [displayIM, toggleIM] = useState(false);
  
  const [files, setFiles] = useState([]);
  const { getRootProps, getInputProps } = useDropzone({
    accept: 'image/*',
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
  });

  const thumbs = files.map((file) => (
    <div key={file.name} className='drop-gallery-thumb'>
      <img src={file.preview} />
    </div>
  ));

  useEffect(() => () => {
      // Make sure to revoke the data uris to avoid memory leaks
      files.forEach((file) => URL.revokeObjectURL(file.preview));
    },
    [files]
  );

  return (
    <>
      <DashboardNavbar />

      <div className='main-content d-flex flex-column'>

        <div className='breadcrumb-area'>
          <h1>Edit Listing</h1>
        </div>

        {/* Basic details */}

        <div className="add-listings-box">
          <h3>Basic Details</h3>

          <div className="row">

            <div className="col-lg-6 col-md-6">
              <div className="form-group">
                <label>
                  <i className="bx bx-menu-alt-left"></i> Name
                </label>
                <input
                  readOnly
                  type="text"
                  value={"Xyz"}
                  name="location.state"
                  className="form-control"
                />
              </div>
            </div>

            <div className="col-lg-6 col-md-6">
              <div className="form-group">
                <label>
                  <i className="bx bx-menu-alt-left"></i>Location
                </label>
                <input
                  readOnly
                  type="text"
                  value={"Kolkata"}
                  name="location.state"
                  className="form-control"
                />
              </div>
            </div>

          </div>
        </div>

        {/* list of listings */}
        <div className="add-listings-box">
          <h3>lists</h3>

          <table class="table table-striped">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Availability</th>
                <th scope="col">occupancy</th>
                <th scope="col">Edit </th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td><button type="button" class="btn btn-success"><i class="fas fa-edit"></i></button></td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
                <td><button type="button" class="btn btn-success"><i class="fas fa-edit"></i></button></td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
                <td><button type="button" class="btn btn-success"><i class="fas fa-edit"></i></button></td>
              </tr>
            </tbody>
          </table>

          <div className='add-listings-btn sub-btn'>
            <button type='submit'>Availability</button>
          </div>

        </div>

        {/* image show section */}
        <div className="add-listings-box">
          
          <h3>images</h3>
          
          <div className="gallery-flex">

              <div  className='drop-gallery-thumb'>
                <div className="close">X</div>
                <img src="https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg" alt="noimg" />
            </div>

            <div  className='drop-gallery-thumb'>
                <div className="close">X</div>
                <img src="https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg" alt="noimg" />
            </div>

          </div>

          <div className='add-listings-btn sub-btn'>
            <button type='submit' onClick={()=>{toggleIM(!displayIM)}}>Add Images</button>
          </div>
        </div>

        <div className='add-listings-btn'>
          <button type='submit'>Update Listings</button>
        </div>

        <div className='flex-grow-1'></div>

      </div>

{/*..........................Image MODAL................................................. */}
      <ImageAddModal displayIM={displayIM} toggleIM={toggleIM} />
    </>
  );
};

export default AddListing;
