import Link from "next/link";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useMutation } from "react-query";
import { useQueryClient } from "react-query";
import { useAuthToken } from "../../contexts/authContext";
import featureApi from "../../utils/Api/features.api";
import useFacilites from "../../utils/Hooks/useFacilities";
import AminityModal from "../Modal/AminityModal";
import Loading from "../Shared/Loading";

function AddAminities() {
  const [displayAM, toggleAM] = useState(false);
  const { features, isLoading } = useFacilites();
  const token = useAuthToken();
  const queryClient = useQueryClient();
  const { mutate: deleteAminitesById, isLoading: isLoading2 } = useMutation({
    mutationKey: ["deleteCityById"],
    mutationFn: (id) => {
      return featureApi.deleteFeatureById(id, token);
    },
    onSuccess: () => {
      toast.success(`Aminites deleted Successfully`);
      queryClient.invalidateQueries(["getAllFeatures"]);
      refetch();
    },
  });

  return (
    <>
      <div className="main-content d-flex flex-column">
        <div className="breadcrumb-area">
          <h1>Add Aminities</h1>
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
            <li className="item">Add Aminities</li>
          </ol>
        </div>

        <div className="add-listings-btn">
          <button
            type="submit"
            onClick={() => {
              toggleAM(!displayAM);
            }}
          >
            Add Aminities
          </button>
        </div>

        <div className="flex-grow-1">
          {isLoading || isLoading2 ? (
            <Loading />
          ) : (
            <ul className="list-group cityList">
              {features.map(({ feature_name, id }) => {
                return (
                  <li className="list-group-item d-flex" key={id}>
                    <p className="p-0 m-0 flex-grow-1">{feature_name}</p>

                    <div className="add-listings-btn">
                      <button
                        type="submit"
                        onClick={() => deleteAminitesById(id)}
                        className="btn-success"
                      >
                        DELETE
                      </button>
                    </div>
                  </li>
                );
              })}
            </ul>
          )}
        </div>

        <div className="copyrights-area">
          <div className="row align-items-center">
            <div className="col-lg-6 col-sm-6 col-md-6">
              <p>
                <i className="bx bx-copyright"></i> Indice All rights reserved
              </p>
            </div>

            <div className="col-lg-6 col-sm-6 col-md-6 text-right">
              <p>
                Designed by ❤️{" "}
                <a
                  href="https://envytheme.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  EnvyTheme
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/*..........................CITY MODAL................................................. */}
      <AminityModal displayAM={displayAM} toggleAM={toggleAM} />
    </>
  );
}

export default AddAminities;
