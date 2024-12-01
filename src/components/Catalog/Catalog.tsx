import styled from "styled-components";
import { Text } from "../Text/Text";
import { fontSizes, fontWeights } from "../Interfaces/Font";
import { Colors } from "../Interfaces/Colors";
import { useEffect } from "react";
import Good from "../Good/Good";
import { useDispatch, useSelector } from "react-redux";
import { fetchSneakers } from "../features/sneakersSlice";
import { Sneakers } from "../Interfaces/Sneakers";
import { AppDispatch, RootState } from "../../store";
import Loader from "../Loader/Loader";
import Filter from "../Filter/Filter";
import { changeLimit } from "../features/dataSlice";
import { Button } from "../Button/Button";
import { TypeButtons } from "../Interfaces/TypeButtons";

const StyledSection = styled.section`
    padding-inline: 19%;
    padding-block: 60px;

    @media (width <= 1455px) {
        padding-inline: 10%;
    }

    @media (width <= 426px) {
        padding-inline: 5%;
    }
}
`

const Grid = styled.div`
    margin-top: 40px;
    display: flex;
    flex-direction: row;
    align-items: start;
    gap: 20px;

    @media (width <= 1455px) {
        flex-direction: column;
    }
`

const Skeakers = styled.div`
    width: 100%;
    display: grid;
    grid-auto-flow: row;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 20px;

    @media (width <= 1455px) {
        width: 100%;
        justify-items: center;
    }
`

interface Response {
    sneakers: Sneakers[],
    error: string | null,
    status: string | null
}

interface State {
    sneakers: Response,
}

const Catalog = () => {
    const sneakers = useSelector<RootState, Sneakers[]>((state) => state.sneakers.sneakers);
    const limit = useSelector<RootState, number>((state) => state.data.limit);
    const { status, error } = useSelector((state: State) => state.sneakers);
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        dispatch(fetchSneakers({
            priceFrom: 0,
            priceTo: 99999,
            gender: "",
            sizes: [],
        }));

    }, [dispatch, limit]);

    return (
        <StyledSection id="catalog">
            <Text weight={fontWeights.BOLD} fontSize={fontSizes.H2_30} lineHeight={30} color={Colors.TEXT}>Каталог</Text>
            <Grid>
                <Filter />
                <Skeakers>
                    {
                        status === 'loading' && <Loader />
                    }
                    {
                        status === 'failed' && <h2>Error has occured: {error}</h2>
                    }
                    {
                        sneakers && sneakers.filter((_, index) => index < limit).map(item => <Good item={item} key={item.id} />)
                    }
                </Skeakers>
            </Grid>
            <div style={{ marginTop: '40px', display: 'flex', justifyContent: 'center' }}>
                <Button type={TypeButtons.BUTTON} onClick={() => dispatch(changeLimit())} disabled={limit >= sneakers.length}>Показать еще</Button>
            </div>
        </StyledSection>
    )
}

export default Catalog;