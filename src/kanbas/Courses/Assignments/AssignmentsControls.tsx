import { FaPlus } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";

export default function AssignmentControls() {
  return (
    <div id="wd-assignment-controls" style={{ whiteSpace: 'nowrap' }}>
      <div style={{ position: 'relative', display: 'inline-block', verticalAlign: 'middle', maxWidth: '250px' }}>
        <CiSearch style={{ position: 'absolute', top: '50%', left: '10px', transform: 'translateY(-50%)', fontSize: '1.5rem', color: '#aaa' }} />
        <input
          type="text"
          className="form-control form-control-lg"
          placeholder="Search..."
          style={{ paddingLeft: '40px' }}  // Add padding to avoid overlap
        />
      </div>

      <button
        id="wd-add-assignment-btn"
        className="btn btn-lg btn-danger me-1 float-end"
      >
        <FaPlus className="position-relative me-2" style={{ bottom: '1px' }} />
        Assignment
      </button>
      <button
        id="wd-add-group-btn"
        className="btn btn-lg btn-secondary me-1 float-end"
      >
        <FaPlus className="position-relative me-2" style={{ bottom: '1px' }} />
        Group
      </button>
    </div>
  );
}
