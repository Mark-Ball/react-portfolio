import styled from 'styled-components';

const height = 50; // px
const width = 250; // px

// to calculate the length of the message textarea
const getLength = width => {
    const margin = (900 - 3 * (width + 2)) / 6;
    return 900 - 2 * margin;
};

export const InputBox = styled.label`
    display: inline-block;
    position: relative;
    border: 1px solid grey;
    border-radius: 4px;
    cursor: text;
    height: ${height}px;
    width: ${width}px;
    margin-bottom: 30px;

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

export const InputTextArea = styled.label`
    display: block;
    position: relative;
    border: 1px solid grey;
    border-radius: 4px;
    cursor: text;
    height: ${height * 3}px;
    width: ${getLength(width)}px;
    max-width: 100%;
    margin: auto;
    margin-bottom: 30px;

    span {
        position: absolute;
        top: 15px;
        left: 20px;
        color: grey;
        transition: 0.2s;
    }

    textarea {
        position: absolute;
        top: 24px;
        left: 10px;
        height: 80%;
        width: 96%;
        margin: auto;
        border: none;
        outline: none;
        font-size: large;
        resize: none;

        :focus + span, &.focused + span {
            top: 5px;
            left: 10px;
            font-size: .75em;
        }
    }
`;