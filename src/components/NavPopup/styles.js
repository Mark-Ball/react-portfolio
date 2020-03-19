import styled from 'styled-components';

export const Popup = styled.div`
    background-color: white;
    height: 100vh;
    width: 200px;
    position: fixed;
    top: 0;
    right: 0;
    border: 1px solid black;
    z-index: 10;

    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`;