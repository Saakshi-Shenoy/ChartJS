import React from 'react';
import Calendar from 'react-github-contribution-calendar';

const ContributionCalendar = ({ values, until }) => {
  return <Calendar values={values} until={until} />;
};

export default ContributionCalendar;
