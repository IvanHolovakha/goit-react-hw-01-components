import styled from 'styled-components';

export const Card = styled.div`
  width: 300px;
  margin-top: 20px;
  margin-left: 50px;
  margin-bottom: 50px;
  box-shadow: 0px 2px 8px 2px rgba(0, 0, 0, 0.33);
`;
export const Description = styled.div`
  padding: 40px;
  text-align: center;
`;
export const Avatar = styled.img`
  width: 150px;
  border-radius: 50%;
`;
export const Name = styled.p`
  font-size: 20px;
  font-weight: bold;
`;
export const Tag = styled.p`
  color: gray;
`;
export const Location = styled.p`
  color: gray;
`;
export const Stats = styled.ul`
  display: flex;
  background-color: lightgray;
  justify-content: space-between;
  padding-left: 0px;
`;
export const Item = styled.li`
  display: flex;
  width: 100%;
  flex-direction: column;
  text-align: center;
  padding: 20px 20px;
  &:not(:last-child) {
    border-right: solid 1px gray;
  }
`;
export const Label = styled.span`
  color: gray;
  margin-bottom: 5px;
`;
export const Quantity = styled.span`
  font-weight: bold;
`;
