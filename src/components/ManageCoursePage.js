import React, { useState, useEffect } from "react";
import CourseForm from "./CourseForm";
import { saveCourse, getCourseBySlug } from "../api/courseApi";
import { toast } from "react-toastify";

const ManageCoursePage = (props) => {
  const [course, setCourse] = useState({
    id: null,
    slug: "",
    title: "",
    authorId: null,
    category: "",
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const slug = props.match.params.slug;
    if (slug) {
      getCourseBySlug(slug).then((_course) => setCourse(_course));
    }
  }, [props.match.params.slug]);

  function formIsValid() {
    const _errors = {};

    if (!course.title) _errors.title = "Title is required";
    if (!course.authorId) _errors.authorId = "Author is required";
    if (!course.category) _errors.category = "Category is required";

    setErrors(_errors);
    // Form is valid if errors object has no properties
    return Object.keys(_errors).length === 0;
  }

  const handleChange = (event) => {
    console.log("change", event.target.name, event.target.value, event);
    setCourse({
      ...course,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!formIsValid()) return;

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
    </>
  );
};

export default ManageCoursePage;
