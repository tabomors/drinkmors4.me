import React from 'react';
import PropTypes from 'prop-types';

const ProjectsList = ({ list }) => <ul>{list.map(({ title }) => <li key={title}>{title}</li>)}</ul>;

ProjectsList.defaultProps = {
  list: [],
};

ProjectsList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
  })),
};

export default ProjectsList;
