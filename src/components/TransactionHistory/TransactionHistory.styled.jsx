import styled from '@emotion/styled';

export const Table = styled.table`
  width: 700px;
  margin: 50px auto;
`;

export const TableHead = styled.thead`
  height: 40px;
  text-transform: uppercase;
  font-size: 18px;
  color: white;
  background-color: #3481ed;
`;

export const TableBody = styled.tbody``;

export const TableRow = styled.tr`
  text-align: center;
  height: 30px;
  font-size: 16px;

  &:nth-of-type(2n + 1) {
    background-color: #bababa;
  }
`;

export const TableData = styled.td`
  text-transform: capitalize;
`;
