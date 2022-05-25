import {
  addDoc,
  collection,
  doc,
  getDocs,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
} from "firebase/firestore";
import React, { useEffect, useRef, useState } from "react";
import { Image, ScrollView, TextInput } from "react-native";
import { Modal, Keyboard } from "react-native";
import { db } from "../../firebase/firebaseConfig";
import { getData } from "../../helpers/AsyncStorageFuncs";
// import sendMessage from '../../../../helpers/chat/sendMessage';
import AppLogo from "../reusable/AppLogo";
import AppText from "../reusable/AppText";
import Container from "../reusable/Container";
import Spacer from "../reusable/Spacer";

const MessagesScreen: React.FC<{
  messagesModal: boolean;
  closeModal: () => void;
  selectedConversation: any;
}> = ({ messagesModal, closeModal, selectedConversation }) => {
  const [writeMessage, setWriteMessage] = useState(false);
  const [messages, setMessages] = useState<any>([]);
  const [messageContent, setMessageContent] = useState("");
  const [temp, setTemp] = useState<any>([]);
  const [userID, setUserID] = useState<string | null>("");
  const scrollViewRef: any = useRef();

  useEffect(() => {
    getData("USER").then((e) => {
      setUserID(e);
    });

    Keyboard.addListener("keyboardDidHide", () => {
      setWriteMessage(false);
    });
  }, []);

  useEffect(() => {
    getDocs(query(collection(db, "/chat"), orderBy("timestamp", "asc"))).then(
      (snapshot) => {
        setMessages([]);
        snapshot.forEach((child) => {
          console.log(child.data());
          setMessages((p: any) => [...p, child.data()]);
        });
      }
    );
  }, [temp]);

  // const unsub = onSnapshot(collection(db, `/chat`), (doc) => {
  //   setMessages([]);
  //   doc.forEach((child) => {
  //     console.log(child.data());
  //     setMessages((p: any) => [...p, child.data()]);
  //   });
  // });

  const sendMessage = async (msg: any) => {
    if (msg) {
      await addDoc(collection(db, `/chat`), {
        msg: msg,
        sender: userID,
        receiver: selectedConversation.id,
        timestamp: serverTimestamp(),
      });

      setTemp((p: any) => [...p, msg]);
    }
  };

  return (
    <Modal visible={messagesModal}>
      <Container
        flex
        direction="column"
        height="100%"
        alignHorizantle="center"
        style={{ backgroundColor: "#1D1D1D" }}
      >
        <Spacer height={0.5} />

        <Container
          flex
          direction="row"
          style={{
            borderBottomWidth: 2,
            borderBottomColor: "#fafafa",
            backgroundColor: "#323232",
          }}
        >
          <Container
            touchable
            style={{ position: "absolute", left: 15, top: 50 }}
            onClick={closeModal}
          >
            <Image
              source={require("../../../assets/back-arrow.png")}
              width={40}
              height={40}
            />
          </Container>

          <Container
            flex
            direction="column"
            width="100%"
            alignHorizantle="center"
          >
            <AppLogo width={70} height={70} />
            <AppText
              color="#fafafa"
              size={28}
              style={{ fontWeight: "bold", marginTop: -10 }}
            >
              {selectedConversation.name}
            </AppText>
            <Spacer height={0.5} />
          </Container>
        </Container>

        <Container
          flex
          direction="column"
          width="100%"
          height="75%"
          style={{ backgroundColor: "#1D1D1D" }}
        >
          <ScrollView
            style={{
              display: "flex",
              flexDirection: "column-reverse",
              width: "100%",
              height: "100%",
            }}
            ref={scrollViewRef}
            onContentSizeChange={() =>
              scrollViewRef.current.scrollToEnd({ animated: true })
            }
          >
            <Spacer height={1} />
            {messages.map((msg: any, idx: number) => {
              return (
                <Container key={idx}>
                  <Container
                    flex
                    style={{
                      backgroundColor:
                        msg.sender === userID ? "#2998ff" : "#3B3E40",
                      borderRadius: 10,
                      maxWidth: 250,
                      margin: 5,
                      padding: 7,
                      alignSelf:
                        msg.sender === userID ? "flex-end" : "flex-start",
                    }}
                  >
                    <AppText color="#fafafa" size={15}>
                      {msg.msg}
                    </AppText>
                  </Container>
                </Container>
              );
            })}

            <Spacer height={3} />
          </ScrollView>

          <Container
            flex
            direction="row"
            alignVertical="space-around"
            style={
              writeMessage && {
                bottom: "15%",
                backgroundColor: "#1D1D1D",
              }
            }
          >
            <TextInput
              style={{
                borderWidth: 1,
                borderColor: "#C4C4C4",
                borderRadius: 30,
                width: "80%",
                height: 30,
                paddingLeft: 10,
                fontFamily: "sans-serif",
                color: "#fafafa",
              }}
              onFocus={() => {
                //scrollViewRef.current.scrollToEnd({animated: true});
                setWriteMessage(true);
              }}
              onBlur={() => {
                setWriteMessage(false);
              }}
              placeholder="iMessage"
              placeholderTextColor="#fafafa"
              onChangeText={setMessageContent}
              value={messageContent}
            />

            <Container
              touchable
              onClick={() => {
                // sendMessage(
                //   selectedConversation,
                //   userID,
                //   messages[0].sender,
                //   messageContent,
                // );
                sendMessage(messageContent);
                setMessageContent("");
                // Keyboard.dismiss();
              }}
            >
              <AppText
                color={messageContent.length ? "#fff" : "#C4C4C4"}
                size={20}
              >
                Send
              </AppText>
            </Container>
          </Container>
        </Container>
      </Container>
    </Modal>
  );
};

export default MessagesScreen;
