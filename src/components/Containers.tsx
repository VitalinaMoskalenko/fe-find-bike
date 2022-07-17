import styled from 'styled-components';

import { BreakpointsType } from '../types/common/BreakpointsType';

export const ContentContainer = styled.div`
  width: 600px;

  @media (max-width: ${BreakpointsType.xs}px) {
    width: 100%;
  }
`;
