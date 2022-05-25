import React, { useState } from "react";
import AppText from "../reusable/AppText";
import { TextInput } from "react-native";
import Container from "../reusable/Container";
import Spacer from "../reusable/Spacer";
import { ActivityIndicator } from "react-native-paper";
import PaymentModel from "./PaymentModel";
import { StripeProvider as _StripeProvider } from "@stripe/stripe-react-native";
import type { Props as StripeProviderProps } from "@stripe/stripe-react-native/lib/typescript/src/components/StripeProvider";

const StripeProvider = _StripeProvider as React.FC<StripeProviderProps>;

const SignupCompanyCard = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [employer, setEmployer] = useState("");
  const [err, setErr] = useState("");
  const [loading, setLoading] = useState(false);
  const [paymentModel, setPaymentModel] = useState(false);

  const signup = () => {
    setErr("");

    if (email && password && companyName && employer) {
      setPaymentModel(true);
    } else {
      setErr("All fields are required !");
    }
  };

  return (
    <StripeProvider publishableKey="pk_live_51JtocOIs7Jyt1o1UUXsbOvBuE6XCCYSPMFxmzedzLs7zg0jOHX8phdR0hudnnVr8oMI9rXT3MUTOAoWuNZehIB4S00B6FVjeaA">
      <Container
        flex
        direction="column"
        alignHorizantle="center"
        width={300}
        style={{ backgroundColor: "#fafafa", borderRadius: 30 }}
      >
        <Spacer height={1} />

        <TextInput
          onChangeText={setCompanyName}
          style={{
            borderBottomWidth: 1,
            borderBottomColor: "#000",
            width: "70%",
            height: 30,
          }}
          placeholder="Företagsnamn:"
          placeholderTextColor="#000"
          value={companyName}
        />
        <Spacer height={1} />

        <TextInput
          onChangeText={setEmployer}
          style={{
            borderBottomWidth: 1,
            borderBottomColor: "#000",
            width: "70%",
            height: 30,
          }}
          placeholder="Arbetsgivare"
          placeholderTextColor="#000"
          value={employer}
        />
        <Spacer height={1} />

        <TextInput
          onChangeText={setEmail}
          style={{
            borderBottomWidth: 1,
            borderBottomColor: "#000",
            width: "70%",
            height: 30,
          }}
          placeholder="Mail:"
          placeholderTextColor="#000"
          value={email}
          autoCapitalize={"none"}
        />
        <Spacer height={1} />

        <TextInput
          onChangeText={setPassword as any}
          secureTextEntry={true}
          style={{
            borderBottomWidth: 1,
            borderBottomColor: "#000",
            width: "70%",
            height: 30,
          }}
          placeholder="Lösenord:"
          placeholderTextColor="#000"
          value={password}
          autoCapitalize={"none"}
        />

        {err ? (
          <AppText color="red" size={18}>
            {err}
          </AppText>
        ) : null}

        <Spacer height={1} />

        <Container
          touchable
          flex
          direction="row"
          alignHorizantle="center"
          alignVertical="center"
          width="80%"
          style={{
            backgroundColor: "rgb(33, 229, 41)",
            borderRadius: 30,
          }}
          onClick={signup}
        >
          {loading ? (
            <ActivityIndicator color="#fff" size="small" />
          ) : (
            <AppText
              color="#fafafa"
              size={23}
              style={{
                padding: 3,
                textShadowColor: "rgba(0, 0, 0, 0.4)",
                textShadowOffset: { width: -1, height: 1 },
                textShadowRadius: 10,
              }}
            >
              Bli Medlem
            </AppText>
          )}
        </Container>

        <Spacer height={1} />

        <PaymentModel
          paymentModel={paymentModel}
          companyInfo={{
            email: email,
            password: password,
            name: companyName,
            employer: employer,
          }}
          closeModal={() => {
            setPaymentModel(false);
          }}
        />
      </Container>
    </StripeProvider>
  );
};

export default SignupCompanyCard;
