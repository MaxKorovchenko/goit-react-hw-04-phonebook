import styled from 'styled-components';

export const Info = styled.p`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 18px;
`;

export const DeleteBtn = styled.button`
  margin-left: auto;
  margin-right: 40px;
  padding: 5px 10px;
  border: none;
  border-radius: 6px;
  font-size: 18px;
  background-color: white;
  color: black;
  box-shadow: 1px 1px 5px 2px #485768;
  cursor: pointer;

  transition: transform 300ms ease-in-out;

  &:hover {
    transform: scale(1.05);
  }

  &:active {
    color: white;
    background-color: #629ee1;
  }
`;
