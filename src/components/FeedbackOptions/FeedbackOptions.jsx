import React from 'react';
import { BtnList, BtnItem, Button } from './FeedbackOptions.styled';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <BtnList>
      {options.map((option, id) => (
        <BtnItem key={id}>
          <Button name={option} onClick={() => onLeaveFeedback(option)}>
            {option}
          </Button>
        </BtnItem>
      ))}
    </BtnList>
  );
};
export default FeedbackOptions;

FeedbackOptions.protoTypes = {
  options: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      option: PropTypes.string.isRequired,
    })
  ),
  onLeaveFeedback: PropTypes.func.isRequired,
};
