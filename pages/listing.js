/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useRouter } from "next/router";

import Footer from "../components/_App/Footer";
import useListing from "../utils/Hooks/useListing";
import Loading from "../components/Shared/Loading";
import { useMemo, useState } from "react";

const Listing = () => {
  const router = useRouter();
  const query = router.query;
  const { listing, isLoading } = useListing(query?.city, query?.roomType);
  const [iframe, setIframe] = useState(undefined);
  const [filter,setFilter]=useState([])
  const allFeature=useMemo(()=>{
    const set=new Set()
     if(!listing){
      return []
     }
     listing?.forEach(({FeatureResident})=>{
      FeatureResident.map(({feature})=>{
          set.add(feature.feature_name)
      })
     })
     return [...set]
  },[listing])
  const filterOnClickHandler=(e,value)=>{
    if(e?.target?.checked){
       setFilter(filter.concat(value))
    }else{
        setFilter(filter.filter((ele)=>ele!==value))
    }
  }
  const filterListing=useMemo(()=>{
    if(filter.length===0){
       return listing
    }
    return listing.filter(({FeatureResident})=>{
      const res=false
    
    const arr=FeatureResident.map(({feature})=>feature.feature_name)
     return filter.every((ele=>arr.includes(ele)))
    })
 },[filter,listing])

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <section className="listings-area mt-lg-5">
          <div className="container-fluid">
            <div className="row m-0">
              <div className="col-xl-8 col-lg-12 col-md-12 p-0">
                <div className="row">
                  <div className="col-lg-4 col-md-12">
                    <aside className="listings-widget-area">
                      <section className="widget widget_features">
                        <h3 className="widget-title">Features</h3>
                        <ul>
                          {/* none hide list */}
                          {allFeature.map((elm, index) => (
                            <li key={index}>
                              <input
                                id="categories1"
                                type="checkbox"
                                key={elm}
                                onClick={(e)=>filterOnClickHandler(e,elm)}
                              />
                              <label htmlFor="categories1">{elm}</label>
                            </li>
                          ))}
                        </ul>
                      </section>
                    </aside>
                  </div>

                  <div className="col-lg-8 col-md-12">
                    <div className="all-listings-list">
                      <div className="listings-grid-sorting row align-items-center">
                        <div className="col-lg-5 col-md-6 result-count">
                          <p>
                            <span className="count">{listing.length}</span> Results
                          </p>
                        </div>

                   
                      </div>

                      <div className="row">
                        {filterListing.map(
                          ({
                            id,
                            name,
                            AvailAbility,
                            FeatureResident,
                            city,
                            roomPhotos,
                            googleMapUrl,
                          }) => {
                            return (
                              <div
                                key={id}
                                onMouseEnter={() => setIframe(googleMapUrl)}
                                className="col-lg-12 col-md-12"
                              >
                                <div className="single-listings-item">
                                  <div className="row m-0">
                                    <div className="col-lg-4 col-md-4 p-0">
                                      <div className="listings-image bg-img5">
                                        <img
                                          src={`${
                                            roomPhotos === 0
                                              ? "/images/listings/listings10.jpg"
                                              : roomPhotos[0].path
                                          }`}
                                          alt="image"
                                        />
                                        <a href="#" className="bookmark-save">
                                          <i className="flaticon-heart"></i>
                                        </a>
                                        <a href="#" className="category">
                                          <i className="flaticon-cooking"></i>
                                        </a>

                                        <Link
                                          href={{
                                            pathname: `/listing/${id}`,
                                            query: {
                                              roomType:
                                                AvailAbility[0]?.roomType
                                                  ?.typeOfRoom,
                                            },
                                          }}
                                        >
                                          <a className="link-btn"></a>
                                        </Link>
                                      </div>
                                    </div>

                                    <div className="col-lg-8 col-md-8 p-0">
                                      <div className="listings-content">
                                        {true ? (
                                          <span className="status">
                                            <i className="flaticon-save"></i>{" "}
                                            Open Now
                                          </span>
                                        ) : (
                                          <span className="status status-close">
                                            <i className="flaticon-save"></i>{" "}
                                            Close Now
                                          </span>
                                        )}

                                        <h3>
                                          <Link
                                            href={{
                                              pathname: `/listing/${id}`,
                                              query: {
                                                roomType:
                                                  AvailAbility[0]?.roomType
                                                    ?.typeOfRoom,
                                              },
                                            }}
                                          >
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
                                            <span className="count">(55)</span>
                                          </div>
                                          <div className="price">
                                            Start From{" "}
                                            <span>
                                              Rs.{AvailAbility[0].price}
                                            </span>
                                          </div>
                                        </div>
                                        <ul className="listings-meta">
                                          {FeatureResident.map(
                                            ({ feature, featureId }) => {
                                              console.log(googleMapUrl);
                                              return (
                                                <li key={featureId}>
                                                  <a href="#">
                                                    <i className="flaticon-shopping-bags"></i>{" "}
                                                    {feature.feature_name}
                                                  </a>
                                                </li>
                                              );
                                            }
                                          )}
                                          <li>
                                            <a href="#">
                                              <i className="flaticon-pin"></i>{" "}
                                              {city.name}
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            );
                          }
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-xl-4 col-lg-12 col-md-12 p-0">
                <div className="map-container fw-map side-full-map">
                  <div id="main-full-map">
                    <iframe
                      src={`${
                        iframe ??
                        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8385385572983!2d144.95358331584498!3d-37.81725074201705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4dd5a05d97%3A0x3e64f855a564844d!2s121%20King%20St%2C%20Melbourne%20VIC%203000%2C%20Australia!5e0!3m2!1sen!2sbd!4v1612419490850!5m2!1sen!2sbd"
                      }`}
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      <Footer bgColor="bg-f5f5f5" />
    </>
  );
};

export default Listing;
