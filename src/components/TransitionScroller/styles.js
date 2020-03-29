import styled from 'styled-components';

export const Div = styled.div`
    position: relative;
    top: 0;
    opacity: 1;
    transition: all .5s;

    &.unseen {
        top: -20px;
        opacity: 0;
    }
`;