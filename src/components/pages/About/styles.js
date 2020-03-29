import styled from 'styled-components';

export const Title = styled.h1`
    text-align: center;
`;

export const Flexbox = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    &.invisible {
        position: relative;
        top: -50px;
        opacity: 0;
    }

    &.visible {
        position: relative;
        top: 0;
        opacity: 1;
        transition: all .5s;
    }
`;