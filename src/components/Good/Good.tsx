import styled, { css } from "styled-components";
import { Colors } from "../Interfaces/Colors";
import { fontSizes, fontWeights } from "../Interfaces/Font";
import { Text } from "../Text/Text";
import { FC } from "react";
import { Sneakers } from "../Interfaces/Sneakers";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store";
import { postBasket } from "../features/basketSlice";
import { Link } from "react-router-dom";

const Back = styled.div`
    display: none;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.6);
`

const Card = styled.article`
    display: flex;
    flex-direction: column;
    align-items: stretch;
    gap: 10px;

    &: hover {
        ${Back} {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            gap: 40px;
        }
    }
`

const Image = styled.div`
    position: relative;
    width: 280px;
    height: 293px;
    border-radius: 4px;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
`

const Action = styled.div`
    width: 80px;
    height: 80px;
    background-color: ${Colors.TEXT};
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    cursor: pointer;
`

const Actions = css`
    width: 80px;
    height: 80px;
    background-color: ${Colors.TEXT};
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    cursor: pointer;
`

const Add = styled.button`
    border: 0;
    ${Actions}
`

interface Props {
    item: Sneakers
}

const Good: FC<Props> = ({ item }) => {

    const dispatch = useDispatch<AppDispatch>();

    return (
        <Card>
            <Image style={{ backgroundImage: `url(${item.imgUrl})` }}>
                <Back>
                    <Action>
                        <Link className="round_link" to={`/diploma_urban/sneakers/${item.id}`}>
                            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M18.9518 15.0664C18.9518 17.2489 17.1818 19.0176 14.9993 19.0176C12.8168 19.0176 11.0481 17.2489 11.0481 15.0664C11.0481 12.8826 12.8168 11.1139 14.9993 11.1139C17.1818 11.1139 18.9518 12.8826 18.9518 15.0664Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M14.9975 24.1936C19.7575 24.1936 24.1113 20.7711 26.5625 15.0661C24.1113 9.3611 19.7575 5.9386 14.9975 5.9386H15.0025C10.2425 5.9386 5.88875 9.3611 3.4375 15.0661C5.88875 20.7711 10.2425 24.1936 15.0025 24.1936H14.9975Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </Link>
                    </Action>
                    <Add onClick={() => dispatch(postBasket({
                        id: item.id,
                        vendorСode: item.vendorСode,
                        inStock: item.inStock,
                        title: item.title,
                        description: item.description,
                        imgUrl: item.imgUrl,
                        stars: item.stars,
                        size: item.sizes?.[0],
                        price: item.price,
                        oldPrice: item.oldPrice,
                        gender: item.gender,
                        color: item.color,
                        compound: item.compound,
                        country: item.country
                    }))}>
                        <svg width="28" height="26" viewBox="0 0 28 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M27.9999 9.28571H23.2454L18.2502 0.450683C18.0025 0.0118078 17.465 -0.131483 17.0497 0.132405C16.6353 0.396293 16.5011 0.966644 16.7498 1.40646L21.2046 9.28571H6.79543L11.2502 1.40639C11.4989 0.966581 11.3647 0.39623 10.9503 0.132342C10.5342 -0.131546 9.99842 0.0117453 9.74975 0.450621L4.75464 9.28565H0V11.1428H1.89911L4.12206 23.7266C4.35446 25.0442 5.43966 26 6.70265 26H21.2974C22.5603 26 23.6455 25.0442 23.8771 23.7275L26.1008 11.1428H28L27.9999 9.28571ZM22.1569 23.3857C22.08 23.8246 21.7186 24.1429 21.2973 24.1429H6.70265C6.28138 24.1429 5.91996 23.8246 5.84219 23.3848L3.67904 11.1428H24.321L22.1569 23.3857Z" fill="white" />
                        </svg>
                    </Add>
                </Back>
            </Image>
            <Text weight={fontWeights.NORMAL} fontSize={fontSizes.PARAGRAPH_16} lineHeight={16} color={Colors.TEXT}>
                {item.title}
            </Text>
            <Text weight={fontWeights.NORMAL} fontSize={fontSizes.PRICE_20} lineHeight={20} color={Colors.TEXT}>
                {Intl.NumberFormat('ru-RU').format(Number(item.price.toString().replace(/\s+/g, '')))} p
            </Text>
        </Card>
    )
}

export default Good;