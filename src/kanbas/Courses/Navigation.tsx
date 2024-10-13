import { Link, useLocation } from "react-router-dom";
import "../styles.css"

export default function CoursesNavigation() {
  // Use useLocation to get the current path
  const location = useLocation();

  // Determine the active link based on the current path
  const getActiveLinkClass = (path:string) => {
    return location.pathname === path ? "active" : "";
  };

  return (
    <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
      <Link to="/Kanbas/Courses/1234/Home" id="wd-course-home-link"
        className={`list-group-item border border-0 ${getActiveLinkClass('/Kanbas/Courses/1234/Home')}`}> Home </Link>
      <Link to="/Kanbas/Courses/1234/Modules" id="wd-course-modules-link"
        className={`list-group-item border border-0 ${getActiveLinkClass('/Kanbas/Courses/1234/Modules')}`}> Modules </Link>
      <Link to="/Kanbas/Courses/1234/Piazza" id="wd-course-piazza-link"
        className={`list-group-item border border-0 ${getActiveLinkClass('/Kanbas/Courses/1234/Piazza')}`}> Piazza </Link>
      <Link to="/Kanbas/Courses/1234/Zoom" id="wd-course-zoom-link"
        className={`list-group-item border border-0 ${getActiveLinkClass('/Kanbas/Courses/1234/Zoom')}`}> Zoom </Link>
      <Link to="/Kanbas/Courses/1234/Assignments" id="wd-course-assignments-link"
        className={`list-group-item border border-0 ${getActiveLinkClass('/Kanbas/Courses/1234/Assignments')}`}> Assignments </Link>
      <Link to="/Kanbas/Courses/1234/Quizzes" id="wd-course-quizzes-link"
        className={`list-group-item border border-0 ${getActiveLinkClass('/Kanbas/Courses/1234/Quizzes')}`}> Quizzes </Link>
      <Link to="/Kanbas/Courses/1234/People" id="wd-course-people-link"
        className={`list-group-item border border-0 ${getActiveLinkClass('/Kanbas/Courses/1234/People')}`}> People </Link>
    </div>
  );
}