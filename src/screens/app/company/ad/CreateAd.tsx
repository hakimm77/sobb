import React, { useState } from "react";
import AppText from "../../../../components/reusable/AppText";
import Container from "../../../../components/reusable/Container";
import Spacer from "../../../../components/reusable/Spacer";
import AppLogo from "../../../../components/reusable/AppLogo";
import { Image } from "react-native";
import AdInformation from "./AdInformation";

const AdScreen = () => {
  const [adInformationModal, setAdInformationModal] = useState(false);

  return (
    <Container
      flex
      direction="column"
      alignHorizantle="center"
      height="100%"
      style={{ backgroundColor: "#2c559d" }}
    >
      <Spacer height={2} />

      <Container
        flex
        direction="row"
        height={80}
        width="100%"
        alignHorizantle="center"
        alignVertical="center"
        style={{ borderBottomWidth: 2, borderBottomColor: "#fafafa" }}
      >
        <AppLogo width={80} height={80} />
      </Container>
      <Spacer height={1.5} />

      <Image
        source={require("../../../../../assets/house-icon.png")}
        width={100}
        height={100}
      />
      <AppText color="#fafafa" size={20} weight="bold">
        SKAPA DIN ANNONS
      </AppText>
      <Spacer height={0.5} />

      <AppText
        color="#fafafa"
        size={15}
        style={{ textAlign: "center", width: "80%" }}
      >
        Gör ditt företag synligt för ungdomar Tack för att du använder SOBB
      </AppText>
      <Spacer height={2} />

      <Container
        touchable
        flex
        width={160}
        height={50}
        alignHorizantle="center"
        alignVertical="center"
        style={{ backgroundColor: "#1D1D1D" }}
        onClick={() => {
          setAdInformationModal(true);
        }}
      >
        <AppText color="#fafafa" size={20} weight="bold">
          KOM IGÅNG
        </AppText>
      </Container>

      <AdInformation
        adInformationModal={adInformationModal}
        closeModal={() => {
          setAdInformationModal(false);
        }}
      />
    </Container>
  );
};

export default AdScreen;
