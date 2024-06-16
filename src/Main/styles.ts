import styled from "styled-components/native";

import { Platform, StatusBar } from "react-native";

const statusBarHeight = StatusBar.currentHeight;

const isAndroid = Platform.OS === "android"

export const Container = styled.SafeAreaView`
  margin-top: ${isAndroid ? `${statusBarHeight}px` : 0};
  padding: 20px 8px;
  background: #025959;
  flex: 1;
`;

export const SearchInput = styled.TextInput`
  background: #fff;
  font-size: 20px;
  padding: 16px;
  border-radius: 28px;
  margin-bottom: 24px;
`;

export const ItemSeparator = styled.View`
  height: 10px;
`;
