import React, { useState, useEffect } from "react";
import CourseForm from "./CourseForm";
import courseStore from "../stores/courseStore";
import { toast } from "react-toastify";
import * as courseActions from "../redux/actions/courseActions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

const ManageCoursePage = (props) => {
  const [courses, setCourses] = useState(courseStore.getCourses());
  const [course, setCourse] = useState({
    id: null,
    slug: "",
    title: "",
    authorId: null,
    category: "",
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    // courseStore.addChangeListener(onChange);
    const slug = props.match.params.slug;
    if (courses.length === 0) {
      // TODO: FIXME: Need to load data from api
      props.actions.loadCourses().catch((error) => {
        alert("Loading courses failed" + error);
      });
    } else if (slug) {
      setCourse(courseStore.getCourseBySlug(slug));
    }
    // return () => courseStore.removeChangeListener(onChange);
  }, [courses.length, props.match.params.slug]);

  // function onChange() {
  //   setCourses(courseStore.getCourses());
  // }

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
    props.actions.createCourse(course);
    // TODO: FIXME: can be enabled once we have state working on list page
    // props.history.push("/courses");
    // toast.success("course saved!");
  };

  const handleDelete = (event) => {
    console.log("course deleted", course, event);
    props.actions.createCourse(course);
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
      {props.courses.map((course) => (
        <div key={course.id}>{course.title}</div>
      ))}
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
