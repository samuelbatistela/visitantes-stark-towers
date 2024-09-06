import React, { useEffect } from "react";
import { NextPage } from "next";
import { useRouter } from "next/router";
import HistoryView from "@/views/history/History.view";
import useUser from "@/io/redux/user/useUser.hook";

const HistoryPage: NextPage = () => {
  const { push } = useRouter();
  const { user } = useUser();

  useEffect(() => {
    if (!user) {
      push("/");
    }
  }, [user, push]);

  return <HistoryView />;
};

export default HistoryPage;
