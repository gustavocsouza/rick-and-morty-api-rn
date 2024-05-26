import styled from "styled-components/native";

import { Platform, StatusBar } from "react-native";

const statusBarHeight = StatusBar.currentHeight;

const isAndroid = Platform.OS === "android"

export const Container = styled.SafeAreaView`
  margin-top: ${isAndroid ? `${statusBarHeight}px` : 0};
`;

export const CharacterContainer = styled.View`
  flex-direction: row;
`;
