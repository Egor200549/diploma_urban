import styled from "styled-components";
import { Text } from "../Text/Text";
import { fontSizes, fontWeights } from "../Interfaces/Font";
import { Colors } from "../Interfaces/Colors";

const Faq = () => {
    return (
        <StyledSection id="questions">
            <Text weight={fontWeights.BOLD} fontSize={fontSizes.H2_30} lineHeight={30} color={Colors.TEXT}>
                Часто задаваемые вопросы
            </Text>
            <div>
                <Question>
                    <input className="question_toggle" type="radio" name="toggle" id="toggle1" />
                    <label htmlFor='toggle1'>
                        <Text weight={fontWeights.NORMAL} fontSize={fontSizes.PRICE_20} lineHeight={20} color={'#242424'}>
                            Вопрос 1
                        </Text>
                        <div>
                            <svg width="25" height="26" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.9509 12.3623H25V13.6623H12.9509V26H11.5731V13.6623H0V12.3623H11.5731V0H12.9509V12.3623Z" fill="black" />
                            </svg>
                        </div>
                    </label>
                    <article>
                        <Text weight={fontWeights.NORMAL} fontSize={fontSizes.PARAGRAPH_16} lineHeight={22.4} color={'#24242480'}>
                            А это ответ 1: в комплексе функционируют 6 детских садов с площадками, воспитателями и всякими другими людьми
                        </Text>
                    </article>
                </Question>
                <Question>
                    <input className="question_toggle" type="radio" name="toggle" id="toggle2" />
                    <label htmlFor='toggle2'>
                        <Text weight={fontWeights.NORMAL} fontSize={fontSizes.PRICE_20} lineHeight={20} color={'#242424'}>
                            Вопрос 2
                        </Text>
                        <div>
                            <svg width="25" height="26" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.9509 12.3623H25V13.6623H12.9509V26H11.5731V13.6623H0V12.3623H11.5731V0H12.9509V12.3623Z" fill="black" />
                            </svg>
                        </div>
                    </label>
                    <article>
                        <Text weight={fontWeights.NORMAL} fontSize={fontSizes.PARAGRAPH_16} lineHeight={22.4} color={'#24242480'}>
                            А это ответ 2: в комплексе функционируют 6 детских садов с площадками, воспитателями и всякими другими людьми
                        </Text>
                    </article>
                </Question>
            </div>
        </StyledSection >
    )
}

export default Faq;

const StyledSection = styled.section`
    padding: 60px 19%;
    display: flex;
    flex-direction: column;
    gap: 40px;

    @media (width <= 1024px) {
        padding-inline: 10%;
    }

    @media (width <= 426px) {
        padding-inline: 5%;
    }

    & > div {
        padding-inline: 10%;

        @media (width <= 768px) {
            padding-inline: 0;
        }
    }
`

const Question = styled.div`
    display: flex;
    flex-direction: column;
    gap: 25px;
    padding-block: 30px;
    border-bottom: 1px solid #242424;

    &:first-child {
        border-top: 1px solid #242424;
    }

    & > label {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    }

    & > input {
        display: none;
    }

    & > article {
        display: none;
    }

    & > input:checked~article {
        display: block;
    }
`