import PropTypes, { bool } from 'prop-types';
import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const CourseListRow = ({ isHeader, textFirstCell, textSecondCell }) => {
    if (isHeader && textSecondCell === null) {
        return <tr className={css(styles.rowBgHeader)}><th className={css(styles.tableData)} colSpan={2}>{textFirstCell}</th></tr>;
    } else if (isHeader && textSecondCell !== null) {
        return (
            <tr className={css(styles.rowBg)}>
                <th className={css(styles.tableData)}>{textFirstCell}</th>
                <th className={css(styles.tableData)}>{textSecondCell}</th>
            </tr>
        );
    } else if (!isHeader) {
        return (
            <tr className={css(styles.rowBg)}>
                <td className={css(styles.tableData)}>{textFirstCell}</td>
                <td className={css(styles.tableData)}>{textSecondCell}</td>
            </tr>
        );
    }
};
const styles = StyleSheet.create({
    rowBg: {
        backgroundColor: '#f5f5f5ab',
    },
    rowBgHeader: {
        backgroundColor: '#deb5b545',
    },
    tableData: {
        borderBottom: "2px solid lightgray",
    }
})

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
