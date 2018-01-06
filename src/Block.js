import Styled from "styled-components";
import { MOBILE_SCREEN } from './mediaQueries';

const Block = Styled("div")`
    ${({ margin = false }) => margin && `margin: ${margin};`}
    
    @media ${MOBILE_SCREEN} {
        ${({ mobileMargin = false }) => mobileMargin && `margin: ${mobileMargin};`}
    }
`;

export default Block;