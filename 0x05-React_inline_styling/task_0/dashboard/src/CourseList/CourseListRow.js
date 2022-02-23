import PropTypes, { bool } from 'prop-types';
import React from 'react';


const CourseListRow = ({ isHeader, textFirstCell, textSecondCell }) => {
    if (isHeader && textSecondCell === null) {
        return <tr><th colSpan={2}>{textFirstCell}</th></tr>;
    } else if (isHeader && textSecondCell !== null) {
        return (
            <tr>
                <th style={{backgroundColor: '#deb5b545'}}>{textFirstCell}</th>
                <th style={{backgroundColor: '#deb5b545'}}>{textSecondCell}</th>
            </tr>
        );
    } else if (!isHeader) {
        return (
            <tr>
                <td style={{backgroundColor: '#f5f5f5ab'}}>{textFirstCell}</td>
                <td style={{backgroundColor: '#f5f5f5ab'}}>{textSecondCell}</td>
            </tr>
        );
    }
};

CourseListRow.defaultProps = {
    isHeader: false,
    textSecondCell: null
}

CourseListRow.propTypes = {
    isHeader: PropTypes.bool,
    textFirstCell: PropTypes.string.isRequired,
    textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default CourseListRow;
