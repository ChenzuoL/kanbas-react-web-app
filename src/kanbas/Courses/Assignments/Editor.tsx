export default function AssignmentEditor() {
    return (
      <div id="wd-assignments-editor">
        <label htmlFor="wd-name"><h3>Assignment Name</h3></label>
        <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
        <textarea id="wd-description">
          The assignment is available online Submit a link to the landing page of
        </textarea>
        <br /><br />
        <table>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-points">Points</label>
            </td>
            <td>
              <input id="wd-points" value={100} />
            </td>
          </tr>
          <br />
          {/* Complete on your own */}
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-group">Assignment group</label>
            </td>
            <td>
                <select name="group">
                    <option value="ASSIGNMENTS">
                        ASSIGNMENTS
                    </option>
                    {/* Add other options below */}
                </select>
            </td>
          </tr>
          <br />
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-display-grade-as">Display Grade as</label>
            </td>
            <td>
                <select name="grade">
                    <option value="PERCENTAGE">
                        PERCENTAGE
                    </option>
                    {/* Add other options below */}
                </select>
            </td>
          </tr>
          <br />
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-submission-type">Submission Type</label>
            </td>
            <td>
                <select name="type">
                    <option value="ONLINE">
                        Online
                    </option>
                    <option value="IN-PERSON">
                        In Person
                    </option>
                    {/* Add other options below */}
                </select><br/><br/>
                <label htmlFor="wd-submission-type">Online Entry Options</label><br/>
                <input type="checkbox" name="check-genre" id="wd-text-entry"/>
                <label htmlFor="wd-text-entry">Text Entry</label><br/>
                <input type="checkbox" name="check-genre" id="wd-website-url"/>
                <label htmlFor="wd-website-url  ">Website URL</label><br/>
                <input type="checkbox" name="check-genre" id="wd-media-recordings"/>
                <label htmlFor="wd-media-recordings">Media Recording</label><br/>
                <input type="checkbox" name="check-genre" id="wd-student-annotation"/>
                <label htmlFor="wd-student-annotation">Student Annotation</label><br/>
                <input type="checkbox" name="check-genre" id="wd-file-upload"/>
                <label htmlFor="wd-file-upload">File Uploads</label><br/>
            </td>
          </tr>
          <br />
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-assign">Assign</label>
            </td>
            <td>
                <label htmlFor="wd-assign-to">Assign to</label><br/>
                <input id="wd-name" value="Everyone" /><br /><br />
                <label htmlFor="wd-due-date">Due</label><br/>
                <input type="date" id="wd-due-date" value="2024-05-13"/><br/><br/>
                <td>
                    <label htmlFor="wd-available-from ">Available From</label><br/>
                    <input type="date" id="wd-available-from" value="2024-05-06"/>
                </td>
                <td>
                    <label htmlFor="wd-available-until">Until</label><br/>
                    <input type="date" id="wd-available-until" value="2024-05-20"/>
                </td>
                <hr></hr>
                <button>Cancel</button>
                <button>Save</button>        
            </td>
          </tr>
        </table>
      </div>
  );}
  
  