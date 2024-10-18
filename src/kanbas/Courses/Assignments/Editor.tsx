import { useParams, Link } from 'react-router-dom';
import * as db from "../../Database"; // Import the database containing assignments

export default function AssignmentEditor() {
  const { cid, aid } = useParams();
  const assignment = db.assignmentsData.find((assignment) => assignment._id === aid);
  if (!assignment) {
    return <p>Assignment not found</p>; // You can replace this with a more user-friendly message or redirect
  }


  return (
    <div id="wd-assignments-editor" className="container-fluid mt-5">
      <form>
        {/* Assignment Name */}
        <div className="mb-4">
          <label htmlFor="wd-name" className="form-label"><h5>Assignment Name</h5></label>
          <input id="wd-name" value = {assignment.title} className="form-control w-100" />
        </div>

        {/* Description */}
        <div className="mb-4">
          <label htmlFor="wd-description" className="form-label">Description</label>
          <textarea 
            id="wd-description" 
            rows={5}  
            className="form-control w-100"
            placeholder="Enter assignment description here"
          >
            {assignment.description}
          </textarea>
        </div>

        {/* Points */}
        <div className="row mb-3">
          <label htmlFor="wd-points" className="col-sm-3 col-form-label text-end">Points</label>
          <div className="col-sm-9">
            <input id="wd-points" type="number" value={assignment.points} className="form-control" />
          </div>
        </div>

        {/* Assignment Group */}
        <div className="row mb-3">
          <label htmlFor="wd-group" className="col-sm-3 col-form-label text-end">Assignment Group</label>
          <div className="col-sm-9">
            <select id="wd-group" className="form-control">
              <option value="ASSIGNMENTS">ASSIGNMENTS</option>
            </select>
          </div>
        </div>

        {/* Display Grade As */}
        <div className="row mb-3">
          <label htmlFor="wd-display-grade-as" className="col-sm-3 col-form-label text-end">Display Grade as</label>
          <div className="col-sm-9">
            <select id="wd-display-grade-as" className="form-control">
              <option value="PERCENTAGE">PERCENTAGE</option>
            </select>
          </div>
        </div>

        {/* Submission Type */}
        <div className="row mb-3">
          <label htmlFor="wd-submission-type" className="col-sm-3 col-form-label text-end">Submission Type</label>
          <div className="col-sm-9 border p-3">
            <select id="wd-submission-type" className="form-control">
              <option value="ONLINE">Online</option>
              <option value="IN-PERSON">In Person</option>
            </select><br/>
            {/* Online Entry Options */}
            <div className="row mb-4">
              <label className="col-sm-3 col-form-label fw-bold text-nowrap">Online Entry Options</label>
              <div className="col-sm-10">
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" id="wd-text-entry" />
                  <label className="form-check-label" htmlFor="wd-text-entry">Text Entry</label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" id="wd-website-url" defaultChecked />
                  <label className="form-check-label" htmlFor="wd-website-url">Website URL</label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" id="wd-media-recordings" />
                  <label className="form-check-label" htmlFor="wd-media-recordings">Media Recording</label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" id="wd-student-annotation" />
                  <label className="form-check-label" htmlFor="wd-student-annotation">Student Annotation</label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" id="wd-file-upload" />
                  <label className="form-check-label" htmlFor="wd-file-upload">File Uploads</label>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Assign To, Due, Available */}
        <div className="row mb-3 ">
          <label htmlFor="wd-submission-type" className="col-sm-3 col-form-label text-end">Assign</label>
          <div className="col-sm-9 border p-3">
            {/* Assign To */}
            <label htmlFor="wd-assign-to" className="col-sm-3 col-form-label fw-bold text-nowrap">Assign to</label>
            <div className="col-sm-10">
              <input id="wd-assign-to" value="Everyone" className="form-control" />
            </div>

            {/* Due Date */}
            <label htmlFor="wd-due-date" className="col-sm-3 col-form-label fw-bold text-nowrap">Due Date</label>
            <div className="col-sm-10">
              <input type="datetime-local" id="wd-due-date" value={"2024-05-13T23:59"} className="form-control" />
            </div>

            {/* Available From and Until */}
            <div className="row">
              <div className="col-sm-6">
                <label htmlFor="wd-available-from" className="col-form-label fw-bold text-nowrap">Available From</label>
                <input type="datetime-local" id="wd-available-from" value={assignment.availableFrom} className="form-control" />
              </div>
              <div className="col-sm-6">
                <label htmlFor="wd-available-until" className="col-form-label fw-bold text-nowrap">Until</label>
                <input type="datetime-local" id="wd-available-until" value={assignment.availableUntil} className="form-control" />
              </div>
            </div>
          </div>
        </div>

        <hr/>
        {/* Buttons */}
        <div className="d-flex justify-content-end">
          <Link to={`/Kanbas/courses/${cid}/Assignments`} className="btn btn-secondary me-2">
            Cancel
          </Link>
          <Link to={`/Kanbas/courses/${cid}/Assignments`} className="btn btn-danger">
            Save
          </Link>
        </div>
      </form>
    </div>
  );
}
