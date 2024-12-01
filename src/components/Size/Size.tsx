import { FC, ReactNode, useEffect, useState } from "react";
import styled, { css } from "styled-components";
import { Colors } from "../Interfaces/Colors";
import { TypesSize } from "../Interfaces/TypesSize";

interface Props {
    id: string,
    name: string,
    is: TypesSize,
    value: string,
    children: ReactNode,
    onChange: () => void
}

const StyledBlock = styled.div`
    position: relative;
`

const StyledMessage = styled.div`
    display: none;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    text-align: center;
    box-shadow: 4px 8px 20px 0px #000D5433;
    background: ${Colors.TEXT};
    color: ${Colors.WHITE};
    font-size: 12px;
    border-radius: 4px;
    position: absolute;
    top: calc(-100% - 8px);
    left: 50%;
    transform: translateX(-50%);
    width: 95px;
    padding-block: 10px;
`

const StyledInput = styled.input`
    display: none;
`

const PatternLabel = styled.label`
    display: inline-block;
	cursor: pointer;
    padding-block: 10px;
    text-align: center;
    width: 70px;
    border-radius: 4px;
    color: ${Colors.TEXT};
    transition: all 0.25s;

    &:hover + ${StyledMessage} {
        display: flex;
    }

    ${StyledInput}[type='radio']:checked + & {
    border: 1px solid ${Colors.ACCENT};
    
`

const StyledLabel = styled(PatternLabel) <{ $is: TypesSize }>`
    ${({ $is }) =>
        $is === TypesSize.ACTIVE ? css`
            border: 1px solid ${Colors.GRAY};

            &:hover {
                border: 1px solid ${Colors.ACCENT};
                cursor: pointer;
            }
    }

        ` : css`
            border: 1px solid #B2B5BB80;
            opacity: .5;
        `
    }
`

const Size: FC<Props> = ({ id, name, is, children, value, onChange }) => {

    const [access, setAccess] = useState(true);

    const onload = () => {
        if (is === TypesSize.INACTIVE) {
            setAccess(false);
        }
    };

    useEffect(onload, [is]);

    return (
        <StyledBlock>
            {
                access ?
                    <StyledInput type="radio" name={name} id={id} value={value} onChange={onChange}/>
                    :
                    <StyledInput type="radio" name={name} id={id} value={value} disabled />
            }
            <StyledLabel $is={is} htmlFor={id}>{children}</StyledLabel>
            {
                !access ?
                    <StyledMessage>
                        <p>Размера нет в наличии</p>
                    </StyledMessage>
                    :
                    null
            }
        </StyledBlock>
    )
}

export default Size;