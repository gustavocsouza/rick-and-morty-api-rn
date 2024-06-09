import styled from "styled-components/native";

interface TextProps {
  size: string;
  weight: string;
}

export default styled.Text<TextProps>`
  font-size: ${(({ size }) => size ? `${size}px` : '12px')};
  font-weight: ${(({ weight }) => weight ? `${weight}` : '300')};
  text-align: center;
`;
