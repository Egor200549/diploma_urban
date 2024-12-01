import Nouislider from "nouislider-react";
import "nouislider/dist/nouislider.min.css";
import { Text } from "../Text/Text";
import { fontSizes, fontWeights } from "../Interfaces/Font";
import styled from "styled-components";
import { Colors } from "../Interfaces/Colors";
import { FC } from "react";
import { UseFormRegister, UseFormSetValue } from "react-hook-form";
import { FormData } from "../Filter/Filter";

const Input = styled.input`
    background-color: transparent;
    outline: 0;
    border: 0;
    width: 50%;
    text-align: center;
`

const Range = styled.div`
    border-radius: 4px;
    padding: 8px;
    border: 1px solid rgba(178, 181, 187, 1);
`

interface Props {
    register: UseFormRegister<FormData>,
    setValue: UseFormSetValue<FormData>;
}

const Price: FC<Props> = ({ register, setValue }) => {
    return (
        <>
            <Text weight={fontWeights.NORMAL} fontSize={fontSizes.PARAGRAPH_16} lineHeight={16} color={Colors.TEXT}>
                Цена, руб
            </Text>
            <Range>
                <Input type="number" min={0} max={99999} {...register("priceFrom")} />
                <Input type="number" min={0} max={99999} {...register("priceTo")} />
                <Nouislider
                    range={{ min: 0, max: 99999 }}
                    start={[0, 99999]}
                    connect
                    step={1}
                    onChange={([start, end]) => {
                        setValue("priceFrom", Math.round(start));
                        setValue("priceTo", Math.round(end));
                    }}
                />
            </Range>

        </>
    )
}

export default Price;