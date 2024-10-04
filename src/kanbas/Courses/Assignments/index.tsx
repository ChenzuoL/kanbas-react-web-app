import AssignmentControls from "./AssignmentsControls";
import { BsGripVertical } from "react-icons/bs";
import { FaPlus } from "react-icons/fa6";
import { IoEllipsisVertical } from "react-icons/io5";
import { MdEditNote } from "react-icons/md";
import AssignmentControlButtons from "./AssignmentControlButtons";

export default function Assignments() {
  return (
    <div id="wd-assignments">
      <AssignmentControls /><br /><br />
      <ul id="wd-modules" className="list-group rounded-0">
        <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary">
            <BsGripVertical className="me-2 fs-3" />
            Assignments
            <div className="float-end">
              <span
                className="badge rounded-pill"
                style={{
                  border: '1px solid black',
                  color: 'black',
                  backgroundColor: 'transparent',
                  padding: '5px 10px',
                  fontSize: '15px',
                  marginRight: '15px'
                }}
              >
                40% of Total
              </span>
              <FaPlus />
              <IoEllipsisVertical className="fs-4" />
            </div>
          </div>
          <ul className="wd-lessons list-group rounded-0">
            <li className="wd-lesson list-group-item p-3 ps-1">
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                  <BsGripVertical className="me-2 fs-3" />
                  <MdEditNote className="me-2 fs-3 text-success" />
                  <div className="wd-assignment-details">
                    <a
                      className="wd-assignment-link"
                      href="#/Kanbas/Courses/1234/Assignments/123"
                      style={{
                        fontWeight: 'bold',
                        fontSize: '18px',
                        textDecoration: 'none', // Remove underline
                        color: 'inherit', // Keep link color the same
                      }}
                    >
                      A1
                    </a>
                    <div
                      className="wd-assignment-info"
                      style={{ fontSize: '14px', color: '#777' }}
                    >
                      <span style={{ color: 'red' }}>Multiple Modules | </span>
                      <span style={{ fontWeight: 'bold'}}>
                        Not available until 
                      </span>
                      <span> May 6 at 12:00am |</span>
                      <br />
                      <span style={{ fontWeight: 'bold'}}>
                        Due 
                      </span>
                      <span> May 13 at 11:59pm | 100 pts</span>
                    </div>
                  </div>
                </div>
                <AssignmentControlButtons />
              </div>
            </li>
            <li className="wd-lesson list-group-item p-3 ps-1">
            <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                  <BsGripVertical className="me-2 fs-3" />
                  <MdEditNote className="me-2 fs-3 text-success" />
                  <div className="wd-assignment-details">
                    <a
                      className="wd-assignment-link"
                      href="#/Kanbas/Courses/1234/Assignments/123"
                      style={{
                        fontWeight: 'bold',
                        fontSize: '18px',
                        textDecoration: 'none', // Remove underline
                        color: 'inherit', // Keep link color the same
                      }}
                    >
                      A2
                    </a>
                    <div
                      className="wd-assignment-info"
                      style={{ fontSize: '14px', color: '#777' }}
                    >
                      <span style={{ color: 'red' }}>Multiple Modules | </span>
                      <span style={{ fontWeight: 'bold'}}>
                        Not available until 
                      </span>
                      <span> May 13 at 12:00am |</span>
                      <br />
                      <span style={{ fontWeight: 'bold'}}>
                        Due 
                      </span>
                      <span> May 20 at 11:59pm | 100 pts</span>
                    </div>
                  </div>
                </div>
                <AssignmentControlButtons />
              </div>
            </li>
            <li className="wd-lesson list-group-item p-3 ps-1">
            <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                  <BsGripVertical className="me-2 fs-3" />
                  <MdEditNote className="me-2 fs-3 text-success" />
                  <div className="wd-assignment-details">
                    <a
                      className="wd-assignment-link"
                      href="#/Kanbas/Courses/1234/Assignments/123"
                      style={{
                        fontWeight: 'bold',
                        fontSize: '18px',
                        textDecoration: 'none', // Remove underline
                        color: 'inherit', // Keep link color the same
                      }}
                    >
                      A3
                    </a>
                    <div
                      className="wd-assignment-info"
                      style={{ fontSize: '14px', color: '#777' }}
                    >
                      <span style={{ color: 'red' }}>Multiple Modules | </span>
                      <span style={{ fontWeight: 'bold'}}>
                        Not available until 
                      </span>
                      <span> May 20 at 12:00am |</span>
                      <br />
                      <span style={{ fontWeight: 'bold'}}>
                        Due 
                      </span>
                      <span> May 27 at 11:59pm | 100 pts</span>
                    </div>
                  </div>
                </div>
                <AssignmentControlButtons />
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}
