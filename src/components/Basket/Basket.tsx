import { useSelector } from "react-redux";
import styled from "styled-components";
import { RootState } from "../../store";
import { Sneakers } from "../Interfaces/Sneakers";
import BasketItem from "../BasketItem/BasketItem";
import { useNavigate } from "react-router-dom";
import { TypeButtons } from "../Interfaces/TypeButtons";
import { Button } from "../Button/Button";
import { Text } from "../Text/Text";
import { fontSizes, fontWeights } from "../Interfaces/Font";

const Basket = () => {

    const items = useSelector<RootState, Sneakers[]>((state) => state.basket.data);

    const total = useSelector<RootState, number>((state) => {
        return state.basket.data.reduce(
            (acc, el) => {
                return acc + el.price
            }, 0
        )
    });

    const navigate = useNavigate();

    const MoveTo = () => {
        navigate(`/order`);
    }

    return (
        <StyledSection>
            <Goods>
                {
                    items.map((item) => { return <BasketItem item={item} /> })
                }
                {
                    items.length === 0 && <p style={{margin: '20px'}}>Корзина пустая</p>
                }
            </Goods>
            <Price>
                <div>
                    <Text weight={fontWeights.NORMAL} fontSize={fontSizes.MENU_14} lineHeight={20} color={'#4D4D4D'}>
                        Итого:
                    </Text>
                    <Text weight={fontWeights.BOLD} fontSize={fontSizes.PRICE_20} lineHeight={20} color={'#4D4D4D'}>
                        {Intl.NumberFormat('ru-RU').format(total)}
                    </Text>
                </div>
                <Button type={TypeButtons.BUTTON} onClick={MoveTo}>Перейти в корзину</Button>
            </Price>
        </StyledSection>
    )
}

export default Basket;

const Price = styled.div`
    padding: 20px 20px 13px 20px;
    box-shadow: 0px -4px 10px 0px #000D541A;
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: space-between;
    
    & > div {
        display: flex;
        flex-direction: column;
        gap: 10px;
        padding-bottom: 7px;
    }
`

const StyledSection = styled.section`
    position: absolute;
    top: 64px;
    right: 19%;
    width: 480px;
    background-color: white;
    z-index: 998;

    @media (width <= 1024px) {
        right: 10%;
    }

    @media (width <= 426px) {
        right: 5%;
    }
`

const Goods = styled.div`
    overflow-y: auto;
    height: 323px;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    box-shadow: 0px 4px 4px 0px #87878740;
`