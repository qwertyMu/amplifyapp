/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import NavBar from "./NavBar";
import EditProfile from "./EditProfile";
import { View } from "@aws-amplify/ui-react";
export default function DesktopFrame(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="1679px"
      height="2919px"
      overflow="hidden"
      position="relative"
      border="1px SOLID rgba(0,0,0,1)"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,240,106,0.17)"
      {...rest}
      {...getOverrideProps(overrides, "DesktopFrame")}
    >
      <NavBar
        display="flex"
        gap="20px"
        position="absolute"
        top="0px"
        left="calc(50% - 839.5px - 0px)"
        direction="row"
        width="1679px"
        height="104px"
        justifyContent="center"
        alignItems="center"
        padding="24px 32px 24px 32px"
        backgroundColor="rgba(255,240,106,1)"
        {...getOverrideProps(overrides, "NavBar")}
      ></NavBar>
      <EditProfile
        display="flex"
        gap="16px"
        position="absolute"
        top="160px"
        left="77px"
        direction="column"
        width="640px"
        boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,240,106,1)"
        {...getOverrideProps(overrides, "EditProfile31512747")}
      ></EditProfile>
      <EditProfile
        display="flex"
        gap="16px"
        position="absolute"
        top="160px"
        left="77px"
        direction="column"
        width="640px"
        boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,240,106,1)"
        {...getOverrideProps(overrides, "EditProfile31532853")}
      ></EditProfile>
    </View>
  );
}
