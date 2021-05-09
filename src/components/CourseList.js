import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const CourseList = (props) => (
  <table className="table">
    <thead>
      <tr>
        <th>&nbsp;</th>
        <th>Title</th>
        <th>Author ID</th>
        <th>Category</th>
        <th>&nbsp;</th>
      </tr>
    </thead>
    <tbody>
      {props.courses.map((course) => {
        return (
          <tr key={course.id}>
            <td>
              <a
                className="btn btn-light"
                href={"https://www.pluralsight.com/courses/" + course.slug}
              >
                Watch
              </a>
            </td>
            <td>
              <Link to={"/course/" + course.slug}>{course.title}</Link>
            </td>
            <td>{course.authorId}</td>
            <td>{course.category}</td>
            <td>
              <button
                className="btn btn-danger"
                onClick={() => {
                  props.onDelete(course.id);
                }}
              >
                Delete
              </button>
            </td>
          </tr>
        );
      })}
      <tr></tr>
    </tbody>
  </table>
);

CourseList.propTypes = {
  onDelete: PropTypes.func.isRequired,
  courses: PropTypes.arrayOf(
    PropTypes.shape({
      // id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      authorId: PropTypes.number.isRequired,
      category: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default CourseList;
