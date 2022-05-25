import React, { useState } from "react";
import { Alert, Modal, Text } from "react-native";
import AppText from "../reusable/AppText";
import Container from "../reusable/Container";
import { CardField, useConfirmPayment } from "@stripe/stripe-react-native";
import { Button } from "react-native-paper";
import { signupCompany } from "../../helpers/auth";

const PaymentModel: React.FC<{
  paymentModel: boolean;
  companyInfo: any;
  closeModal: () => void;
}> = ({ paymentModel, companyInfo, closeModal }) => {
  const [card, setCard] = useState<any>();
  const { confirmPayment } = useConfirmPayment();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignup = () => {
    const { email, password, name, employer } = companyInfo;

    signupCompany(email, password, name, employer);
  };

  const fetchClientSecret = async () => {
    const response = await fetch("http://192.168.1.14:3000/payment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const { clientSecret, error } = await response.json();

    return { clientSecret, error };
  };

  const handlePayment = async () => {
    setLoading(true);
    setError("");

    if (!card?.complete) {
      setError("Please enter your complete credit card information");
      setLoading(false);
      return;
    }

    const billingDetails = {
      email: companyInfo.email,
    };

    try {
      const { clientSecret, error } = await fetchClientSecret();

      if (error) {
        setLoading(false);
        Alert.alert("Unable to process payment");
      } else {
        const { paymentIntent, error } = await confirmPayment(clientSecret, {
          type: "Card",
          billingDetails: billingDetails,
        });

        if (error) {
          setLoading(false);
          setError(error.message);
          console.log(error);
          handleSignup();
        } else if (paymentIntent) {
          setLoading(false);
          handleSignup();
          console.log(paymentIntent);
        }
      }
    } catch (err) {
      setLoading(false);
      console.log(err);
    }
  };

  return (
    <Modal visible={paymentModel} animationType="slide">
      <Container
        style={{ backgroundColor: "#1D1D1D" }}
        flex
        direction="column"
        height="100%"
        width="100%"
        alignHorizantle="center"
        alignVertical="center"
      >
        <Container
          touchable
          style={{ position: "absolute", top: 10, left: 20 }}
          onClick={closeModal}
        >
          <AppText size={40} color="white">
            &times;
          </AppText>
        </Container>

        <AppText
          color="white"
          size={25}
          weight="bold"
          style={{ marginBottom: 5 }}
        >
          Start yearly subscription
        </AppText>
        <AppText
          color="white"
          size={23}
          weight="bold"
          style={{ marginBottom: 60 }}
        >
          5000 sek/year
        </AppText>
        <CardField
          postalCodeEnabled
          placeholder={{
            number: "4242 4242 4242 4242",
          }}
          onCardChange={(details) => {
            setCard(details);
          }}
          cardStyle={{ backgroundColor: "#efefef" }}
          style={{ height: 50, width: "95%", marginVertical: 30 }}
        />
        <Button
          color="white"
          style={{ backgroundColor: "#2C559D", marginBottom: 15 }}
          disabled={loading}
          loading={loading}
          onPress={handlePayment}
        >
          Start membership
        </Button>
        <Text style={{ textAlign: "center", color: "red", fontSize: 19 }}>
          {error}
        </Text>
      </Container>
    </Modal>
  );
};

export default PaymentModel;
