import styled from 'styled-components/native';

interface ButtonProps {
  backgroundColor: string;
}

export const Container = styled.View`
  flex: 1;
`;

export const Label = styled.Text`
  color: white;
  font-size: 24px;
  font-weight: bold;
  text-align: center;
`;

export const Button = styled.TouchableOpacity<ButtonProps>`
  width: 100%;
  height: 100px;
  align-items: center;
  justify-content: center;
  background-color: ${({backgroundColor}) => backgroundColor};
`;
