import styled from "styled-components";
import { Sneakers } from "../Interfaces/Sneakers";
import { FC } from "react";
import { Text } from "../Text/Text";
import { fontSizes, fontWeights } from "../Interfaces/Font";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store";
import { delBasket } from "../features/basketSlice";

interface Props {
    item: Sneakers
}

const OrderItem: FC<Props> = ({ item }) => {

    const dispatch = useDispatch<AppDispatch>();

    const handleDelete = (id: number) => {
        dispatch(delBasket(id));
    }

    return (
        <Article>
            <div>
                <Image style={{ backgroundImage: `url(${item.imgUrl})` }} />
                <Description>
                    <Text weight={fontWeights.NORMAL} fontSize={fontSizes.MENU_14} lineHeight={20} color={'#4D4D4D'}>
                        {item.title}
                    </Text>
                    <Text weight={fontWeights.BOLD} fontSize={fontSizes.PRICE_20} lineHeight={20} color={'#4D4D4D'}>
                        {item.price} ₽
                    </Text>
                </Description>
            </div>
            <Button onClick={() => handleDelete(item.id)}>
                <Text weight={fontWeights.NORMAL} fontSize={fontSizes.MENU_14} lineHeight={14} color={'#B2B5BB'}>
                    Удалить
                </Text>
            </Button>
        </Article>
    )
}

export default OrderItem;

const Button = styled.button`
    border: 0;
    background: transparent;
    cursor: pointer;
`

const Description = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 14px;
`

const Image = styled.div`
    width: 80px;
    height: 80px;
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
`

const Article = styled.article`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding-block: 10px;

    & > div {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
        gap: 10px;
    }
`