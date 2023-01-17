import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

const CourseListRow = ({ isHeader, textFirstCell, textSecondCell }) => {
    let tr = undefined;
  
    if (isHeader === true) {
      if (textSecondCell === null) {
        tr = <th colSpan='2'>{textFirstCell}</th>;
      } else {
        tr = (
          <Fragment>
            <th>{textFirstCell}</th>
            <th>{textSecondCell}</th>
          </Fragment>
        );
      }
    }
    if (isHeader === false) {
      tr = (
        <Fragment>
          <td>{textFirstCell}</td>
          <td>{textSecondCell}</td>
        </Fragment>
      );
    }
  
    return <tr>{tr}</tr>;
};

CourseListRow.defaultProps = {
    isHeader: false,
    textSecondCell: null,
};

export default CourseListRow;