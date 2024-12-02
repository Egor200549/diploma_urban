import styled from "styled-components";
import { Colors } from "../Interfaces/Colors";
import { fontSizes, fontWeights } from "../Interfaces/Font";
import { Text } from "../Text/Text";
import { Link } from "react-scroll";
import { useNavigate } from "react-router";

const StyledFooter = styled.footer`
    flex: 0 0 auto;
    padding-inline: 19%;
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: ${Colors.TEXT};

    @media (width <= 1326px) {
        padding-inline: 5%;
    }
`

const StyledNav = styled.nav`
    min-height: 20px;
    padding-block: 30px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 40px;

    @media (width <= 1326px) {
        flex-direction: column;
    }

    @media (width <= 768px) {
        align-items: start;
    }
`

const StyledLinks = styled.div`
    display: grid;
    grid-template-columns: repeat(6, max-content);
    justify-content: flex-end;
    align-items: center;
    gap: 30px;

    @media (width <= 768px) {
        width: 100%;
        grid-template-columns: repeat(2, 1fr);
    }

    @media (width <= 426px) {
        grid-template-columns: repeat(1, 1fr);
    }
`

const StyledLink = styled.div`
    cursor: pointer;
`

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

const Footer = () => {
    const navigate = useNavigate();

    const MoveTo = () => {
        navigate(`/diploma_urban/`);
    }
    return (
        <StyledFooter>
            <StyledNav>
                <div onClick={MoveTo} style={{cursor: 'pointer'}}>
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
                </StyledLinks>
            </StyledNav>
        </StyledFooter>
    )
}

export default Footer;