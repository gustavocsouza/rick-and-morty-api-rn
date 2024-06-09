import styled from "styled-components/native";

import { Platform, StatusBar } from "react-native";

const statusBarHeight = StatusBar.currentHeight;

const isAndroid = Platform.OS === "android"

export const Container = styled.SafeAreaView`
  margin-top: ${isAndroid ? `${statusBarHeight}px` : 0};
  padding: 20px 8px;
`;

export const ItemSeparator = styled.View`
  height: 10px;
`;
