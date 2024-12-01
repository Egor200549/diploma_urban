import styled from "styled-components";
import { Text } from "../Text/Text";
import { fontSizes, fontWeights } from "../Interfaces/Font";
import { Colors } from "../Interfaces/Colors";
import { FC } from "react";
import { Person } from "../features/teamSlice";

const Card = styled.article`
    display: flex;
    flex-direction: column;
    align-items: stretch;
    gap: 10px;

    @media (width <= 1024px) {
        width: 100%;

        & > p {
            align-self: center;
        }
    }
`

const Image = styled.div`
    width: 380px;
    height: 400px;
    border-radius: 4px;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;

    @media (width <= 1024px) {
        align-self: center;
        width: 100%;
        max-width: 380px;
    }
`

interface Props {
    item: Person
}

const Employee: FC<Props> = ({ item }) => {
    return (
        <Card>
            <Image style={{ backgroundImage: `url(${item.imgUrl})` }}></Image>
            <Text weight={fontWeights.BOLD} fontSize={fontSizes.H3_24} lineHeight={24} color={Colors.WHITE}>
                {item.name}
            </Text>
            <Text weight={fontWeights.NORMAL} fontSize={fontSizes.PARAGRAPH_16} lineHeight={16} color={Colors.WHITE}>
                {item.role}
            </Text>
        </Card>
    )
}

export default Employee;