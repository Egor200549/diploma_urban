import { useParams } from "react-router";
import Intro from "../../components/Hero/Hero";
import styled from "styled-components";
import { useEffect, useState } from "react";
import axios from "axios";
import { Sneakers } from "../../components/Interfaces/Sneakers";
import { Text } from "../../components/Text/Text";
import { fontSizes, fontWeights } from "../../components/Interfaces/Font";
import { Colors } from "../../components/Interfaces/Colors";
import Size from "../../components/Size/Size";
import { TypesSize } from "../../components/Interfaces/TypesSize";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store";
import { postBasket } from "../../components/features/basketSlice";


const Product = () => {
    const params = useParams();
    const [data, setData] = useState<Sneakers>();
    const [size, setSize] = useState<number>();
    const [error, setError] = useState<boolean>(false);
    const [message, setMessage] = useState<boolean>(false);
    const dispatch = useDispatch<AppDispatch>();

    const load = () => {
        axios.get(`https://4935cb3cc240e9df.mokky.dev/sneakers/${params.id}`)
            .then((response) => {
                setData(response.data);
            })
            .catch(() => {
                throw new Error('Не удалось загрузить товар!');
            });

    }

    const hanldeSize = (selectedSize: number) => {
        setSize(selectedSize);
        setError(false);
    }

    const addGood = () => {
        if (!size) {
            setError(true);
            return;
        }

        dispatch(postBasket({
            id: data!.id,
            vendorСode: data!.vendorСode,
            inStock: data!.inStock,
            title: data!.title,
            description: data!.description,
            imgUrl: data!.imgUrl,
            stars: data!.stars,
            size: size,
            price: data!.price,
            oldPrice: data!.oldPrice,
            gender: data!.gender,
            color: data!.color,
            compound: data!.compound,
            country: data!.country
        }))

        setMessage(true);
        setTimeout(() => setMessage(false), 5000);
    }

    useEffect(load, [data?.sizes, params.id])

    return (
        <>
            <Back></Back>
            <Intro />
            <Modal>
                <img src={data?.imgUrl} alt="good" />
                <Column>
                    <Characteristics>
                        <div>
                            <Text weight={fontWeights.NORMAL} fontSize={fontSizes.PARAGRAPH_16} lineHeight={16} color={Colors.GRAY}>
                                Артикул:
                            </Text>
                            <Text weight={fontWeights.NORMAL} fontSize={fontSizes.PARAGRAPH_16} lineHeight={16} color={Colors.GRAY}>
                                {data?.vendorСode}
                            </Text>
                        </div>
                        <div>
                            <Text weight={fontWeights.NORMAL} fontSize={fontSizes.PARAGRAPH_16} lineHeight={16} color={Colors.GRAY}>
                                В наличии:
                            </Text>
                            <Text weight={fontWeights.NORMAL} fontSize={fontSizes.PARAGRAPH_16} lineHeight={16} color={Colors.TEXT}>
                                {data?.inStock}
                            </Text>
                        </div>
                    </Characteristics>
                    <Text weight={fontWeights.NORMAL} fontSize={fontSizes.H3_24} lineHeight={33.6} color={Colors.TEXT}>
                        {data?.title}
                    </Text>
                    <Stars>
                        {
                            Array(data?.stars).fill(null).map(
                                (_, i) =>
                                    <svg key={i} width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7.04894 0.92705C7.3483 0.00573921 8.6517 0.00573969 8.95106 0.92705L10.0206 4.21885C10.1545 4.63087 10.5385 4.90983 10.9717 4.90983H14.4329C15.4016 4.90983 15.8044 6.14945 15.0207 6.71885L12.2205 8.75329C11.87 9.00793 11.7234 9.4593 11.8572 9.87132L12.9268 13.1631C13.2261 14.0844 12.1717 14.8506 11.388 14.2812L8.58778 12.2467C8.2373 11.9921 7.7627 11.9921 7.41221 12.2467L4.61204 14.2812C3.82833 14.8506 2.77385 14.0844 3.0732 13.1631L4.14277 9.87132C4.27665 9.4593 4.12999 9.00793 3.7795 8.75329L0.979333 6.71885C0.195619 6.14945 0.598395 4.90983 1.56712 4.90983H5.02832C5.46154 4.90983 5.8455 4.63087 5.97937 4.21885L7.04894 0.92705Z" fill="#F14F4F" />
                                    </svg>
                            )
                        }
                    </Stars>
                    <ChooseSize>
                        <Text weight={fontWeights.NORMAL} fontSize={fontSizes.PARAGRAPH_16} lineHeight={16} color={Colors.TEXT}>
                            Выберите размер
                        </Text>
                        <Sizes>
                            {
                                data?.sizes?.map((item, index) =>
                                    <Size
                                        name={"sizes"}
                                        id={"size" + item}
                                        is={TypesSize.ACTIVE}
                                        value={item.toString()}
                                        onChange={() => hanldeSize(item)}
                                        key={index}
                                    >
                                        {item}
                                    </Size>)
                            }
                        </Sizes>
                        {error && <p style={{ fontWeight: 'bold', color: 'red' }}>Выберите размер</p>}
                    </ChooseSize>
                    <Price>
                        <Text weight={fontWeights.BOLD} fontSize={fontSizes.H2_30} lineHeight={30} color={Colors.TEXT}>
                            {data?.price}
                        </Text>
                        <Text weight={fontWeights.NORMAL} fontSize={fontSizes.PARAGRAPH_16} lineHeight={16} color={Colors.GRAY}>
                            {data?.oldPrice}
                        </Text>
                    </Price>
                    <Button  onClick={addGood}>Заказать</Button>
                    {message && <p style={{ fontWeight: 'bold', color: 'red' }}>Товар добавлен в корзину</p>}
                    <List>
                        <div>
                            <svg width="16" height="13" viewBox="0 0 16 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.93427 11.8713C5.7891 12.0174 5.59114 12.0991 5.38542 12.0991C5.1797 12.0991 4.98174 12.0174 4.83657 11.8713L0.453495 7.48135C-0.00142535 7.0258 -0.00142535 6.28728 0.453495 5.8325L1.00235 5.28288C1.45727 4.82733 2.19399 4.82733 2.64891 5.28288L5.38542 8.0232L12.7798 0.61852C13.2347 0.162967 13.9722 0.162967 14.4264 0.61852L14.9752 1.16814C15.4301 1.62369 15.4301 2.36222 14.9752 2.81699L5.93427 11.8713Z" fill="#B2B5BB" />
                            </svg>
                            <Text weight={fontWeights.NORMAL} fontSize={fontSizes.MENU_14} lineHeight={14} color={Colors.GRAY}>
                                Бесплатная доставка до двери
                            </Text>
                        </div>
                        <div>
                            <svg width="16" height="13" viewBox="0 0 16 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.93427 11.8713C5.7891 12.0174 5.59114 12.0991 5.38542 12.0991C5.1797 12.0991 4.98174 12.0174 4.83657 11.8713L0.453495 7.48135C-0.00142535 7.0258 -0.00142535 6.28728 0.453495 5.8325L1.00235 5.28288C1.45727 4.82733 2.19399 4.82733 2.64891 5.28288L5.38542 8.0232L12.7798 0.61852C13.2347 0.162967 13.9722 0.162967 14.4264 0.61852L14.9752 1.16814C15.4301 1.62369 15.4301 2.36222 14.9752 2.81699L5.93427 11.8713Z" fill="#B2B5BB" />
                            </svg>
                            <Text weight={fontWeights.NORMAL} fontSize={fontSizes.MENU_14} lineHeight={14} color={Colors.GRAY}>
                                Оплата заказа при получении
                            </Text>
                        </div>
                        <div>
                            <svg width="16" height="13" viewBox="0 0 16 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.93427 11.8713C5.7891 12.0174 5.59114 12.0991 5.38542 12.0991C5.1797 12.0991 4.98174 12.0174 4.83657 11.8713L0.453495 7.48135C-0.00142535 7.0258 -0.00142535 6.28728 0.453495 5.8325L1.00235 5.28288C1.45727 4.82733 2.19399 4.82733 2.64891 5.28288L5.38542 8.0232L12.7798 0.61852C13.2347 0.162967 13.9722 0.162967 14.4264 0.61852L14.9752 1.16814C15.4301 1.62369 15.4301 2.36222 14.9752 2.81699L5.93427 11.8713Z" fill="#B2B5BB" />
                            </svg>
                            <Text weight={fontWeights.NORMAL} fontSize={fontSizes.MENU_14} lineHeight={14} color={Colors.GRAY}>
                                Обмен в течении двух недель
                            </Text>
                        </div>
                    </List>
                </Column>
                <Info>
                    <Text weight={fontWeights.NORMAL} fontSize={fontSizes.H3_24} lineHeight={24} color={Colors.TEXT}>
                        Описание
                    </Text>
                    <Text weight={fontWeights.NORMAL} fontSize={fontSizes.PARAGRAPH_16} lineHeight={22.4} color={Colors.TEXT}>
                        {data?.description}
                    </Text>
                </Info>
                <Info>
                    <Text weight={fontWeights.NORMAL} fontSize={fontSizes.H3_24} lineHeight={24} color={Colors.TEXT}>
                        Характеристики
                    </Text>
                    <Features>
                        <Text weight={fontWeights.NORMAL} fontSize={fontSizes.PARAGRAPH_16} lineHeight={22.4} color={Colors.TEXT}>
                            Пол: {data?.gender}
                        </Text>
                        <Text weight={fontWeights.NORMAL} fontSize={fontSizes.PARAGRAPH_16} lineHeight={22.4} color={Colors.TEXT}>
                            Цвета: {data?.color}
                        </Text>
                        <Text weight={fontWeights.NORMAL} fontSize={fontSizes.PARAGRAPH_16} lineHeight={22.4} color={Colors.TEXT}>
                            Состав: {data?.compound}
                        </Text>
                        <Text weight={fontWeights.NORMAL} fontSize={fontSizes.PARAGRAPH_16} lineHeight={22.4} color={Colors.TEXT}>
                            Страна: {data?.country}
                        </Text>
                    </Features>
                </Info>
            </Modal>
        </>
    )
}

export default Product;

const Button = styled.button`
    width: 100%;
    background-color: #F14F4F;
    color: #FFFFFF;
    padding-block: 22px;
    border: 0;
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

const Modal = styled.div`
    position: absolute;
    top: 120px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 999;
    background-color: white;
    padding: 43px 137px 63px 41px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 20px;
    row-gap: 60px;

    & > img {
        width: 538.25px;
        border-radius: 4px;
    }

    @media (width <=1120px) {
        width: 75%;
        grid-template-columns: 1fr;
        padding: 40px;
        gap: 40px;

        & > img {
            justify-self: center;
            width: 100%;
            max-width: 538.25px;
        }
    }

    @media (width <=576px) {
        top: 80px;
        width: 90%;
        grid-template-columns: 1fr;
        padding: 3%;
    }
`

const Column = styled.div`
    display: flex;
    flex-direction: column;
    align-items: stretch;
    gap: 20px;
`

const Characteristics = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 50px;

    & > div {
        display: flex;
        flex-wrap: nowrap;
        flex-direction: row;
        align-items: center;
        gap: 10px;
        width: max-content;
    }

    @media (width <=576px) {
        flex-wrap: wrap;
        gap: 10px;
    }
`

const Stars = styled.div`
    display: flex;
    flex-wrap: nowrap;
    flex-direction: row;
    align-items: center;
    gap: 4px;
`

const ChooseSize = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
`

const Sizes = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 20px;
`

const Price = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 25px;
`

const List = styled.div`
    display: flex;
    flex-direction: column;
    gap: 11px;

    & > div {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 10px;
    }
`

const Features = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`

const Info = styled.div`
    display: flex;
    flex-direction: column;
    gap: 25px;
`