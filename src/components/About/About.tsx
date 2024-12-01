import styled from "styled-components";
import { Colors } from "../Interfaces/Colors";
import { Text } from "../Text/Text";
import { fontSizes, fontWeights } from "../Interfaces/Font";
import image from '/Mask Group.png';
import figure from '/figure.png';

const About = () => {
    return (
        <StyledSection id="about">
            <StyledText>
                <Text weight={fontWeights.BOLD} fontSize={fontSizes.H2_30} lineHeight={30} color={Colors.WHITE}>
                    Пара слов о нас
                </Text>
                <Text weight={fontWeights.NORMAL} fontSize={fontSizes.PARAGRAPH_16} lineHeight={22.4} color={Colors.WHITE}>
                    Спорт держит нас в форме. Учит дисциплине. Объединяет нас. Через спорт мы можем менять жизни. В том числе с помощью воодушевляющих историй спортсменов. Чтобы помочь тебе подняться и двигаться вперед.
                </Text>
                <Text weight={fontWeights.NORMAL} fontSize={fontSizes.PRICE_20} lineHeight={20} color={Colors.WHITE}>
                    &mdash; SneakMax
                </Text>
            </StyledText>
            <img src={image} alt="image" />
            <Back src={figure} alt="backgorund" />
        </StyledSection>
    )
}

export default About;

const StyledSection = styled.section`
    position: relative;
    background-color: ${Colors.BG};
    padding-inline: 19%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 50px;

    @media (width <= 1200px) {
        padding-inline: 10%;
    }

    @media (width <= 950px) {
        padding-inline: 5%;
    }

    img {
        width: 680px;

        @media (width <= 1600px) {
            width: 400px;
        }

        @media (width <= 800px) {
            display: none;
        }
    }
`

const StyledText = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
    padding-block: 5%;

    p:nth-child(3) {
        align-self: flex-end;
    }

    @media (width <= 800px) {
        padding-block: 40px;
    }
`

const Back = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 28%;
`