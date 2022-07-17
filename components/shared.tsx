import { Dimensions } from "react-native";
import styled from "styled-components/native";

export const container = styled.View`
    flex:1;
    align-items:center;
    background-color:black;
`;

export const Screenwidth = Dimensions.get("screen").width
export const Screenheight = Dimensions.get("screen").height
