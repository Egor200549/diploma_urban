import styled from "styled-components";
import CheckBox from "../CheckBox/CheckBox";
import { Colors } from "../Interfaces/Colors";
import { fontSizes, fontWeights } from "../Interfaces/Font";
import { Text } from "../Text/Text";
import { FC } from "react";

const Genders = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

interface Props {
    handleGender: (value: string) => void;
}

const Gender: FC<Props> = ({ handleGender }) => {
    return (
        <>
            <Text weight={fontWeights.NORMAL} fontSize={fontSizes.PARAGRAPH_16} lineHeight={16} color={Colors.TEXT}>
                Пол
            </Text>
            <Genders>
                <CheckBox id={"male"} name={"gender"} value={"Мужской"} onChange={() => handleGender('Мужской')}>мужской</CheckBox>
                <CheckBox id={"female"} name={"gender"} value={"Женский"} onChange={() => handleGender('Женский')}>женский</CheckBox>
            </Genders>
        </>
    )
}

export default Gender;