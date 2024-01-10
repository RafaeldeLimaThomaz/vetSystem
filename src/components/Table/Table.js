// TableComponent.js
import React from 'react';
import { StyledTable, StyledTableHeader, StyledTableCell } from './StyledTable';

const TableComponent = ({ data }) => {
  return (
    <StyledTable>
      <thead>
        <tr>
          <StyledTableHeader>Cliente</StyledTableHeader>
          <StyledTableHeader>Usuário</StyledTableHeader>
          <StyledTableHeader>Exame</StyledTableHeader>
          <StyledTableHeader>Laudo</StyledTableHeader>
          {/* Add more headers as needed */}
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            <StyledTableCell>{row.column1}</StyledTableCell>
            <StyledTableCell>{row.column2}</StyledTableCell>
            <StyledTableCell>{row.column3}</StyledTableCell>
            <StyledTableCell>{row.column4}</StyledTableCell>
            {/* Add more cells based on your data structure */}
          </tr>
        ))}
      </tbody>
    </StyledTable>
  );
};

export default TableComponent;
