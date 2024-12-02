import styled from "styled-components";
import Hero from "../../components/Hero/Hero";
import { Text } from "../../components/Text/Text";
import { fontSizes, fontWeights } from "../../components/Interfaces/Font";
import { Colors } from "../../components/Interfaces/Colors";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { Sneakers } from "../../components/Interfaces/Sneakers";
import OrderItem from "../../components/OrderItem/OrderItem";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { resetBasket } from "../../components/features/basketSlice";
import { useNavigate } from "react-router";

interface FormData {
    name: string,
    tel: string,
    email: string
}

const Order = () => {

    const items = useSelector<RootState, Sneakers[]>((state) => state.basket.data);

    const total = useSelector<RootState, number>((state) => {
        return state.basket.data.reduce(
            (acc, el) => {
                return acc + el.price
            }, 0
        )
    });

    const [list, setList] = useState<boolean>(false);

    const handleList = () => {
        setList(prevState => !prevState);
    }

    const { register, handleSubmit } = useForm<FormData>();
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();

    const OnSubmit: SubmitHandler<FormData> = (data) => {
        console.log({
            name: data.name,
            tel: data.tel,
            email: data.email
        })

        dispatch(resetBasket());
        navigate(`/diploma_urban/`);
    }

    return (
        <>
            <Back></Back>
            <Hero />
            <Modal>
                <Head>
                    <Text weight={fontWeights.BOLD} fontSize={fontSizes.PRICE_20} lineHeight={20} color={Colors.TEXT}>
                        Оформление заказа
                    </Text>
                    <Text weight={fontWeights.NORMAL} fontSize={fontSizes.MENU_14} lineHeight={14} color={Colors.GRAY}>
                        Заказ 3456 67
                    </Text>
                </Head>
                <OrderList>
                    <Characteristics>
                        <div>
                            <Text weight={fontWeights.NORMAL} fontSize={fontSizes.PARAGRAPH_16} lineHeight={16} color={Colors.GRAY}>
                                Товаров в заказе:
                            </Text>
                            <Text weight={fontWeights.BOLD} fontSize={fontSizes.PARAGRAPH_16} lineHeight={16} color={Colors.TEXT}>
                                {items.length}
                            </Text>
                        </div>
                        <div>
                            <Text weight={fontWeights.NORMAL} fontSize={fontSizes.PARAGRAPH_16} lineHeight={16} color={Colors.GRAY}>
                                Общая сумма заказа:
                            </Text>
                            <Text weight={fontWeights.BOLD} fontSize={fontSizes.PARAGRAPH_16} lineHeight={16} color={Colors.TEXT}>
                                {Intl.NumberFormat('ru-RU').format(total)} ₽
                            </Text>
                        </div>
                        <div>
                            <Input type="checkbox" name="list" id="list" onChange={handleList} />
                            <Label htmlFor="list">
                                <Text weight={fontWeights.NORMAL} fontSize={fontSizes.PARAGRAPH_16} lineHeight={16} color={Colors.TEXT}>
                                    Состав заказа
                                </Text>
                                <svg width="7" height="8" viewBox="0 0 7 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0_65_784)">
                                        <path d="M6.92012 5.68997C6.81343 5.79687 6.64032 5.79704 6.53341 5.69037L3.69335 2.8562C3.58672 2.74959 3.41327 2.7496 3.30645 2.85641L0.466594 5.69037C0.359693 5.79705 0.18658 5.79687 0.0798849 5.68997C-0.0267831 5.58307 -0.0266053 5.40994 0.0802814 5.30328L2.91994 2.46951C3.07992 2.30956 3.28999 2.22961 3.50008 2.22961C3.71005 2.22961 3.92007 2.30953 4.07984 2.46932L6.91972 5.30328C7.02661 5.40994 7.02678 5.58307 6.92012 5.68997Z" fill="#444B58" />
                                    </g>
                                </svg>
                            </Label>
                        </div>
                    </Characteristics>
                    <List>
                        {
                            list && items.length === 0 && <p>Корзина пустая</p>
                        }
                        {
                            list && items.map((item) => { return <OrderItem item={item} key={item.id} /> })
                        }
                    </List>
                    <Form onSubmit={handleSubmit(OnSubmit)}>
                        <input type="text" placeholder="Ваше имя" {...register('name')} />
                        <input type="tel" placeholder="Номер телефона" {...register('tel')} />
                        <input type="email" placeholder="E-mail" {...register('email')} />
                        <button type="submit">Оформить заказ</button>
                    </Form>
                </OrderList>
            </Modal>
        </>
    )
}

export default Order;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: stretch;
    gap: 10px;

    & > input {
        background-color: #F6F6F6;
        outline: 0;
        border: 0;
        border-radius: 4px;
        padding: 20px;
        color: #B2B5BB;
        font-weight: 400;
        font-size: 16px;
        line-height: 22.4px;
    }

    & > button {
        width: fit-content;
        font-size: 16px;
        font-weight: 400;
        line-height: 16px;
        color: white;
        margin-top: 20px;
        border: 0;
        background-color: ${Colors.ACCENT};
        padding: 22px 47px 22px 47px;
        border-radius: 4px;
    }
`

const Label = styled.label`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 5px;
    cursor: pointer;
`

const Input = styled.input`
    display: none;

    &:checked + ${Label} > svg {
        transform: rotate(180deg);
    }
`

const List = styled.div`
    flex-direction: column !important;
    align-items: stretch !important;
    gap: 14px !important;
`

const Characteristics = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 17px;

    & > div {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 10px;
    }
`

const OrderList = styled.div`
    display: flex;
    flex-direction: column;
    align-items: stretch;
    gap: 20px;
    border: 1px solid #D9D9D9;
    border-radius: 4px;
    padding: 30px;
`

const Head = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

const Modal = styled.div`
    position: absolute;
    top: 120px;
    left: 50%;
    width: 580px;
    transform: translateX(-50%);
    z-index: 999;
    background-color: white;
    padding: 40px;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    gap: 40px;

    @media (width <=1120px) {
        width: 75%;
    }

    @media (width <=576px) {
        top: 80px;
        width: 90%;
        padding: 30px 3%;
    }
`

const Back = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #444B58B2;
    z-index: 998;
`