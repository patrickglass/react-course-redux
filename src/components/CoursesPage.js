import React, { useEffect, useState } from "react";
import { getCourses } from "../api/courseApi";

const CoursesPage = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const resp = await getCourses();
      setCourses(resp);
    };
    fetchData();
  }, []);

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
          {courses.map((course) => {
            return (
              <tr key={course.id}>
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
};

export default CoursesPage;
