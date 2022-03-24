import PropTypes, { bool } from 'prop-types';
import React, { useState } from 'react';
import { StyleSheet, css } from 'aphrodite';

const CourseListRow = ({ isHeader, textFirstCell, textSecondCell }) => {

    const [rowChecked, setCheck] = useState(false);

    if (isHeader && textSecondCell === null) {
        return <tr className={css(styles.rowBgHeader)}><th className={css([styles.tableData, styles.width])} colSpan={3}>{textFirstCell}</th></tr>;
    } else if (isHeader && textSecondCell !== null) {
        return (
            <tr className={css(styles.rowBg)}>
                <th className={css(styles.tableData)}>Checked / Unchecked</th>
                <th className={css(styles.tableData)}>{textFirstCell}</th>
                <th className={css(styles.tableData)}>{textSecondCell}</th>
            </tr>
        );
    } else if (!isHeader) {
        return (
            <tr className={ rowChecked ? css(styles.rowChecked) : css(styles.rowBg)}>
                <td><input type="checkbox" onClick={() => setCheck(!rowChecked)} checked={rowChecked}></input></td>
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
    },
    rowChecked: {
        background: "#e6e4e4",
    },
    width: {
        width: "100%",
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
