import styled from "styled-components";
import { Text } from "../Text/Text";
import { fontSizes, fontWeights } from "../Interfaces/Font";
import { Colors, ColorsActive, ColorsHover } from "../Interfaces/Colors";
import image from '/1024px-Instagram_logo 1.png';
import image2 from '/Rectangle 37.jpg';
import image3 from '/Rectangle 38.jpg';
import image4 from '/Rectangle 39.jpg';
import image5 from '/Rectangle 40.jpg';
import image6 from '/Rectangle 41.jpg';
import { SubmitHandler, useForm } from "react-hook-form";

interface FormData {
    name: string,
    tel: string
}

const Insta = () => {

    const { register, handleSubmit } = useForm<FormData>();

    const onSubmit: SubmitHandler<FormData> = (data) => {
        console.log({
            name: data.name,
            tel: data.tel,
            status: 'sent'
        })
    }

    return (
        <StyledSection>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <Text weight={fontWeights.BOLD} fontSize={fontSizes.H2_30} lineHeight={30} color={Colors.WHITE}>
                        Есть вопросы?
                    </Text>
                    <Text weight={fontWeights.NORMAL} fontSize={fontSizes.PARAGRAPH_16} lineHeight={16} color={Colors.WHITE}>
                        Заполните форму и наш менеджер свяжется с вами
                    </Text>
                </div>
                <Actions>
                    <input type="text" placeholder="Ваше имя" {...register('name')} />
                    <input type="tel" placeholder="Номер телефона" {...register('tel')} />
                    <Button type="submit">Отправить</Button>
                </Actions>
            </Form>
            <Photos>
                <img src={image} alt="logo" />
                <Grid>
                    <img src={image2} alt="image" />
                    <img src={image3} alt="image" />
                    <img src={image5} alt="image" />
                    <img src={image4} alt="image" />
                    <img src={image6} alt="image" />
                </Grid>
            </Photos>
        </StyledSection>
    )
}

export default Insta;

const Button = styled.button`
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
`

const Grid = styled.div`
    display: grid;
    grid-template-columns: 157px 157px 157px;
    grid-template-rows: 161px 161px;
    column-gap: 18px;
    row-gap: 14px;

    & > img:nth-child(2) {
        grid-row-start: 1;
        grid-row-end: 2;
        grid-column-start: 2;
        grid-column-end: 3;
    }

    & > img:nth-child(3) {
        grid-column: 4;
        grid-row: 1;
    }

    & > img:nth-child(4) {
        grid-column: 1;
        grid-row: 2;
    }

    & > img:nth-child(5) {
        grid-column: 4;
        grid-row: 2;
    }

    @media (width <= 1440px) {
        justify-content: center;
    }

    @media (width <= 768px) {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 15px;

        & > img {
            width: calc(50% - 30px);
        }
    }
`

const Photos = styled.div`
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: space-between;
    gap: 20px;

    & > img {
        align-self: center;
    }
`

const Actions = styled.div`
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    gap: 10px;

    & > input {
        border: 0;
        outline: 0;
        border-radius: 4px;
        padding: 20px;
        font-size: 16px;
        color: #B2B5BB;
    }
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
    background-color: ${Colors.BG};
    padding: 40px 20px;
    border-radius: 4px;
    text-align: center;

    & > div:first-child > p:last-child {
        margin-top: 20px;
    }
`

const StyledSection = styled.section`
    padding: 60px 19% 82px 19%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 60px;

    @media (width <= 1440px) {
        flex-direction: column-reverse;
        align-items: stretch;
        gap: 30px;
    }

    @media (width <= 1024px) {
        padding-inline: 10%;
    }

    @media (width <= 426px) {
        padding-inline: 5%;
    }
`