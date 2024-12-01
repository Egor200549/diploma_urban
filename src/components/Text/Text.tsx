import { FC, ReactNode } from "react"
import styled from "styled-components"

interface Props {
    weight: number,
    fontSize: number,
    lineHeight: number,
    children: ReactNode,
    color: string
}

const StyledText = styled.p<{ $weight: number, $fontSize: number, $lineHeight: number, $color: string }>`
    font-weight: ${props => props.$weight};
    font-size: ${props => props.$fontSize}px;
    line-height: ${props => props.$lineHeight}px;
    color: ${props => props.$color};
`

export const Text: FC<Props> = ({ weight, fontSize, children, lineHeight, color }) => {
    return (
        <StyledText $weight={weight} $fontSize={fontSize} $lineHeight={lineHeight} $color={color}>{children}</StyledText>
    )
}