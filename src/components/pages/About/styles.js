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

export const Paragraph = styled.p`
    text-align: center;
    max-width: 600px;
    margin: 0 auto;
    margin-bottom: 20px;
    line-height: 2;
`;