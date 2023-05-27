import { useState } from "react";
import Link from "next/link";
import DashboardNavbar from "../../../components/Dashboard/DashboardNavbar";
import DashboardListingArea from "../../../components/Dashboard/DashboardListingArea";
import Navbar from "../../../components/_App/Navbar";

//modal
import AddUserModal from "../../../components/Modal/AddUsersModal";

const Index = () => {

  const[displayAUM,toggleAUM] = useState(false)
  return (
    <>
      <DashboardNavbar />

      <div className="main-content d-flex flex-column">
        <div className="breadcrumb-area">
          <h1>User's Detail</h1>
          <ol className="breadcrumb">
            <li className="item">
              <Link href="/dashboard">
                <a>Home</a>
              </Link>
            </li>
            <li className="item">
              <Link href="/dashboard">
                <a>Dashboard</a>
              </Link>
            </li>
            <li className="item">User's Detail</li>
          </ol>
        </div>

        <div className="add-listings-btn">
          <button type="submit" onClick={()=>{
              toggleAUM(!displayAUM)
          }}> Add Users </button>
        </div>

        <section className="listing-area">
          <div className="tab-content" id="myTabContent">
            <div className="" id="active-listing">
              <div className="row">
                <div className="col-xl-4 col-lg-6 col-md-6">
                  <div className="single-listings-box">
                    <div className="listings-image">
                      <img src="/images/listings/listings3.jpg" alt="image" />
                      <Link href="/single-listings">
                        <a className="link-btn"></a>
                      </Link>
                    </div>

                    <div className="listings-content">
                      <h3>User Name</h3>
                    </div>

                    <div className="listings-footer">
                      <div className="d-flex justify-content-between align-items-center">
                        <a href="#" className="default-btn">
                          Edit
                        </a>
                        <a href="#" className="default-btn">
                          Delete
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* ....................Add user Modal.......................... */}

      <AddUserModal displayAUM={displayAUM} toggleAUM={toggleAUM}/>
    </>
  );
};

export default Index;
