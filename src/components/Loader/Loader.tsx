import styled, { keyframes } from "styled-components";

const animation = keyframes`
    to  {
            transform: rotate(.5turn)
        }
`

const Load = styled.div`
    width: 50px;
    aspect-ratio: 1;
    border-radius: 50%;
    border: 8px solid;
    border-color: #000 #0000;
    animation: ${animation} 1s infinite;
`

const Loader = () => {
    return (
        <Load></Load>
    )
}

export default Loader;