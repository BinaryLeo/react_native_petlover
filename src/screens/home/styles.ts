import styled from "styled-components/native";

export const Wrapper = styled.View`
  width: 100%;
  height: 100%;
`;
export const Container = styled.View`
  margin-top: 50px;
  padding: 20px;
  height: 20%;
`;
export const Title = styled.Text`
  font-size: 16px;
  font-weight: bold;
`;
export const SubTitle = styled.Text`
  font-size: 14px;
  font-weight: bold;
`;
export const ResultLabel = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #a81bc4;
  margin-bottom: 10px;
`;
export const PickerContainer = styled.View`
  border-radius: 50px;
  overflow: hidden;
  width: 50%;
  margin-top: 20px;
`;
export const ResultContainer = styled.View`
  background-color: #f1e3f5;
  padding: 20px;
  flex: 1;
`;
export const WrapperList = styled.View`
  margin-top: 10px;
  height: 95%;
  overflow: scroll;
`;
export const CardContainer = styled.View`
  margin-bottom: 10px;
  flex-direction: row;
  background-color: #fff;
  border-radius: 10px;
`;
export const PictureContainer = styled.Image`
  width: 100px;
  height: 100px;
  border-bottom-left-radius: 10px;
  border-top-left-radius: 10px;
`;
export const InfoContainer = styled.View`
  flex-direction: column;
  margin-left: 10px;
  justify-content: center;
`;
