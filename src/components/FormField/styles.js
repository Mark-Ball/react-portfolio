import styled from 'styled-components';

const height = 50; // px
const width = 300; // px

export const InputBox = styled.label`
    display: inline-block;
    position: relative;
    border: 1px solid grey;
    border-radius: 4px;
    height: ${height}px;
    width: ${width}px;

    span {
        position: absolute;
        top: 15px;
        left: 20px;
        color: grey;
        transition: 0.2s;
    }

    input {
        position: absolute;
        top: 24px;
        left: 10px;
        border: none;
        outline: none;
        font-size: large;

        :focus + span, &.focused + span {
            top: 5px;
            left: 10px;
            font-size: .75em;
        }
    }
`;