import styled from "styled-components";

export const Item = styled.li`
  display: flex;
  align-items: center;
  height: 60px;
  padding: 5px 10px;
  margin-bottom: 10px;
  box-shadow: 0px 2px 8px 2px rgba(0, 0, 0, 0.33);
  &:last-child {
      margin-bottom: 0;
    }
`

export const Status = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin-right: 10px;
  background-color: ${props => {
    if (props.children === true) {
      return 'green';
    }
    return 'red';
  }};
`

export const Avatar = styled.img`
  display: block;
  width: 48px;
  margin-right: 10px;
`

export const Name = styled.p`
  font-size: 20px;
  font-weight: bold;
`