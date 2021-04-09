import React from "react";
import {
  InnerPageContainer,
  PageContainer,
} from "../../components/pageContainer";

import AccountBox from "../../components/UserAccount/AccountBox";
import { Marginer } from "../../components/marginer";

const CustomerAccessPage = (props) => {
  return (
    <PageContainer>
      <InnerPageContainer>
        <Marginer direction="vertical" margin={35} />
        <AccountBox />
      </InnerPageContainer>
    </PageContainer>
  );
};

export default CustomerAccessPage;
