import React from "react";
import AppText from "../../components/reusable/AppText";
import Container from "../../components/reusable/Container";
import Spacer from "../../components/reusable/Spacer";
import AppLogo from "../../components/reusable/AppLogo";
import SignupCompanyCard from "../../components/layout/SignupCompanyCard";
import BackArrowButton from "../../components/reusable/BackButton";
import SignupWorkerCard from "../../components/layout/SignupWorkerCard";

const Signup: React.FC<{ type: string; navigation: any }> = ({
  navigation,
  type,
}) => {
  return (
    <Container
      scroll
      flex
      direction="column"
      height="100%"
      style={{ backgroundColor: "#1D1D1D" }}
    >
      <Container
        flex
        direction="column"
        alignHorizantle="center"
        height="100%"
        style={{
          borderBottomLeftRadius: 180,
          borderBottomRightRadius: 180,
          backgroundColor: "#2C559D",
        }}
      >
        <BackArrowButton navigation={navigation} />

        <Spacer height={1} />

        <AppLogo width={150} height={150} />
        <AppText size={35} color="#fafafa" style={{ marginTop: -30 }}>
          Registrera
        </AppText>
        <Spacer height={0.5} />

        {type === "company" ? <SignupCompanyCard /> : <SignupWorkerCard />}

        <Spacer height={4} />
      </Container>
    </Container>
  );
};

export default Signup;
