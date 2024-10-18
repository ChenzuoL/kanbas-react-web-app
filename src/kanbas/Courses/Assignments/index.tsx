import { useParams, Link } from "react-router-dom";
import * as db from "../../Database"; // Import the database containing assignments
import AssignmentControls from "./AssignmentsControls";
import { BsGripVertical } from "react-icons/bs";
import { MdEditNote } from "react-icons/md";
import AssignmentControlButtons from "./AssignmentControlButtons";

export default function Assignments() {
  const { cid } = useParams(); // Get the current course ID from the URL
  const assignments = db.assignments.filter((assignment) => assignment.course === cid); // Filter assignments by course ID

  return (
    <div id="wd-assignments">
      <AssignmentControls />
      <br /><br />
      <ul id="wd-assignments-list" className="list-group rounded-0">
        {assignments.map((assignment) => (
          <li key={assignment._id} className="wd-assignment-item list-group-item p-0 mb-5 fs-5 border-gray">
            <div className="wd-title p-3 ps-2 bg-secondary">
              <BsGripVertical className="me-2 fs-3" />
              Assignments
            </div>

            <ul className="wd-assignment-list list-group rounded-0">
              <li className="wd-assignment list-group-item p-3 ps-1">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center">
                    <BsGripVertical className="me-2 fs-3" />
                    <MdEditNote className="me-2 fs-3 text-success" />
                    <div className="wd-assignment-details">
                      <Link
                        to={`/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}
                        className="wd-assignment-link"
                        style={{
                          fontWeight: 'bold',
                          fontSize: '18px',
                          textDecoration: 'none',
                          color: 'inherit'
                        }}
                      >
                        {assignment.title}
                      </Link>
                    </div>
                  </div>
                  <AssignmentControlButtons />
                </div>
              </li>
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}
