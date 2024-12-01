import styled from "styled-components";
import { Colors } from "../Interfaces/Colors";
import { fontSizes, fontWeights } from "../Interfaces/Font";
import { Text } from "../Text/Text";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { fetchTeam, Person } from "../features/teamSlice";
import { useEffect } from "react";
import Loader from "../Loader/Loader";
import Employee from "../Employee/Employee";

interface Response {
    sneakers: Person[],
    error: string | null,
    status: string | null
}

interface State {
    team: Response,
}

const Team = () => {
    const team = useSelector<RootState, Person[]>((state) => state.team.team);
    const { status, error } = useSelector((state: State) => state.team);
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        dispatch(fetchTeam())
    }, [dispatch]);

    return (
        <StyledSection id="team">
            <Text weight={fontWeights.BOLD} fontSize={fontSizes.H2_30} lineHeight={30} color={Colors.WHITE}>
                Наша команда
            </Text>
            <Staff>
                {
                    status === 'loading' && <Loader />
                }
                {
                    status === 'failed' && <h2>Error has occured: {error}</h2>
                }
                {
                    team && team.map((item, index) => <Employee item={item} key={index} />)
                }
            </Staff>
        </StyledSection>
    )
}

const StyledSection = styled.section`
    background-color: ${Colors.BG};
    padding-inline: 19%;
    padding-block: 60px;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    gap: 40px;

    @media (width <= 1024px) {
        padding-inline: 10%;
    }

    @media (width <= 426px) {
        padding-inline: 5%;
    }
`

const Staff = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;
    align-items: start;
    gap: 20px;

    @media (width <= 1024px) {
        flex-direction: column;
        align-items: center;
    }
`

export default Team;