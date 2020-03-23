import styled from 'styled-components';

const height = 50; // px
const width = 300; // px

export const InputBox = styled.div`
    display: inline-block;
    position: relative;
    height: ${height}px;
    width: ${width}px;

    span {
        position: absolute;
        top: 20px;
        left: 20px;
        color: grey;
        transition: 0.2s;
    }

    input {
        border: 1px solid grey;
        border-radius: 5px;
        height: ${height}px;
        width: ${width}px;
        outline-width: 0;

        :focus + span {
            top: 5px;
            left: 10px;
        }
    }
`;