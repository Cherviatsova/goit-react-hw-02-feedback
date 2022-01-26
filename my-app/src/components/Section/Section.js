import React from 'react';
import { PropTypes } from 'prop-types';
import { MainSection, SectionTitle } from './Section.styled';

export default function Section({ title, children }) {
  return (
    <MainSection>
      <SectionTitle>{title}</SectionTitle>
      {children}
    </MainSection>
  );
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};
