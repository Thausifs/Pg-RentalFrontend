import Link from "next/link";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useQueryClient } from "react-query";
import { useMutation } from "react-query";
import { useAuthToken } from "../../contexts/authContext";
import cityApi from "../../utils/Api/city.api";
import useCities from "../../utils/Hooks/useCities";
import CityModal from "../Modal/CityModal";
import Loading from "../Shared/Loading";

function AddCity() {
  const [displayCM, toggleCM] = useState(false);
  const { cities, isLoading } = useCities();
  const token = useAuthToken();
  const queryClient = useQueryClient();
  const { mutate: deleteCityById, isLoading: isLoading2 } = useMutation({
    mutationKey: ["deleteCityById"],
    mutationFn: (id) => {
      return cityApi.deleteCityById(id, token);
    },
    onSuccess: () => {
      toast.success(`City deleted Successfully`);
      queryClient.invalidateQueries(["getAllcities"]);
      refetch();
    },
  });

  return (
    <>
      <div className="main-content d-flex flex-column">
        <div className="breadcrumb-area">
          <h1>Add Cities</h1>
          <ol className="breadcrumb">
            <li className="item">
              <Link href="/admin">
                <a>Home</a>
              </Link>
            </li>
            <li className="item">
              <Link href="/admin">
                <a>Dashboard</a>
              </Link>
            </li>
            <li className="item">Add city</li>
          </ol>
        </div>

        {/*..........................city information............................................*/}

        <div className="add-listings-btn">
          <button
            type="submit"
            onClick={() => {
              toggleCM(!displayCM);
            }}
          >
            Add Cities
          </button>
        </div>

        {/*.................................... city List .........................................................*/}
        {isLoading || isLoading2 ? (
          <Loading />
        ) : (
          <ul className="list-group cityList">
            {cities.map((city) => {
              return (
                <li className="list-group-item d-flex" key={city.id}>
                  <p className="p-0 m-0 flex-grow-1">{city.name}</p>

                  <div className="add-listings-btn">
                    <button
                      type="submit"
                      onClick={() => deleteCityById(city.id)}
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

        <div className="flex-grow-1"></div>

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
      <CityModal displayCM={displayCM} toggleCM={toggleCM} />
    </>
  );
}

export default AddCity;
