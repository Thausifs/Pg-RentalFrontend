import { useRouter } from "next/router";
import React, { useEffect } from "react";

import { useAuthContext } from "../../contexts/authContext";
import UsersNavbar from "../../components/users/UserNavbar";
import UserBookings from "../../components/users/UserBookings";
import ProfileComponent from "../../components/CommonDashBoard/Profile";
import ComplainList from "../../components/users/Complain";

const Template = ({ children, value }) => {
  return (
    <>
      <UsersNavbar value={value ?? ""} />
      {children}
    </>
  );
};

const RenderComponent = ({ slug }) => {
  if (slug === "bookings") {
    return <UserBookings />;
  } else if (slug === "profile") {
    return <ProfileComponent admin="users" />;
  } else if (slug === "profile") {
    return <ProfileComponent admin="users" />;
  }else if(slug==="complains"){
    return <ComplainList/>
  }
};
function Dynamic() {
  const router = useRouter();
  const authState = useAuthContext();
  const ruter = useRouter();
  useEffect(() => {
    if (!authState?.user || authState?.user?.role !== "user") {
      router.push("/");
    }
  }, [authState.user, router]);

  const slug = ruter.query.slug;

  return (
    <Template value={slug}>
      <RenderComponent slug={slug} />
    </Template>
  );
}

export default Dynamic;
