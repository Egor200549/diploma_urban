import styled, { keyframes } from "styled-components";
import { Colors } from "../Interfaces/Colors";
import { fontSizes, fontWeights } from "../Interfaces/Font";
import { Text } from "../Text/Text";
import { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { fetchBasket } from "../features/basketSlice";
import { Link } from 'react-scroll';
import { useNavigate } from "react-router";

const StyledHeader = styled.header`
    position: absolute;
    top: 0;
    left: 0;
    width: 62%;
    padding-inline: 19%;
    display: flex;
    flex-direction: row;
    align-items: center;

    @media (width <= 1024px) {
        width: 80%;
        padding-inline: 10%;
    }

    @media (width <= 426px) {
        width: 90%;
        padding-inline: 5%;
    }
`

const menu = keyframes`
    from {
        top: -100%;
    }

    to {
        top: 0;
    }
`

const StyledHeaderMenu = styled(StyledHeader)`
    width: 80%;
    padding-inline: 10%;
    top: -100%;
    animation: ${menu} 1s ease-in-out forwards;
    z-index: 999;

    @media (width <= 426px) {
        width: 90%;
        padding-inline: 5%;
    }
`

const StyledNav = styled.nav`
    height: 64px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #FFFFFF80;
`

const StyledNavMenu = styled.nav`
    width: 100%;
    display: grid;
    align-items: center;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 20px;
    padding: 20px;
    background-color: ${Colors.ACCENT};
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    box-shadow: 0 0 10px rgb(0, 0, 0, .4);

    
    & a, button {
        width: fit-content;
        height: fit-content;
    }
`

const StyledLinks = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    gap: 40px;

    @media (width <= 1470px) {
        & > a {
            display: none;
        }
    }
`

const StyledBusket = styled.button`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
    background: transparent;
    border: 0;
    cursor: pointer;
`

const StyledLink = styled.div`
    cursor: pointer;
    ${StyledLinks} > & {
        @media (width <= 1470px) {
            display: none;
        }
    }
`

const Icon = styled.div`
    position: relative;
`

const Counter = styled.div`
    position: absolute;
    min-width: 16px;
    bottom: -50%;
    right: -50%;
    transform: translate(-50%, -75%);
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background-color: ${Colors.ACCENT};
`

const Burger = styled.button`
    background-color: ${Colors.TRANSPARENT};
    padding: 5px;
    border: 0;
    cursor: pointer;

    @media (width > 1470px) {
        display: none;
    }
`

const BurgerMenu = styled(Burger)`
    justify-self: end;
    align-self: start;
    grid-column: 3;
    grid-row-start: 1;
    grid-row-end: 4;
    height: 14px;
    width: 14px;
    padding: 0;

    @media (width > 1470px) {
        display: block;
    }
`

interface Props {
    handleBasket: () => void,
}

interface LinkItem {
    title: string;
    id: string;
}

const links: LinkItem[] = [
    { title: "Каталог", id: "catalog" },
    { title: "О нас", id: "about" },
    { title: "Подбор товара", id: "selection" },
    { title: "Наша команда", id: "team" },
    { title: "Вопросы", id: "questions" },
    { title: "Контакты", id: "contacts" },
];

const Header: FC<Props> = ({ handleBasket }) => {

    const [menu, setMenu] = useState(false);
    const goodsAmount = useSelector<RootState, number>((state) => state.basket.data.length);
    const dispatch = useDispatch<AppDispatch>();

    const handleMenu = () => {
        setMenu(prevState => !prevState);
    }

    const navigate = useNavigate();

    const MoveTo = () => {
        navigate(`/diploma_urban/`);
    }

    useEffect(() => {
        dispatch(fetchBasket())
    }, [dispatch]);

    return (
        <>
            {
                !menu &&
                <StyledHeader>
                    <StyledNav>
                        <div onClick={MoveTo} style={{ cursor: 'pointer' }}>
                            <Text weight={fontWeights.BOLD} fontSize={fontSizes.H2_30} lineHeight={30} color={Colors.WHITE}>
                                SneakMax
                            </Text>
                        </div>
                        <StyledLinks>
                            {
                                links.map((item, index) => {
                                    return (
                                        <StyledLink key={index}>
                                            <Link
                                                to={item.id}
                                                spy={true}
                                                smooth={true}
                                                offset={50}
                                                duration={500}
                                            >
                                                <Text weight={fontWeights.NORMAL} fontSize={fontSizes.MENU_14} lineHeight={14} color={Colors.WHITE}>
                                                    {item.title}
                                                </Text>
                                            </Link>
                                        </StyledLink>)
                                })
                            }
                            <StyledBusket onClick={handleBasket}>
                                <Text weight={fontWeights.NORMAL} fontSize={fontSizes.MENU_14} lineHeight={14} color={Colors.WHITE}>Корзина</Text>
                                <Icon>
                                    <svg width="20" height="18" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M20 6.57893H16.6038L13.0359 0.319309C12.8589 0.0083658 12.475 -0.093156 12.1784 0.0938088C11.8823 0.280773 11.7865 0.684867 11.9641 0.996475L15.1461 6.57893H4.85388L8.03587 0.996431C8.21348 0.684823 8.11767 0.280729 7.82164 0.0937645C7.52439 -0.0932003 7.14173 0.00832153 6.96411 0.319265L3.39617 6.57888H0V7.89468H1.35651L2.94432 16.8103C3.11033 17.7438 3.88547 18.421 4.78761 18.421H15.2124C16.1145 18.421 16.8896 17.7438 17.055 16.811L18.6434 7.89468H20C20 7.89468 20 6.57893 20 6.57893ZM15.8264 16.5688C15.7715 16.8797 15.5133 17.1053 15.2124 17.1053H4.78761C4.4867 17.1053 4.22854 16.8798 4.173 16.5681L2.62789 7.89468H17.3721L15.8264 16.5688Z" fill="white" />
                                    </svg>
                                    <Counter>
                                        <Text weight={fontWeights.NORMAL} fontSize={fontSizes.MENU_14} lineHeight={14} color={Colors.WHITE}>
                                            {goodsAmount}
                                        </Text>
                                    </Counter>
                                </Icon>
                            </StyledBusket>
                            <Burger onClick={handleMenu}>
                                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M3.5 7.875C3.5 7.39175 3.89175 7 4.375 7H23.625C24.1082 7 24.5 7.39175 24.5 7.875C24.5 8.35825 24.1082 8.75 23.625 8.75H4.375C3.89175 8.75 3.5 8.35825 3.5 7.875ZM3.5 14C3.5 13.5168 3.89175 13.125 4.375 13.125H23.625C24.1082 13.125 24.5 13.5168 24.5 14C24.5 14.4832 24.1082 14.875 23.625 14.875H4.375C3.89175 14.875 3.5 14.4832 3.5 14ZM13.125 20.125C13.125 19.6418 13.5168 19.25 14 19.25H23.625C24.1082 19.25 24.5 19.6418 24.5 20.125C24.5 20.6082 24.1082 21 23.625 21H14C13.5168 21 13.125 20.6082 13.125 20.125Z" fill="white" />
                                </svg>
                            </Burger>
                        </StyledLinks>
                    </StyledNav>
                </StyledHeader>
            }
            {
                menu &&
                <StyledHeaderMenu>
                    <StyledNavMenu>
                        {
                            links.map((item, index) => {
                                return (
                                    <StyledLink key={index}>
                                        <Link
                                            to={item.id}
                                            spy={true}
                                            smooth={true}
                                            offset={50}
                                            duration={500}
                                        >
                                            <Text weight={fontWeights.NORMAL} fontSize={fontSizes.MENU_14} lineHeight={14} color={Colors.WHITE}>
                                                {item.title}
                                            </Text>
                                        </Link>
                                    </StyledLink>)
                            })
                        }
                        <BurgerMenu onClick={handleMenu}>
                            <svg width="14" height="14" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M4.11 2.697L2.698 4.11 6.586 8l-3.89 3.89 1.415 1.413L8 9.414l3.89 3.89 1.413-1.415L9.414 8l3.89-3.89-1.415-1.413L8 6.586l-3.89-3.89z" fill="white"></path>
                            </svg>
                        </BurgerMenu>
                    </StyledNavMenu>
                </StyledHeaderMenu>
            }
        </>
    )
}

export default Header;