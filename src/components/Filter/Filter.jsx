import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getValueFilter } from '../../redux/Filters/filtersSelectors';
import { setValueFilters } from '../../redux/Filters/filtersSlice';
import { nanoid } from 'nanoid';
import {
  FilterInput,
  FilterLabel,
  FilterContainer,
  FilterTitle,
} from './Filter.styled';

const Filter = () => {
  const dispatch = useDispatch();
  const value = useSelector(getValueFilter);

  const onChange = e => {
    const value = e.target.value;
    dispatch(setValueFilters(value));
  };

  const findInputId = nanoid();
  return (
    <FilterContainer>
      <FilterTitle htmlFor={findInputId}>Find contacts by name</FilterTitle>
      <FilterLabel>
        <FilterInput
          id={findInputId}
          type="text"
          value={value}
          onChange={onChange}
        />
      </FilterLabel>
    </FilterContainer>
  );
};

export default Filter;
