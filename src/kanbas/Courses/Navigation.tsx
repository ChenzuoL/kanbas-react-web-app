import { Link, useLocation, useParams } from "react-router-dom";
import "../styles.css";

export default function CoursesNavigation() {
  const { cid } = useParams(); // Retrieves the course ID from the URL
  const { pathname } = useLocation(); // Retrieves the current path

  console.log("Path:", pathname); // Debugging to check if courseId is correctly retrieved

  const links = [
    { label: "Home", path: `/Kanbas/Courses/${cid}/Home` },
    { label: "Modules", path: `/Kanbas/Courses/${cid}/Modules` },
    { label: "Piazza", path: `/Kanbas/Courses/${cid}/Piazza` },
    { label: "Zoom", path: `/Kanbas/Courses/${cid}/Zoom` },
    { label: "Assignments", path: `/Kanbas/Courses/${cid}/Assignments` },
    { label: "Quizzes", path: `/Kanbas/Courses/${cid}/Quizzes` },
    { label: "Grades", path: `/Kanbas/Courses/${cid}/Grades` },
    { label: "People", path: `/Kanbas/Courses/${cid}/People` },
  ];

  return (
    <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
      {links.map((link) => (
        <Link
          key={link.path}
          to={link.path}
          id={`wd-course-${link.label.toLowerCase()}-link`}
          className={`list-group-item border border-0 ${
            pathname === link.path ? "active" : ""
          }`}
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
}
