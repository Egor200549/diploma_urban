import { Swiper, SwiperSlide } from "swiper/react";
import SwiperButton from "../SwiperButton/SwiperButton"
import "swiper/swiper-bundle.css";
import styled from "styled-components";
import { Colors, ColorsActive, ColorsHover } from "../Interfaces/Colors";
import { Text } from "../Text/Text";
import { fontSizes, fontWeights } from "../Interfaces/Font";
import image from '/sneaker.png';
import image2 from '/Rectangle 45.png';
import CheckBox from "../CheckBox/CheckBox";
import { FormEvent } from "react";

interface Size {
    id: number,
    text: string
}

const sizes: Size[] = [
    { id: 1, text: 'менее 36' },
    { id: 2, text: '36-38' },
    { id: 3, text: '39-41' },
    { id: 4, text: '42-44' },
    { id: 5, text: '45 и больше' }
]

const SwiperComponent = () => {

    const handleForm = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log('Sent!');
    }
    return (
        <StyledSection id="selection">
            <Swiper>
                <SwiperSlide>
                    <Slice>
                        <Text weight={fontWeights.BOLD} fontSize={fontSizes.H2_30} lineHeight={30} color={Colors.TEXT}>
                            Мы подберем идеальную пару для вас
                        </Text>
                        <div>
                            <Text weight={fontWeights.NORMAL} fontSize={fontSizes.PARAGRAPH_16} lineHeight={16} color={'#808080'}>
                                Ответьте на три вопроса и мы вышлем каталог с самыми подходящими для вас моделями
                            </Text>
                            <Line />
                        </div>
                        <Text weight={fontWeights.NORMAL} fontSize={fontSizes.H3_24} lineHeight={24} color={Colors.TEXT}>
                            Какой тип кроссовок рассматриваете?
                        </Text>
                        <Grid>
                            {
                                Array(6).fill(null).map((_, i) => {
                                    return (
                                        <Card key={i}>
                                            <img src={image} alt="image" />
                                            <CheckBox id={`sneakers${i}`} name={"sneakers"} value={"sneakers"}>кеды</CheckBox>
                                        </Card>
                                    )
                                })
                            }
                        </Grid>
                        <Line />
                        <div style={{ alignSelf: 'flex-end' }}>
                            <SwiperButton />
                        </div>
                    </Slice>
                </SwiperSlide>
                <SwiperSlide>
                    <Slice>
                        <Text weight={fontWeights.BOLD} fontSize={fontSizes.H2_30} lineHeight={30} color={Colors.TEXT}>
                            Мы подберем идеальную пару для вас
                        </Text>
                        <div>
                            <Text weight={fontWeights.NORMAL} fontSize={fontSizes.PARAGRAPH_16} lineHeight={16} color={'#808080'}>
                                Ответьте на три вопроса и мы вышлем каталог с самыми подходящими для вас моделями
                            </Text>
                            <Line />
                        </div>
                        <Text weight={fontWeights.NORMAL} fontSize={fontSizes.H3_24} lineHeight={24} color={Colors.TEXT}>
                            Какой размер вам подойдет?
                        </Text>
                        <Flex>
                            {
                                sizes.map((item, i) => {
                                    return (
                                        <CheckBox id={`size${i}`} name={"sneakers"} value={item.text} key={i}>{item.text}</CheckBox>
                                    )
                                })
                            }
                        </Flex>
                        <img src={image2} alt="image2" />
                        <Line />
                        <div style={{ alignSelf: 'flex-end' }}>
                            <SwiperButton />
                        </div>
                    </Slice>
                </SwiperSlide>
                <SwiperSlide>
                    <Slice>
                        <Text weight={fontWeights.BOLD} fontSize={fontSizes.H2_30} lineHeight={30} color={Colors.TEXT}>
                            Мы подберем идеальную пару для вас
                        </Text>
                        <div>
                            <Text weight={fontWeights.NORMAL} fontSize={fontSizes.PARAGRAPH_16} lineHeight={16} color={'#808080'}>
                                Ответьте на три вопроса и мы вышлем каталог с самыми подходящими для вас моделями
                            </Text>
                            <Line />
                        </div>
                        <Text weight={fontWeights.NORMAL} fontSize={fontSizes.H3_24} lineHeight={24} color={Colors.TEXT}>
                            Уточните какие-либо моменты
                        </Text>
                        <Message name="message" id="message" placeholder="Введите сообщение"></Message>
                        <Line />
                        <div style={{ alignSelf: 'flex-end' }}>
                            <SwiperButton />
                        </div>
                    </Slice>
                </SwiperSlide>
                <SwiperSlide>
                    <Slice>
                        <Text weight={fontWeights.BOLD} fontSize={fontSizes.H2_30} lineHeight={30} color={Colors.TEXT}>
                            Ваша подборка готова!
                        </Text>
                        <div>
                            <Text weight={fontWeights.NORMAL} fontSize={fontSizes.PARAGRAPH_16} lineHeight={16} color={Colors.SMALLTEXT}>
                                Ответьте на три вопроса и мы вышлем каталог с самыми подходящими для вас моделями
                            </Text>
                            <LineSmall />
                        </div>
                        <StyledForm onSubmit={(e) => handleForm(e)}>
                            <Text weight={fontWeights.BOLD} fontSize={fontSizes.H1_36} lineHeight={50.4} color={Colors.WHITE}>
                                Получить предложение
                            </Text>
                            <Text weight={fontWeights.NORMAL} fontSize={18} lineHeight={25.2} color={Colors.WHITE}>
                                Получите подборку подходящих для вас моделей на почту
                            </Text>
                            <Inputs>
                                <StyledInput type="text" name="name" id="name" placeholder="Ваше имя" />
                                <StyledInput type="email" name="email" id="email" placeholder="E-mail" />
                            </Inputs>
                            <Submit type="submit">Получить</Submit>
                        </StyledForm>
                    </Slice>
                </SwiperSlide>
            </Swiper>
        </StyledSection>
    )
}

export default SwiperComponent;

const Submit = styled.button`
    width: 55%;
    position: relative;
    font-weight: 400;
    font-size: 16px;
    line-height: 16px;
    border-radius: 4px;
    cursor: pointer;
    transition: background 0.25s;

    &: disabled {
        display: none;
    }

    background-color: ${Colors.ACCENT};
    color: ${Colors.WHITE};
    padding: 22px 47px;
    border: 0;

    &: hover {
        background-color: ${ColorsHover.ACCENT};
    }

    &:active {
        background-color: ${ColorsActive.ACCENT};
    }

    @media (width <= 768px) {
        width: 100%;
    }
`

const Inputs = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`

const StyledInput = styled.input`
    padding: 20px;
    border-radius: 4px;
    border: 0;
    outline: 0;
    color: ${Colors.GRAY};
    font-size: 16px;
`

const StyledForm = styled.form`
    width: 65%;
    background-color: ${Colors.SMALLTEXT};
    border-radius: 4px;
    padding: 30px;
    display: flex;
    flex-direction: column;
    gap: 15px;

    @media (width <= 1440px) {
        width: calc(100% - 60px);
    }
`

const Message = styled.textarea`
    max-width: 465px;
    width: calc(100% - 40px);
    height: 220px;
    border-radius: 4px;
    resize: none;
    border: 0;
    outline: 0;
    padding: 20px;
    color: ${Colors.SMALLTEXT};
    font-size: 16px;
`

const Card = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;

    & > img {
        width: 100%;
    }
`

const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 70px;
    row-gap: 20px;

    @media (width <= 1024px) {
        grid-template-columns: 1fr 1fr;
    }

    @media (width <= 426px) {
        grid-template-columns: 1fr;
    }
`

const Flex = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 10px;

    & > div > label {
        text-wrap-mode: nowrap;
    }
`

const Line = styled.div`
    margin-top: 10px;
    height: 1px;
    width: 100%;
    background-color: #808080;
`

const LineSmall = styled(Line)`
    background-color: ${Colors.SMALLTEXT};
`

const Slice = styled.div`
    height: 100%;
    background-color: ${Colors.SEC};
    padding: 40px 100px;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    gap: 20px;

    @media (width <= 1440px) {
        padding: 20px 5%;
    }
`

const StyledSection = styled.section`
    padding: 60px 19%;

    @media (width <= 1024px) {
        padding-inline: 10%;
    }

    @media (width <= 426px) {
        padding-inline: 5%;
    }
`