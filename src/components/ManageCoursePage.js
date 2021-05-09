import React, { useState, useEffect } from "react";
import CourseForm from "./CourseForm";
import courseStore from "../stores/courseStore";
import { toast } from "react-toastify";
import * as courseActions from "../redux/actions/courseActions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

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
    if (props.courses.length === 0) {
      props.actions.loadCourses().catch((error) => {
        alert("Loading courses failed" + error);
      });
    } else if (slug) {
      // FIXME: TODO: Need to convert this to redux
      // setCourse(courseStore.getCourseBySlug(slug));
    }
  }, [props.courses.length, props.match.params.slug, props.actions]);

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
    setCourse({
      ...course,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!formIsValid()) return;
    console.log(course);
    props.actions.saveCourse(course);
    props.history.push("/courses");
    toast.success("course saved!");
  };

  const handleDelete = (event) => {
    console.log("course deleted", course, event);
    props.actions.deleteCourse(course.id);
    props.history.push("/courses");
    toast.warning("course deleted!");
  };

  return (
    <>
      <h2>Manage Course</h2>
      <CourseForm
        course={course}
        onSubmit={handleSubmit}
        onChange={handleChange}
        onDelete={handleDelete}
        errors={errors}
      />
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    courses: state.courses,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(courseActions, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);
// export default connect(mapStateToProps)(ManageCoursePage);
