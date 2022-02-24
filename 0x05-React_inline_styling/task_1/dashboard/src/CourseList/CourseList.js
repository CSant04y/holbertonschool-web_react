import CourseListRow from "./CourseListRow.js";
import React from "react";
import PropTypes from 'prop-types';
import CourseShape from './CourseShape.js';
import { StyleSheet, css } from 'aphrodite';


const CourseList = ({ listCourses }) => {
    return (
        <table className={css(styles.CourseList)}>
            <thead>
                <CourseListRow
                    textFirstCell="Available courses"
                    isHeader={true}
                />
                <CourseListRow
                    textFirstCell="Course name"
                    textSecondCell="Credit"
                    isHeader={true}
                />
            </thead>
            <tbody className={css(styles.TBody)}>
                {listCourses.length === 0 && (
                    <CourseListRow
                        textFirstCell="No course available yet"
                        isHeader={false}
                    />
                )}
                {listCourses.map((course) => (
                    <CourseListRow
                        key={course.id}
                        textFirstCell={course.name}
                        textSecondCell={course.credit}
                        isHeader={false}
                    />
                ))}
            </tbody>
        </table>
    )
};

const styles = StyleSheet.create({
    CourseList: {
        border: "1px solid black",
        width: "100%",
        border: "1px solid",
        borderColor: "lightgray",
    },
    TBody: {
        textAlign: "left"
    }
})

CourseList.defaultPropTypes = {
    listCourses: [],
}
CourseList.propTypes = {
    listCourses: PropTypes.arrayOf(CourseShape),
}


export default CourseList;