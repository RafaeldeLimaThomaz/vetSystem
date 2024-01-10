// StyledTable.js
import styled from 'styled-components';

export const StyledTable = styled.table`
  width: 90%;
  border-collapse: separate;
  border-spacing: 2px;
  margin: 20px 0;
`;

export const StyledTableHeader = styled.th`
  background-color: #333;
  color: #ffffff;
  border-radius: 3px;
  font-weight: 500;
  padding: 10px;
`;

export const StyledTableCell = styled.td`
  border: 1px solid #dddddd;
  padding: 10px;
  border-radius: 3px;
  text-align: left;
`;
