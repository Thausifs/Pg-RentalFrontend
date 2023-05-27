"use client";

import React from "react";
import Link from "next/link";

import Loading from "../Shared/Loading";
import useListingForAdmin from "../../utils/Hooks/useAllListingForAdmin";
import { useQueryClient } from "react-query";
import { useAuthToken } from "../../contexts/authContext";
import { useMutation } from "react-query";
import listingApi from "../../utils/Api/listing.api";
import toast from "react-hot-toast";

const DashboardListingArea = ({ listing, isLoading,deleteListingById }) => {


  return (
    <>
      <section className="listing-area">
        {/* .....................pre Loader............................ */}
        {/* <div className="preloader">
            <i class="fa fa-spinner fa-spin"></i>
        </div> */}

        <div className="tab-content" id="myTabContent">
          <div className="" id="active-listing">
            {isLoading ? (
              <Loading />
            ) : (
              <div className="row">
                {listing.map(({ id, commonAreaPhotos, name }) => (
                  <div key={id} className="col-xl-4 col-lg-6 col-md-6">
                    <div className="single-listings-box">
                      <div className="listings-image">
                        <img
                          src={`${
                            commonAreaPhotos.length === 0
                              ? "/images/listings/listings1.jpg"
                              : commonAreaPhotos[0].path
                          }`}
                          alt="image"
                        />
                        <Link href={`/listing/${id}`}>
                          <a className="link-btn"></a>
                        </Link>
                      </div>

                      <div className="listings-content">
                        <ul className="listings-meta">
                          <li>
                            <a href="#">
                              <i className="flaticon-furniture-and-household"></i>{" "}
                              Restaurant
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="flaticon-pin"></i> New York, USA
                            </a>
                          </li>
                        </ul>
                        <h3>
                          <Link href="/single-listings">
                            <a>{name}</a>
                          </Link>
                        </h3>
                        <div className="d-flex align-items-center justify-content-between">
                          <div className="rating">
                            <i className="bx bxs-star"></i>
                            <i className="bx bxs-star"></i>
                            <i className="bx bxs-star"></i>
                            <i className="bx bxs-star"></i>
                            <i className="bx bxs-star"></i>
                            <span className="count">(45)</span>
                          </div>
                        </div>
                      </div>

                      <div className="listings-footer">
                        <div className="d-flex justify-content-between align-items-center">
                          <Link
                            href={`/admin/edit-listing/${id}`}
                            className="default-btn"
                          >
                            Edit
                          </Link>

                          {/* <a href={`/admin/edit-listing/${id}`} className="default-btn">
                            Edit
                          </a> */}

                          <button
                            onClick={() => deleteListingById(id)}
                            className="default-btn"
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default DashboardListingArea;
