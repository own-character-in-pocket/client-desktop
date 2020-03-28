import styled from 'styled-components';

export const Lineclamp = styled.span<{ maxLine?: number }>`
  overflow: hidden;

  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: ${({ maxLine = 1 }) => maxLine};

  white-space: normal;
  word-break: break-all;

  * {
    display: inline-block;
  }
`;
