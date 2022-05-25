import React from "react";
import AppText from "../../../components/reusable/AppText";
import Container from "../../../components/reusable/Container";
import Spacer from "../../../components/reusable/Spacer";
import AppLogo from "../../../components/reusable/AppLogo";

const NotificationScreen = () => {
  return (
    <Container>
      <Container
        flex
        height={100}
        direction="column"
        alignHorizantle="center"
        alignVertical="center"
        style={{
          backgroundColor: "#2C559D",
          borderBottomWidth: 1,
          borderBottomColor: "#fafafa",
        }}
      >
        <Spacer height={1} />

        <AppText color="#fafafa" size={15}>
          All aktivitet
        </AppText>
      </Container>

      <Container
        flex
        height="100%"
        direction="column"
        alignHorizantle="center"
        style={{ backgroundColor: "#1D1D1D" }}
      >
        <Container>
          <Spacer height={5} />
          <AppLogo width={250} height={250} />
        </Container>
      </Container>
    </Container>
  );
};

export default NotificationScreen;
