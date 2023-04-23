import styled from "styled-components/native";

export const Container = styled.View`
  align-items: flex-start;
  justify-content: center;
  padding: 20px;
  margin-top: 120px;
`;
export const Title = styled.Text`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 5px;
`;
export const Subtitle = styled.Text`
  font-size: 16px;
  margin-bottom: 5px;
`;
export const Inputlabel = styled.Text`
  color: #a81bc4;
  font-weight: 500;
`;
export const Picture = styled.Image`
  width: 50px;
  height: 50px;
  margin-bottom: 20px;
`;
export const InputContainer = styled.View`
  width: 100%;
  margin-top: 50px;
  gap: 10px;
`;
export const Input = styled.TextInput`
  height: 40px;
  width: 100%;
  border-bottom-width: 1px;
  border-bottom-color: gray;
  padding-bottom: 5px;
  padding-horizontal: 10px;
`;
export const SignInButton = styled.TouchableOpacity`
  background-color: #a81bc4;
  width: 90%;
  height: 50px;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  margin-top: 20px;
  margin-left: 20px;
`;
export const ButtonLabel = styled.Text`
  color: white;
`;
export const Loader = styled.ActivityIndicator`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  align-items: center;
  justify-content: center;
  color: #a81bc4;
`;
export const StatusContainer = styled.View`
width: 100%;
align-items: center;
margin-top: 20px;
`
export const Status = styled.Text`
  color: red;
  margin-top: 10px;
  font-size: 12px;
  text-align: center;
`;
