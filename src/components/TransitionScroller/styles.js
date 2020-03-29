import styled from 'styled-components';
import { TRANSITIONTIME } from '../../constants';

export const Div = styled.div`
    position: relative;
    top: 0;
    opacity: 1;
    transition: all ${TRANSITIONTIME};

    &.unseen {
        top: -20px;
        opacity: 0;
    }
`;