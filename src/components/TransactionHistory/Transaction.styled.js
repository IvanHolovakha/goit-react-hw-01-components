import styled from "styled-components";

export const TableRow = styled.tr`
&:nth-child(even) {
  background-color: lightgrey;
}
`
export const TableData = styled.td`
padding: 10px;
color: gray;
&:not(:last-child) {
border-right: solid 1px lightgray;
}
`