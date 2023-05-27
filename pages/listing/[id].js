import React, { useState } from "react";
import { useRouter } from "next/router";

import Footer from "../../components/_App/Footer";
import Accordion from "../../components/Accordion/Accordion";
import useGetListingById from "../../utils/Hooks/useGetListingById";

import Loading from "../../components/Shared/Loading";

import ScheduleModal from "../../components/Modal/ScheduleModal";
import VisitModal from "../../components/Modal/VisitModal";
import { useAuthToken } from "../../contexts/authContext";
import useCommentsByResidentId from "../../utils/Hooks/useCommentsByResidentId";
import { useMutation, useQueryClient } from "react-query";
import commentApi from "../../utils/Api/comment.api";
import { toast } from "react-hot-toast";

const ListingDetails = () => {
  const router = useRouter();
  const { id, roomType } = router.query;
  const token = useAuthToken();
  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: (data) => commentApi.addNewComment(data, id, token),
    mutationKey: "addNewComment",
    onSuccess: (data) => {
      toast.success("Comment Added Successfully");
      queryClient.invalidateQueries([`commentDataByResidentId ${id}`]);
    },
    onError: () => {
      toast.error("You alredy commented,you can't commnet right now");
    },
  });
  const [content, setContent] = useState("");
  const { listing, isLoading } = useGetListingById(id);
  const { comments, isLoading: isLoading2 } = useCommentsByResidentId(id);
  const [displaySM, toggleSM] = useState(false);
  const [displayVM, toggleVM] = useState(false);

  const addCommentHandler = (e) => {
    e.preventDefault();
    mutate({ content });
    setContent("");
  };

  const questionsAnswers = [
    {
      question: "Monday",
      answer:
        "You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.",
    },
    {
      question: "Tuesday",
      answer:
        "No more than 2GB. All files in your account must fit your allotted storage space.",
    },
    {
      question: "Wednesday",
      answer: `Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you.`,
    },
    {
      question: "Thrushday",
      answer: `Yes! Send us a message and we’ll process your request no questions asked.`,
    },
    {
      question: "friday",
      answer: `Chat and email support is available 24/7. Phone lines are open during normal business hours.`,
    },
    {
      question: "Saturday",
      answer: `Chat and email support is available 24/7. Phone lines are open during normal business hours.`,
    },
    {
      question: "Sunday",
      answer: `Chat and email support is available 24/7. Phone lines are open during normal business hours.`,
    },
  ];

  if (!listing && isLoading2) {
    return <Loading />;
  }

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <section className="listings-details-area pb-70">
          <div className="listings-details-image">
            <img
              src={
                listing?.coverImage?.length === 0
                  ? "/images/listings-details.jpg"
                  : listing.coverImage[0].path
              }
              alt="image"
            />

            <div className="container">
              <div className="container">
                <div className="listings-details-content">
                  <h3>{listing?.name}</h3>
                </div>
              </div>
            </div>

            <div className="container-fluid">
              <ul className="share-save">
                <li>
                  <div className="share">
                    <i className="bx bx-share-alt"></i> Share
                  </div>

                  <div className="social">
                    <a href="#" target="_blank">
                      <i className="bx bxl-facebook"></i>
                    </a>
                    <a href="#" target="_blank">
                      <i className="bx bxl-pinterest"></i>
                    </a>
                    <a href="#" target="_blank">
                      <i className="bx bxl-twitter"></i>
                    </a>
                    <a href="#" target="_blank">
                      <i className="bx bxl-linkedin"></i>
                    </a>
                    <a href="#" target="_blank">
                      <i className="bx bxl-whatsapp"></i>
                    </a>
                  </div>
                </li>

                <li>
                  <a href="#">
                    <i className="bx bx-heart"></i> Save
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-md-12">
                <div className="listings-details-desc">
                  <h3>{listing.name}</h3>
                  <p>{listing.description}</p>
                  <h3>Amenities</h3>
                  <ul className="amenities-list">
                    {listing?.FeatureResident?.map(({ id, feature }) => {
                      return (
                        <li key={id}>
                          <span>
                            <i className="bx bx-check"></i>{" "}
                            {feature?.feature_name}
                          </span>
                        </li>
                      );
                    })}
                  </ul>

                  <h3>Cover Image</h3>
                  <div id="gallery">
                    <div className="row justify-content-center">
                      {listing?.coverImage?.map(({ id, path }) => {
                        return (
                          <div key={id} className="col-lg-4 col-md-6">
                            <div className="single-image-bpx">
                              <img src={path} alt="image" />
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  <h3>Common Area Images</h3>
                  <div id="gallery">
                    <div className="row justify-content-center">
                      {listing?.dinningAreaPhotos?.map(({ id, path }) => {
                        return (
                          <div key={id} className="col-lg-4 col-md-6">
                            <div className="single-image-bpx">
                              <img src={path} alt="image" />
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  <h3>Dinning Area Images</h3>
                  <div id="gallery">
                    <div className="row justify-content-center">
                      {listing?.commonAreaPhotos?.map(({ id, path }) => {
                        return (
                          <div key={id} className="col-lg-4 col-md-6">
                            <div className="single-image-bpx">
                              <img src={path} alt="image" />
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  <h3>Rooms Images</h3>
                  <div id="gallery">
                    <div className="row justify-content-center">
                      {listing?.roomPhotos?.map(({ id, path }) => {
                        return (
                          <div key={id} className="col-lg-4 col-md-6">
                            <div className="single-image-bpx">
                              <img src={path} alt="image" />
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  <h3>Food menu</h3>

                  <div className="fcontainer">
                    <div className="component">
                      <div className="illustration">
                        <img
                          src="../images/accordion/illustration-box-desktop.svg"
                          alt="illustration with box"
                          className="illustration__box"
                        />

                        <img
                          className="illustration__woman-desktop"
                          src="../images/accordion/illustration-woman-online-desktop.svg"
                          alt="illustration with woman"
                        />
                        <img
                          className="illustration__woman-mobile"
                          src="../images/accordion/illustration-woman-online-mobile.svg"
                          alt="illustration with woman"
                        />
                      </div>
                      <Accordion questionsAnswers={questionsAnswers} />
                    </div>
                  </div>

                  <h3>Reviews</h3>

                  {token && (
                    <div className="write-a-review">
                      <h4>Tell people what you think.</h4>
                      <p>
                        Help others by sharing your experience with this
                        business.
                      </p>
                      <a href="#reviewButton" className="default-btn">
                        Write A Review
                      </a>
                    </div>
                  )}

                  <div id="review">
                    <div className="listings-review-comments">
                      {comments?.map((comment) => (
                        <div key={comment.id} className="user-review">
                          <div className="row m-0">
                            <div className="col-lg-4 col-md-4 p-0">
                              <div className="user">
                                <div className="d-flex">
                                  <img src="/images/user3.jpg" alt="image" />
                                  <div className="title">
                                    <h4>{comment.user.name}</h4>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="col-lg-8 col-md-8 p-0">
                              <div className="comments">
                                <p>{comment.content}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div id="add-review">
                    {token && (
                      <div id="reviewButton" className="review-form-wrapper">
                        <h3>Add A Review</h3>
                        <p className="comment-notes">
                          // // Your address will not be published. Required //
                          // fields are marked <span>*</span>
                        </p>
                        <form onSubmit={addCommentHandler}>
                          <div className="row">
                            <div className="col-lg-12 col-md-12">
                              <div className="form-group">
                                <textarea
                                  value={content}
                                  onChange={(e) => {
                                    setContent(e.target.value);
                                  }}
                                  placeholder="Your review"
                                  className="form-control"
                                  cols="30"
                                  rows="6"
                                ></textarea>
                              </div>
                            </div>
                            <div className="col-lg-12 col-md-12">
                              <button type="submit">Submit</button>
                            </div>
                          </div>
                        </form>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-12">
                <div className="listings-sidebar">
                  {roomType ? (
                    <div className="listings-widget book_listings">
                      <h3>Booking Online</h3>

                      <button
                        className="default-btn"
                        style={{ width: "100%" }}
                        onClick={() => {
                          toggleSM(!displaySM);
                        }}
                      >
                        Schedule a call{" "}
                      </button>

                      <button
                        style={{ width: "100%" }}
                        className="default-btn"
                        onClick={() => {
                          toggleVM(!displayVM);
                        }}
                      >
                        Book Now
                      </button>
                    </div>
                  ) : (
                    <></>
                  )}

                  <div className="listings-widget listings_contact_details">
                    <iframe
                      src={listing?.googleMapUrl}
                      referrerPolicy="no-referrer-when-downgrade"
                      style={{ width: "100%", height: "500px" }}
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      <Footer bgColor="bg-f5f5f5" />

      {/* ....................................Schedule Modal.............................. */}

      <ScheduleModal
        roomType={roomType}
        residentId={id}
        displaySM={displaySM}
        toggleSM={toggleSM}
      />

      <VisitModal
        roomType={roomType}
        residentId={id}
        displayVM={displayVM}
        toggleVM={toggleVM}
      />
    </>
  );
};

export default ListingDetails;
