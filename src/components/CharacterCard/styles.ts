import styled from "styled-components/native";

export const CharacterContainer = styled.Pressable`
  flex-direction: column;
  flex: 1;
  align-items: center;
  margin: 0 4px;
`;

export const CharacterImage = styled.Image`
  width: 100%;
  height: 120px;
  border-radius: 5px 5px 0 0;
`;

export const CharacterInfo = styled.View`
  background: #fff;
  width: 100%;
  min-height: 100px;
  border-radius: 0 0 5px 5px;
  align-items: center;
  justify-content: center;
`;
