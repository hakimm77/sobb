import React, { useEffect, useRef, useState } from "react";
import {
  Keyboard,
  TextInput,
  View,
  TouchableOpacity,
  Image,
} from "react-native";
import Container from "../../../components/reusable/Container";
import AppText from "../../../components/reusable/AppText";
import AppLogo from "../../../components/reusable/AppLogo";
import Spacer from "../../../components/reusable/Spacer";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../../firebase/firebaseConfig";

const JobsScreen = () => {
  const [inputFocus, setInputFocus] = useState(false);
  const [branchesModal, setBranchesModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedJob, setSelectedJob] = useState();
  const [searchRes, setSearchRes] = useState<any>([]);
  const [jobModal, setJobModal] = useState(false);
  const inputRef: any = useRef(null);

  useEffect(() => {
    // getDoc(doc(db, "/company/")).then(async (snapchot) => {
    //   console.log(snapchot.exists());
    //   //      setSearchRes([]);
    //   // const companies = snapchot.data() as any;
    //   // companies.forEach((child: any) => {
    //   //   if (searchTerm) {
    //   //     console.log(searchTerm);
    //   //     if (child.ad) {
    //   //       if (child.ad.name.includes(searchTerm)) {
    //   //         setSearchRes((previousRes: any) => [...previousRes, child.ad]);
    //   //       } else {
    //   //         console.log("nothing");
    //   //       }
    //   //     }
    //   //   }
    //   // });
    // });
  }, [searchTerm]);

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
        alignVertical="center"
        alignHorizantle="center"
        width="100%"
        height={80}
        style={{ borderBottomColor: "#fafafa", borderBottomWidth: 2 }}
      >
        <TextInput
          ref={inputRef}
          placeholder="sök"
          placeholderTextColor="#fafafa"
          onChangeText={setSearchTerm}
          style={{
            fontFamily: "serif",
            fontSize: 15,
            color: "#fafafa",
            paddingLeft: 5,
            width: inputFocus ? "75%" : "80%",
            height: 30,
            backgroundColor: "rgba(50, 50, 50, 0.55)",
            borderRadius: 5,
          }}
          value={searchTerm}
          onFocus={() => {
            setInputFocus(true);
          }}
          onBlur={() => {
            setInputFocus(false);
          }}
        />

        {inputFocus && (
          <TouchableOpacity
            onPress={() => {
              inputRef.current.blur();
            }}
          >
            <AppText color="white" size={18} style={{ margin: 7 }}>
              Avbryt
            </AppText>
          </TouchableOpacity>
        )}
      </Container>

      {inputFocus ? (
        <Container
          flex
          alignHorizantle="center"
          height="100%"
          width="100%"
          style={{ backgroundColor: "#1D1D1D" }}
        >
          <Spacer height={1} />
          {searchRes.length ? (
            searchRes.map((result: any) => {
              return (
                <Container
                  touchable
                  flex
                  direction="row"
                  alignHorizantle="center"
                  width="90%"
                  height={60}
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.19)",
                    marginBottom: 20,
                  }}
                  onClick={() => {
                    setSelectedJob(result);
                    setJobModal(true);
                  }}
                  key={result.name}
                >
                  <Image
                    source={require("../../../../assets/industrie-type-example.png")}
                    width={40}
                    height={40}
                    style={{ margin: 15 }}
                  />

                  <Container flex direction="column">
                    <AppText weight="bold" color="#fafafa" size={18}>
                      {result.name}
                    </AppText>
                    <AppText size={15} color="#fafafa">
                      {result.plats}
                    </AppText>
                  </Container>
                </Container>
              );
            })
          ) : (
            <Container flex alignHorizantle="center" alignVertical="center">
              <AppLogo width={200} height={200} />
            </Container>
          )}
        </Container>
      ) : (
        <Container
          flex
          height="100%"
          width="100%"
          style={{ backgroundColor: "#1D1D1D" }}
        >
          <Container
            flex
            direction="column"
            alignHorizantle="center"
            style={{ borderBottomColor: "#fafafa", borderBottomWidth: 2 }}
          >
            <Spacer height={1} />
            <AppText
              color="#fafafa"
              size={18}
              weight="bold"
              style={{ width: "60%", textAlign: "center" }}
            >
              Välj den bransch som passar dig bäst!
            </AppText>
            <Spacer height={1} />

            <Image
              source={require("../../../../assets/navigationIcons/jobs-icon.png")}
              height={40}
              width={40}
            />
            <Spacer height={0.5} />

            <Container
              touchable
              flex
              alignVertical="center"
              alignHorizantle="center"
              style={{ backgroundColor: "#2C559D" }}
              width={150}
              height={30}
              onClick={() => {
                setBranchesModal(true);
              }}
            >
              <AppText color="#fafafa" size={18} weight="bold">
                Branscher
              </AppText>
            </Container>
            <Spacer height={1} />
          </Container>
        </Container>
      )}

      {/* <BranchesIndurstrieScreen
        branchesModal={branchesModal}
        closeModal={() => {
          setBranchesModal(false);
        }}
      /> */}

      {/* <JobScreen
        visible={jobModal}
        closeModal={() => {
          setJobModal(false);
        }}
        jobInfo={selectedJob}
      /> */}
    </Container>
  );
};

export default JobsScreen;
