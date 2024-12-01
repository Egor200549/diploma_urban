import { FC, ReactNode } from "react";
import styled from "styled-components";
import { fontSizes, fontWeights } from "../Interfaces/Font";
import { Colors } from "../Interfaces/Colors";

interface Props {
    id: string,
    name: string,
    value: string,
    children: ReactNode,
    onChange?: () => void
}

const StyledBlock = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: fit-content;
`

const StyledInput = styled.input`
    position: absolute;
    z-index: -1;
    opacity: 0;
`

const StyledLabel = styled.label`
    text-transform: lowercase;
    display: inline-flex;
    align-items: center;
    user-select: none;

    &::before {
        content: '';
        width: 24px;
        height: 24px;
        border: 1px solid ${Colors.SMALLTEXT};
        border-radius: 4px;
        margin-right: 10px;
        background-repeat: no-repeat;
        background-position: center;
        background-size: auto;
    }

    ${StyledInput}:checked + &::before {
        background-image: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTVweCIgaGVpZ2h0PSIxMnB4IiB2aWV3Qm94PSIwIDAgMTUgMTIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik01LjYyNDYyIDExLjE4NTlDNS40ODQzOCAxMS4zMjY5IDUuMjkzMTMgMTEuNDA1NiA1LjA5NDM4IDExLjQwNTZDNC44OTU2MyAxMS40MDU2IDQuNzA0MzggMTEuMzI2OSA0LjU2NDEzIDExLjE4NTlMMC4zMjk2MjUgNi45NTA2M0MtMC4xMDk4NzUgNi41MTExMyAtMC4xMDk4NzUgNS43OTg2MyAwLjMyOTYyNSA1LjM1OTg4TDAuODU5ODc1IDQuODI5NjNDMS4yOTkzOCA0LjM5MDEzIDIuMDExMTIgNC4zOTAxMyAyLjQ1MDYyIDQuODI5NjNMNS4wOTQzOCA3LjQ3MzM4TDEyLjIzODEgMC4zMjk2MjVDMTIuNjc3NiAtMC4xMDk4NzUgMTMuMzkwMSAtMC4xMDk4NzUgMTMuODI4OSAwLjMyOTYyNUwxNC4zNTkxIDAuODU5ODc1QzE0Ljc5ODYgMS4yOTkzOCAxNC43OTg2IDIuMDExODggMTQuMzU5MSAyLjQ1MDYzTDUuNjI0NjIgMTEuMTg1OVoiIGZpbGw9IiNEQkJCQTkiLz4KPC9zdmc+Cg==");
    }
`

const CheckBox: FC<Props> = ({ id, name, value, children, onChange }) => {
    return (
        <StyledBlock>
            <StyledInput type="radio" name={name} id={id} value={value} onChange={onChange} />
            <StyledLabel htmlFor={id}>
                <div style={{ fontSize: fontSizes.PARAGRAPH_16, fontWeight: fontWeights.NORMAL }}>{children}</div>
            </StyledLabel>
        </StyledBlock>
    )
}

export default CheckBox;