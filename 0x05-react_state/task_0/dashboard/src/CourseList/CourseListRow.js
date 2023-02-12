import React from 'react';
import PropTypes from 'prop-types';

const row = {
  backgroundColor: '#f5f5f5ab'
}
const header = {
  backgroundColor: '#deb5b545'
}
function CourseListRow({ isHeader, textFirstCell, textSecondCell }) {
  const headerOrRow = isHeader ? header : row;
  return (
    <tr style={row}>
      {isHeader ?
        textSecondCell === null ?
          <th colSpan="2" style={header}>{textFirstCell}</th>
        :
          <>
            <th style={header}>{textFirstCell}</th>
            <th>{textSecondCell}</th>
          </>
      :
        <>
          <td>{textFirstCell}</td>
          <td>{textSecondCell}</td>
        </>
      }
    </tr>
  );
}

CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null
};

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string,
  textSecondCell: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ])
};

export default CourseListRow;