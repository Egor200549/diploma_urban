import styled from "styled-components";
import { Colors } from "../Interfaces/Colors";
import { Text } from "../Text/Text";
import { fontSizes, fontWeights } from "../Interfaces/Font";
import { Button } from "../Button/Button";
import { TypeButtons } from "../Interfaces/TypeButtons";

const Section = styled.section`
    background-color: ${Colors.BG};
    padding: 164px 19% 100px 19%;

    & button {
        z-index: 100;
    }

    @media (width <= 1024px) {
        padding-inline: 10%;
    }

    @media (width <= 768px) {
        padding: 140px 10% 80px 10%;
    }

    @media (width <= 426px) {
        padding: 120px 5% 60px 5%;
    }
`

const Block = styled.div`
    margin-top: 20px;
    margin-bottom: 40px;
    z-index: 100;
`

const Background = styled.div`
    position: absolute;
    top: 200px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 1;

    & > p {
        user-select: none;
    }

    @media (width <= 1024px) {
        & > p {
            font-size: clamp(40px, 18vw, 160px);
        }
    }

    @media (width <= 768px) {
        top: 150px;
    }

    @media (width <= 576px) {
        & > p {
            display: none;
        }
    }
`

const Texts = styled.div`
    width: 40%;

    @media (width <= 1440px) {
        width: 80%;
    }

    @media (width <= 768px) {
        width: 100%;

        & > p {
            font-size: 28px;
            line-height: unset;
        }
    }

    @media (width <= 576px) {
        & > p {
            font-size: 24px;
        }
    }
`

const Hero = () => {
    return (
        <Section>
            <Texts>
                <Text weight={fontWeights.NORMAL} fontSize={fontSizes.H1_36} lineHeight={50.4} color={Colors.WHITE}>
                    Кроссовки известных брендов с доставкой по России и СНГ
                </Text>
                <Block>
                    <Text weight={fontWeights.NORMAL} fontSize={fontSizes.PARAGRAPH_16} lineHeight={22.4} color={Colors.WHITE}>
                        Мы продаем кроссовки брендов Nike, Adidas, Puma, Reebok, Converse и многие другие по низким ценам
                    </Text>
                </Block>
            </Texts>
            <Button type={TypeButtons.BUTTON}>Перейти к покупкам</Button>
            <Background>
                <Text weight={fontWeights.BOLD} fontSize={200} lineHeight={200} color={'rgba(255, 255, 255, 0.12)'}>SneakMax</Text>
            </Background>
        </Section>
    )
}

export default Hero;