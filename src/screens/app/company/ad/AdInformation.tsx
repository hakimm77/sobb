import { doc, getDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { Modal, TextInput } from "react-native";
import { Button, Checkbox, Menu } from "react-native-paper";
import AppLogo from "../../../../components/reusable/AppLogo";
import AppText from "../../../../components/reusable/AppText";
import Container from "../../../../components/reusable/Container";
import Spacer from "../../../../components/reusable/Spacer";
import { db } from "../../../../firebase/firebaseConfig";
import { getData } from "../../../../helpers/AsyncStorageFuncs";
import { createAd } from "../../../../helpers/auth";
import branches from "../../../../helpers/branches";

const AdInformation: React.FC<{
  adInformationModal: boolean;
  closeModal: () => void;
}> = ({ adInformationModal, closeModal }) => {
  const [MenuVisible, setMenuVisible] = useState(false);
  const [branch, setBranch] = useState("");
  const [age, setAge] = useState("");
  const [description, setDescription] = useState("");
  const [question1, setQuestion1] = useState("");
  const [question2, setQuestion2] = useState("");
  const [question3, setQuestion3] = useState("");
  const [question4, setQuestion4] = useState("");
  const [plats, setPlats] = useState("");
  const [userID, setUserID] = useState("");
  const [companyInfo, setCompanyInfo] = useState<any>();

  useEffect(() => {
    getData("USER").then((data) => {
      setUserID(data as string);

      getDoc(doc(db, `company/${data}`)).then((info: any) => {
        setCompanyInfo(info.data().personalInfo);
      });
    });
  }, []);

  return (
    <Modal visible={adInformationModal}>
      <Container
        flex
        direction="column"
        alignHorizantle="center"
        style={{ backgroundColor: "#2c559d" }}
      >
        <Spacer height={1} />

        <Container
          flex
          direction="row"
          height={50}
          width="100%"
          alignHorizantle="center"
          alignVertical="center"
          style={{ borderBottomWidth: 2, borderBottomColor: "#fafafa" }}
        >
          <AppLogo width={70} height={70} />
        </Container>

        <Container
          scroll
          flex
          direction="column"
          height="100%"
          width="100%"
          style={{ backgroundColor: "#1D1D1D" }}
        >
          <Spacer height={1} />

          <Container
            flex
            direction="column"
            alignHorizantle="center"
            height="100%"
            width="100%"
          >
            <AppText
              color="#fafafa"
              size={18}
              weight="bold"
              style={{ fontFamily: "sans-serif" }}
            >
              Välj din bransch!
            </AppText>
            <Spacer height={0.5} />

            <Container>
              {branches.map((item) => (
                <Container
                  touchable
                  direction="row"
                  onClick={() => {
                    setBranch(item.name);
                  }}
                >
                  <Checkbox
                    uncheckedColor="white"
                    status={item.name === branch ? "checked" : "unchecked"}
                  />
                  <AppText color="white" size={18}>
                    {item.name}
                  </AppText>
                </Container>
              ))}
            </Container>

            <Spacer height={1} />

            <AppText
              color="#fafafa"
              size={18}
              weight="bold"
              style={{ fontFamily: "sans-serif" }}
            >
              Jobbplats
            </AppText>
            <Spacer height={0.5} />

            <TextInput
              onChangeText={setPlats as any}
              style={{
                borderWidth: 1,
                borderColor: "#fafafa",
                width: "70%",
                height: 30,
                padding: 5,
                color: "#fafafa",
              }}
              multiline={true}
              placeholder="Plats"
              placeholderTextColor="#fafafa"
              value={plats}
            />
            <Spacer height={1} />

            <AppText
              color="#fafafa"
              size={18}
              weight="bold"
              style={{ fontFamily: "sans-serif" }}
            >
              Önskad ålder
            </AppText>
            <Spacer height={0.5} />

            <TextInput
              onChangeText={setAge as any}
              style={{
                borderWidth: 1,
                borderColor: "#fafafa",
                width: "70%",
                height: 30,
                padding: 5,
                color: "#fafafa",
              }}
              multiline={true}
              placeholder="Ålder"
              placeholderTextColor="#fafafa"
              value={age}
            />
            <Spacer height={3} />

            <AppText
              color="#fafafa"
              size={18}
              weight="bold"
              style={{ fontFamily: "sans-serif" }}
            >
              Job beskrivning
            </AppText>
            <Spacer height={0.5} />

            <TextInput
              onChangeText={setDescription as any}
              style={{
                borderWidth: 1,
                borderColor: "#fafafa",
                width: "70%",
                height: 50,
                padding: 5,
                color: "#fafafa",
              }}
              multiline={true}
              placeholder="Svar..."
              placeholderTextColor="#fafafa"
              value={description}
            />
            <Spacer height={1} />

            <AppText
              color="#fafafa"
              size={18}
              weight="bold"
              style={{ fontFamily: "sans-serif" }}
            >
              4 valfria frågor till jobsökaren!
            </AppText>
            <Spacer height={0.5} />

            <TextInput
              onChangeText={setQuestion1 as any}
              style={{
                borderWidth: 1,
                borderColor: "#fafafa",
                width: "70%",
                height: 50,
                padding: 5,
                color: "#fafafa",
              }}
              multiline={true}
              placeholder="Svar..."
              placeholderTextColor="#fafafa"
              value={question1}
            />
            <TextInput
              onChangeText={setQuestion2 as any}
              style={{
                borderWidth: 1,
                borderColor: "#fafafa",
                width: "70%",
                height: 50,
                padding: 5,
                color: "#fafafa",
              }}
              multiline={true}
              placeholder="Svar..."
              placeholderTextColor="#fafafa"
              value={question2}
            />
            <TextInput
              onChangeText={setQuestion3 as any}
              style={{
                borderWidth: 1,
                borderColor: "#fafafa",
                width: "70%",
                height: 50,
                padding: 5,
                color: "#fafafa",
              }}
              multiline={true}
              placeholder="Svar..."
              placeholderTextColor="#fafafa"
              value={question3}
            />
            <TextInput
              onChangeText={setQuestion4 as any}
              style={{
                borderWidth: 1,
                borderColor: "#fafafa",
                width: "70%",
                height: 50,
                padding: 5,
                color: "#fafafa",
              }}
              multiline={true}
              placeholder="Svar..."
              placeholderTextColor="#fafafa"
              value={question4}
            />
            <Spacer height={3} />

            <Container
              touchable
              flex
              width={150}
              height={35}
              alignVertical="center"
              alignHorizantle="center"
              style={{ backgroundColor: "#2C559D" }}
              onClick={() => {
                createAd(
                  userID,
                  branch,
                  age,
                  description,
                  question1,
                  question2,
                  question3,
                  question4,
                  companyInfo.companyName,
                  plats
                );
              }}
            >
              <AppText color="#fafafa" size={18} weight="bold">
                SKAPA
              </AppText>
            </Container>

            <Spacer height={10} />
          </Container>
        </Container>
      </Container>
    </Modal>
  );
};

export default AdInformation;
