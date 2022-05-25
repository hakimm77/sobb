import { doc, updateDoc } from "firebase/firestore";
import React, { useState } from "react";
import { Image, Modal, Text, TextInput } from "react-native";
import { WorkerInfo } from "../../../types/user";
import { db, storage } from "../../firebase/firebaseConfig";
import AppLogo from "../reusable/AppLogo";
import AppText from "../reusable/AppText";
import Container from "../reusable/Container";
import Spacer from "../reusable/Spacer";
import * as ImagePicker from "expo-image-picker";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

const UpdateInfoModal: React.FC<{
  openModal: any;
  profileInfo: WorkerInfo;
  closeModal: any;
}> = ({ openModal, closeModal, profileInfo }) => {
  const [name, setName] = useState(profileInfo.name);
  const [afterName, setAfterName] = useState(profileInfo.afterName);
  const [picture, setPicture] = useState(profileInfo.profilePic);

  const updateInformation = async () => {
    await updateDoc(doc(db, `/worker/${profileInfo.id}`), {
      personalInfo: {
        name: name,
        afterName: afterName,
        about: profileInfo.about,
        age: profileInfo.age,
        id: profileInfo.id,
        previousJobs: profileInfo.previousJobs,
        profilePic: picture,
        type: profileInfo.type,
        workTime: profileInfo.workTime,
      },
    });
    profileInfo.name = name;
    profileInfo.afterName = afterName;
    profileInfo.profilePic = picture;

    closeModal();
  };

  const pickImage = async () => {
    const image = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      base64: true,
    });

    if (!image.cancelled) {
      const base64ToUpload = `data:image/jpeg;base64,${image.base64}`;
      setPicture(base64ToUpload);
    }
  };

  return (
    <Modal visible={openModal}>
      <Container
        flex
        direction="column"
        height="100%"
        style={{ backgroundColor: "#1D1D1D" }}
      >
        <Container
          flex
          direction="row"
          height={100}
          alignHorizantle="center"
          alignVertical="center"
          style={{
            borderBottomWidth: 2,
            borderBottomColor: "#fafafa",
            backgroundColor: "#2c559d",
          }}
        >
          <Spacer height={2} />

          <AppLogo width={80} height={80} />

          <Container
            touchable
            position="absolute"
            style={{ bottom: 5, left: 5 }}
            onClick={closeModal}
          >
            <AppText size={18} color="#fafafa">
              Avbryt
            </AppText>
          </Container>

          <Container
            touchable
            position="absolute"
            style={{ bottom: 5, right: 5 }}
            onClick={updateInformation}
          >
            <AppText size={18} color="#fafafa">
              Klart
            </AppText>
          </Container>
        </Container>
        <Spacer height={2} />

        <Container
          flex
          direction="column"
          width="100%"
          alignHorizantle="center"
          style={{ borderBottomColor: "#fafafa", borderBottomWidth: 2 }}
        >
          <Container touchable onClick={pickImage} alignHorizantle="center">
            <Image
              source={{
                uri: picture,
              }}
              style={{ width: 120, height: 120, borderRadius: 100 }}
            />
            <AppText
              color="#fff"
              size={20}
              weight="bold"
              style={{ marginBottom: 10 }}
            >
              Edit
            </AppText>
          </Container>

          <Container
            flex
            direction="row"
            width="90%"
            alignVertical="space-between"
            alignHorizantle="center"
          >
            <AppText color="#fafafa" size={18}>
              Namn
            </AppText>

            <TextInput
              onChangeText={setName}
              style={{
                borderBottomColor: "gray",
                borderBottomWidth: 2,
                width: "50%",
                height: 40,
                padding: 0,
                color: "#fafafa",
              }}
              value={name}
            />
          </Container>
          <Spacer height={1} />

          <Container
            flex
            direction="row"
            width="90%"
            alignVertical="space-between"
            alignHorizantle="center"
          >
            <AppText color="#fafafa" size={18}>
              Efternamn
            </AppText>

            <TextInput
              onChangeText={setAfterName}
              style={{
                borderBottomColor: "gray",
                borderBottomWidth: 2,
                width: "50%",
                height: 40,
                padding: 0,
                color: "#fafafa",
              }}
              value={afterName}
            />
          </Container>
          <Spacer height={1} />
        </Container>
      </Container>
    </Modal>
  );
};

export default UpdateInfoModal;
