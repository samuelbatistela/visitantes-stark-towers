import React, { useEffect } from "react";
import { NextPage } from "next";
import { useRouter } from "next/router";
import useUser from "@/io/redux/user/useUser.hook";
import LogsView from "@/views/logs/Logs.view";

const LogsPage: NextPage = () => {
  const { push } = useRouter();
  const { user } = useUser();

  useEffect(() => {
    if (!user) {
      push("/");
    }
  }, [user, push]);

  return <LogsView />;
};

export default LogsPage;
