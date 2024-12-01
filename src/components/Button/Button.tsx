import { FC, ReactNode } from "react"
import styled, { css } from "styled-components"
import { TypeButtons } from "../Interfaces/TypeButtons"
import { Colors, ColorsHover, ColorsActive } from "../Interfaces/Colors"

interface Props {
    children: ReactNode,
    type: TypeButtons,
    onClick?: () => void,
    disabled?: boolean
}

const PatternButton = styled.button`
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

const StyledButton = styled(PatternButton) <{ $type: TypeButtons }>`
    ${({ $type }) =>
        $type === TypeButtons.BUTTON ? css`
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

        ` : $type === TypeButtons.BUTTON_DARK ? css`
            background-color: ${Colors.TEXT};
            color: ${Colors.WHITE};
            padding: 22px 47px;
            border: 0;

            &: hover {
                background-color: ${ColorsHover.TEXT};
            }
        ` : css`
            background-color: ${Colors.TRANSPARENT};
            color: ${Colors.TEXT};
            padding: 17px 42px;
            border: 1px solid ${Colors.TEXT};

            &: hover {
                background-color: ${ColorsHover.TEXT};
                color: ${Colors.WHITE};
            }
        `
    }
`

export const Button: FC<Props> = ({ children, type, onClick, disabled }) => {
    return (
        <StyledButton $type={type} onClick={onClick} disabled={disabled}>
            {children}
        </StyledButton>
    )
}