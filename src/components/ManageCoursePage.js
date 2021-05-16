import React, { useState, useEffect } from "react";
import CourseForm from "./CourseForm";
import { toast } from "react-toastify";
import {
  loadCourses,
  saveCourse,
  deleteCourse,
} from "../redux/actions/courseActions";
import { loadAuthors } from "../redux/actions/authorActions";
import { connect } from "react-redux";

const ManageCoursePage = ({
  match,
  history,
  courses,
  authors,
  loadCourses,
  loadAuthors,
  deleteCourse,
  saveCourse,
  ...props
}) => {
  const [course, setCourse] = useState({ ...props.course });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const slug = match.params.slug;
    if (courses.length === 0) {
      loadCourses().catch((error) => {
        alert("Loading courses failed" + error);
      });
    } else if (slug) {
      // FIXME: TODO: Need to convert this to redux
      // setCourse(courseStore.getCourseBySlug(slug));
    }
    if (authors.length === 0) {
      loadAuthors().catch((error) => {
        alert("Loading authors failed" + error);
      });
    }
  }, []);

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
    saveCourse(course);
    history.push("/courses");
    toast.success("course saved!");
  };

  const handleDelete = (event) => {
    console.log("course deleted", course, event);
    deleteCourse(course.id);
    history.push("/courses");
    toast.warning("course deleted!");
  };

  return (
    <>
      <h2>Manage Course</h2>
      <CourseForm
        course={course}
        authors={authors}
        onSubmit={handleSubmit}
        onChange={handleChange}
        onDelete={handleDelete}
        errors={errors}
      />
    </>
  );
};

function getCourseBySlug(courses, slug) {
  return courses.find((course) => course.slug === slug) || null;
}

const mapStateToProps = (state, ownProps) => {
  const slug = ownProps.match.params.slug;
  const course = slug
    ? {
        id: null,
        slug: "",
        title: "",
        authorId: null,
        authorName: null,
        category: "",
      }
    : getCourseBySlug(state.courses, slug);
  const courses =
    state.authors.length === 0
      ? []
      : state.courses.map((course) => {
          return {
            ...course,
            authorName: state.authors.find((a) => a.id === course.authorId)
              .name,
          };
        });
  return {
    course,
    courses,
    authors: state.authors,
  };
};

const mapDispatchToProps = {
  loadAuthors,
  saveCourse,
  deleteCourse,
  loadCourses,
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);
