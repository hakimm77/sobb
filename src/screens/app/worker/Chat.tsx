import React, { useEffect, useState } from "react";
import Container from "../../../components/reusable/Container";
import Spacer from "../../../components/reusable/Spacer";
import AppText from "../../../components/reusable/AppText";
import AppLogo from "../../../components/reusable/AppLogo";
import MessagesScreen from "../../../components/layout/MessagesScreen";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  onSnapshot,
} from "firebase/firestore";
import { db } from "../../../firebase/firebaseConfig";
import { ActivityIndicator } from "react-native-paper";
import { getChat } from "../../../helpers/getProfileInfo";

const Chat = () => {
  const [chatPages, setChatPages] = useState(["Alla", "Grupper", "Favoriter"]);
  const [selectedPage, setSelectedPage] = useState("Alla");
  const [messagesModal, setMessagesModal] = useState(false);
  const [selectedConversation, setSelectedConversation] = useState("");
  const [companies, setCompanies] = useState<any>([]);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");

  useEffect(() => {
    setLoading(true);

    getChat(setCompanies, setLoading);
    console.log(companies);
  }, []);

  return (
    <Container
      flex
      direction="column"
      height="100%"
      alignHorizantle="center"
      style={{ backgroundColor: "#1D1D1D" }}
    >
      <Spacer height={3} />

      <AppText color="#fafafa" size={35}>
        Chattar
      </AppText>
      <Spacer height={0.5} />

      <Container flex direction="row" width="100%" height={50}>
        {chatPages.map((page) => {
          return (
            <Container
              key={page}
              touchable
              flex
              width="33.3%"
              alignHorizantle="center"
              alignVertical="center"
              style={{
                borderWidth: 1,
                borderColor: "#fafafa",
              }}
              onClick={() => {
                setSelectedPage(page);
              }}
            >
              <AppText
                color="#fafafa"
                size={20}
                style={{
                  textDecorationLine:
                    selectedPage === page ? "underline" : "none",
                }}
              >
                {page}
              </AppText>
            </Container>
          );
        })}
      </Container>

      <Container flex direction="column" height="100%">
        {selectedPage === "Alla" ? (
          <Container style={{ marginTop: 20 }}>
            {loading ? (
              <ActivityIndicator color="white" />
            ) : err ? (
              <AppText color="white" style={{ fontSize: 20 }}>
                {err}
              </AppText>
            ) : (
              companies.map((company: any) => (
                <Container
                  touchable
                  flex
                  direction="row"
                  alignHorizantle="center"
                  width={330}
                  height={60}
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.19)",
                    marginBottom: 20,
                  }}
                  onClick={() => {
                    setSelectedConversation(company);
                    setMessagesModal(true);
                  }}
                >
                  <AppLogo width={50} height={50} />

                  <Container flex direction="column">
                    <AppText weight="bold" color="#fafafa" size={18}>
                      {company.name}
                    </AppText>
                    <AppText size={15} color="#fafafa">
                      {company.plats}
                    </AppText>
                  </Container>
                </Container>
              ))
            )}
          </Container>
        ) : selectedPage === "Grupper" ? (
          <AppText style={{ marginTop: 50 }} color="white">
            Soon
          </AppText>
        ) : (
          <AppText style={{ marginTop: 50 }} color="white">
            Soon
          </AppText>
        )}
      </Container>

      <MessagesScreen
        selectedConversation={selectedConversation}
        messagesModal={messagesModal}
        closeModal={() => {
          setMessagesModal(false);
        }}
      />
    </Container>
  );
};

export default Chat;
