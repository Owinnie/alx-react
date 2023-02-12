import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const row = {
  backgroundColor: '#f5f5f5ab'
}
const header = {
  backgroundColor: '#deb5b545'
}
function CourseListRow({ isHeader, textFirstCell, textSecondCell }) {
  const headerOrRow = isHeader ? header : row;
  return (
    <tr style={headerOrRow}>
      {isHeader ?
        textSecondCell === null ?
          <th colSpan="2" className={css(rows.thcenter)}>{textFirstCell}</th>
        :
          <>
            <th className={css(rows.th)}>{textFirstCell}</th>
            <th className={css(rows.th)}>{textSecondCell}</th>
          </>
      :
        <>
          <td className={css(rows.td)}>{textFirstCell}</td>
          <td className={css(rows.td)}>{textSecondCell}</td>
        </>
      }
    </tr>
  );
}

const rows= StyleSheet.create({
  thcenter: {
    borderBottom: '1px solid gray',
    margin: 0,
    padding: 0,
    textAlign: 'center'
  },
  th: {
    borderBottom: '1px solid gray',
    margin: 0,
    padding: 0,
    textAlign: 'left'
  },
  td: {
    paddingLeft: 3
  }
});

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