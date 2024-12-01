import styled from "styled-components"
import { Colors, ColorsHover } from "../Interfaces/Colors"
import { fontSizes, fontWeights } from "../Interfaces/Font"
import { Text } from "../Text/Text"
import Price from "../Price/Price"
import Gender from "../Gender/Gender"
import FilterSizes from "../FilterSizes/FilterSizes"
import { SubmitHandler, useForm } from "react-hook-form"
import { useDispatch } from "react-redux"
import { AppDispatch } from "../../store"
import { fetchSneakers } from "../features/sneakersSlice"

const StyledFilter = styled.form`
    min-width: 240px;
    border-radius: 4px;
    background-color: ${Colors.SEC};
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    gap: 20px;

    @media (width <= 1455px) {
        min-width: unset;
        width: calc(100% - 40px);
    }
`

const Parameter = styled.div`
    display: flex;
    flex-direction: column;
    align-items: stretch;
    gap: 10px;
`

const Submit = styled.button`
    position: relative;
    font-weight: 400;
    font-size: 16px;
    line-height: 16px;
    border-radius: 4px;
    cursor: pointer;
    transition: background 0.25s;
    background-color: ${Colors.TEXT};
    color: ${Colors.WHITE};
    padding: 22px 47px;
    border: 0;

    &: hover {
        background-color: ${ColorsHover.TEXT};
    }
`

const Reset = styled.button`
    font-size: 16px;
    cursor: pointer;
    font-weight: 400;
    line-height: 16px;
    background-color: ${Colors.TRANSPARENT};
    border: 0;
    color: ${Colors.TEXT};
`
export interface FormData {
    priceFrom: number;
    priceTo: number;
    gender: string;
    sizes: number[];
}

const Filter = () => {

    const dispatch = useDispatch<AppDispatch>();

    const { register, handleSubmit, setValue } = useForm<FormData>({
        defaultValues: {
            priceFrom: 0,
            priceTo: 99999,
            gender: "",
            sizes: [],
        }
    });

    const onSubmit: SubmitHandler<FormData> = (data) => {
        dispatch(fetchSneakers({
            priceFrom: data.priceFrom,
            priceTo: data.priceTo,
            gender: data.gender,
            sizes: data.sizes,
        }));

        handleSizes([]);
    }

    const handleGender = (value: string) => {
        setValue('gender', value)
    }

    const handleSizes = (value: number[]) => {
        setValue('sizes', value)
    }

    return (
        <StyledFilter onSubmit={handleSubmit(onSubmit)}>
            <Text weight={fontWeights.NORMAL} fontSize={fontSizes.H3_24} lineHeight={24} color={Colors.TEXT}>
                Подбор по параметрам
            </Text>
            <Parameter>
                <Price register={register} setValue={setValue} />
            </Parameter>
            <Parameter>
                <Gender handleGender={handleGender} />
            </Parameter>
            <Parameter>
                <FilterSizes handleSizes={handleSizes} />
            </Parameter>
            <Submit type="submit">Применить</Submit>
            <Reset type="reset" onClick={() =>
                onSubmit(
                    {
                        priceFrom: 0,
                        priceTo: 99999,
                        gender: "",
                        sizes: []
                    }
                )
            }>сбросить</Reset>
        </StyledFilter>
    )
}

export default Filter;