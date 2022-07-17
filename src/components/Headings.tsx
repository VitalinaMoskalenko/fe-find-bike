import styled from 'styled-components';

const H1 = styled.h1`
  font-size: ${({ theme }) => theme.fonts.size.h1}px;
  color: ${({ theme }) => theme.colors.black};
  margin: 0px;
`;

const H2 = styled.h2`
  font-size: ${({ theme }) => theme.fonts.size.h2}px;
  color: ${({ theme }) => theme.colors.black};
  margin: 0px;
`;

const H3 = styled.h3`
  font-size: ${({ theme }) => theme.fonts.size.h3}px;
  color: ${({ theme }) => theme.colors.black};
  margin: 0px;
`;

const H4 = styled.h4`
  font-size: ${({ theme }) => theme.fonts.size.h4}px;
  color: ${({ theme }) => theme.colors.black};
  margin: 0px;
`;

const H5 = styled.h5`
  font-size: ${({ theme }) => theme.fonts.size.h5}px;
  color: ${({ theme }) => theme.colors.black};
`;

export { H1, H2, H3, H4, H5 };
