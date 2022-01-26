import React from 'react';
import { Button } from './FeedbackOptions.styled';
import { PropTypes } from 'prop-types';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return options.map(option => (
    <Button type="Button" key={option} onClick={() => onLeaveFeedback(option)}>
      {option}
    </Button>
  ));
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};
