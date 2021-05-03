import React, { useState } from "react";
import CourseForm from "./CourseForm";
import { saveCourse } from "../api/courseApi";
import { toast } from "react-toastify";

const ManageCoursePage = (props) => {
  const [course, setCourse] = useState({
    id: null,
    slug: "",
    title: "",
    authorId: null,
    category: "",
  });
  const [errors, setErrors] = useState({
    id: "",
    slug: "",
    title: "",
    authorId: "",
    category: "",
  });

  const handleChange = (event) => {
    console.log("change", event.target.name, event.target.value, event);
    setCourse({
      ...course,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    saveCourse(course).then(() => {
      props.history.push("/courses");
      toast.success("course saved!");
    });
  };

  return (
    <>
      <h2>Manage Course</h2>
      <CourseForm
        course={course}
        onSubmit={handleSubmit}
        onChange={handleChange}
        errors={errors}
      />
      {props.match.params.slug}
    </>
  );
};

export default ManageCoursePage;
