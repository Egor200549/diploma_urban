import styled from "styled-components";
import { Colors } from "../Interfaces/Colors";
import { fontSizes, fontWeights } from "../Interfaces/Font";
import { Text } from "../Text/Text";
import { FC, useState } from "react";

const Sizes = styled.div`
    display: grid;
    gap: 0px;
    grid-template-columns: 80px 80px 80px;
`

const sizes = [35, 36, 37, 38, 39, 40, 41, 42, 43];

interface Props {
    handleSizes: (value: number[]) => void
}

const FilterSizes: FC<Props> = ({ handleSizes }) => {

    const [, setSelectedSizes] = useState<number[]>([]);

    const handleSizeChange = (size: number) => {
        setSelectedSizes((prevSelectedSizes) => {
            const newSizes = prevSelectedSizes.includes(size) ?
                prevSelectedSizes.filter((s) => s !== size)
                :
                [...prevSelectedSizes, size];
            handleSizes(newSizes);
            return newSizes;
        });
    };


    return (
        <>
            <Text weight={fontWeights.NORMAL} fontSize={fontSizes.PARAGRAPH_16} lineHeight={16} color={Colors.TEXT}>
                Размер
            </Text>
            <Sizes>
                {sizes.map((size, index) => (
                    <div key={index}>
                        <Input
                            type="checkbox"
                            id={size.toString()}
                            name="sizes"
                            onChange={() => handleSizeChange(size)}
                        />
                        <label htmlFor={size.toString()}>{size.toString()}</label>
                    </div>
                ))}
            </Sizes>
        </>
    )
}

export default FilterSizes;

const Input = styled.input`
    display: none;

    & + label {
        display: block;
        border: 0.29px solid #DBBBA9;
        width: 80px;
        height: 57px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }

    &:checked + label {
        background-color: #DBBBA9;
    }
`