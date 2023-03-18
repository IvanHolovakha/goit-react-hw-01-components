import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  width: 100%;
  flex-direction: column;
  padding: 10px;
  text-align: center;
  background-color: gray;
  &:nth-child(even) {
    background-color: orange;
  }
`;
export const Label = styled.span`
  font-size: 12px;
  color: white;
  margin-bottom: 5px;
`;
export const Percentage = styled.span`
  color: white;
`;
