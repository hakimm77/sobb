import React, { useEffect, useState } from "react";
import { Calendar } from "react-native-calendars";
import AppText from "../../../components/reusable/AppText";
import Container from "../../../components/reusable/Container";
import Spacer from "../../../components/reusable/Spacer";

const CalendarScreen = () => {
  return (
    <Container
      flex
      direction="column"
      height="100%"
      alignHorizantle="center"
      style={{ backgroundColor: "#1D1D1D" }}
    >
      <Spacer height={4} />

      <Calendar
        markingType={"multi-dot"}
        onDayPress={(day) => {
          console.log(day);
        }}
        enableSwipeMonths={true}
        hideExtraDays={true}
        style={{
          width: 340,
          height: 380,
          borderRadius: 10,
          borderWidth: 1,
          borderColor: "#fafafa",
        }}
        theme={{
          calendarBackground: "#1D1D1D",
          dayTextColor: "white",
          todayTextColor: "#00adf5",
          selectedDayTextColor: "white",
          monthTextColor: "white",
          selectedDayBackgroundColor: "#333248",
        }}
      />
    </Container>
  );
};

export default CalendarScreen;
