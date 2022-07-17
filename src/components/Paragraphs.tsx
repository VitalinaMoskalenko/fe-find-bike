import styled from 'styled-components';

const BodyText = styled.p`
  font-size: ${({ theme }) => theme.fonts.size.body}px;
  color: ${({ theme }) => theme.colors.black};
`;

const SmallBodyText = styled.p`
  font-size: ${({ theme }) => theme.fonts.size.smallBody}px;
  color: ${({ theme }) => theme.colors.black};
`;

const CaptionBodyText = styled.p`
  font-size: ${({ theme }) => theme.fonts.size.caption}px;
  color: ${({ theme }) => theme.colors.black};
`;

export { BodyText, SmallBodyText, CaptionBodyText };
