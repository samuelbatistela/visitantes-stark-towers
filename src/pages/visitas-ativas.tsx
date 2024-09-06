import React, { useEffect } from "react";
import { NextPage } from "next";
import { useRouter } from "next/router";
import VisitorsView from "@/views/visitors/Visitors.view";
import useUser from "@/io/redux/user/useUser.hook";

const VisitorsPage: NextPage = () => {
  const { push } = useRouter();
  const { user } = useUser();

  useEffect(() => {
    if (!user) {
      push("/");
    }
  }, [user, push]);

  return <VisitorsView />;
};

export default VisitorsPage;
