import styled from 'styled-components';
import Select from 'react-select';

export const StyledSelect = styled(Select).attrs({
  classNamePrefix: 'react-select',
})`
  .react-select__control {
    background-color: #ffffff;
    width: 100%;
    height: 100%;
    padding-right: 10px;
    border: 1px solid black;
    border-radius: 40px;
    display: flex;
    text-align: center;
    cursor: pointer;
  }
`;
