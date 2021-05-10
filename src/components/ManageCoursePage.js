import React, { useState, useEffect } from "react";
import CourseForm from "./CourseForm";
import { toast } from "react-toastify";
import * as courseActions from "../redux/actions/courseActions";
import * as authorActions from "../redux/actions/authorActions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

const ManageCoursePage = (props) => {
  const [course, setCourse] = useState({
    id: null,
    slug: "",
    title: "",
    authorId: null,
    authorName: null,
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
    if (props.authors.length === 0) {
      props.actions.loadAuthors().catch((error) => {
        alert("Loading authors failed" + error);
      });
    }
  }, [
    props.courses.length,
    props.authors.length,
    props.match.params.slug,
    props.actions,
  ]);

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
    debugger;
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
        authors={props.authors}
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
    courses:
      state.authors.length === 0
        ? []
        : state.courses.map((course) => {
            return {
              ...course,
              authorName: state.authors.find((a) => a.id === course.authorId)
                .name,
            };
          }),
    authors: state.authors,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: {
      loadAuthors: bindActionCreators(authorActions.loadAuthors, dispatch),
      saveCourse: bindActionCreators(courseActions.saveCourse, dispatch),
      loadCourses: bindActionCreators(courseActions.loadCourses, dispatch),
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);
