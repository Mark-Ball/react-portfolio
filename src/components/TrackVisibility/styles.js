import styled from 'styled-components';

export const TransitionDiv = styled.div`
    opacity: 0;
    position: relative;
    left: 100px
    transition: all 2s;

    &.visible {
        opacity: 1;
        color: red;
    }
`;