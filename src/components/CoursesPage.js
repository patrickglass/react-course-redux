import React from "react";
import { getCourses } from "../api/courseApi";

class CoursesPage extends React.Component {
  state = {
    courses: [],
  };

  async componentDidMount() {
    const resp = await getCourses();
    this.setState({ courses: resp });
  }

  render() {
    return (
      <>
        <h2>Courses</h2>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Author ID</th>
              <th>Category</th>
            </tr>
          </thead>
          <tbody>
            {this.state.courses.map((course) => {
              return (
                <tr>
                  <td>{course.title}</td>
                  <td>{course.authorId}</td>
                  <td>{course.category}</td>
                </tr>
              );
            })}
            <tr></tr>
          </tbody>
        </table>
      </>
    );
  }
}

export default CoursesPage;
