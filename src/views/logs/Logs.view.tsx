import { FC } from "react";
import styled from "styled-components";
import Layout from "@/components/layout/Layout.component";
import Flexbox from "@/shared-styles/Flexbox.css";

const Wrapper = styled.div`
  width: 100%;

  ${Flexbox}
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const LogsView: FC = () => {
  return (
    <Layout menuActive={true}>
      <Wrapper>
        <h1>Logs da aplicação</h1>
      </Wrapper>
    </Layout>
  );
};

export default LogsView;
