import React from 'react';
import styled from 'styled-components';

interface IProps {
  labelText: string;
  id?: string;
  children?: React.ReactNode;
}

const StyledDiv = styled.div`
  margin-bottom: 15px;
  display: flex;
  border-bottom: #f0f0f0 1px solid;
  padding-bottom: 20px;
  align-items: center;
`;

const StyledLabel = styled.label`
  font-weight: bold;
  width: 120px;
`;

const Field = (props: IProps) => {
  return (
    <StyledDiv>
      <StyledLabel htmlFor={props.id}>{props.labelText}: </StyledLabel>
      <div>{props.children}</div>
    </StyledDiv>
  );
};

export default Field;
