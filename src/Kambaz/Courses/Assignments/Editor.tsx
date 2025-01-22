export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name">Assignment Name</label>
      <br />
      <br />
      <input id="wd-name" value="A1 - ENV + HTML" />
      <br />
      <br />
      <textarea id="wd-description" cols={50} rows={10}>
        The assignment is available online Submit a link to the landing page of
        your Web Application running on Netlify. The landing page should include
        the following: Your full name and section links to each of the lab
        assignments, Link to the Kanbas application, Links to all relevant
        source code repositories. The kanbas application should include a link
        to navigate back to the landing page.
      </textarea>
      <br />
      <table>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-points">Points</label>
          </td>
          <td>
            <input id="wd-points" value={100} />
          </td>
        </tr>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-group">Assignment Group</label>
          </td>
          <td>
            <select id="wd-group">
              <option value="ASSIGNMENTS">ASSIGNMENTS</option>
              <option value="QUIZZES">QUIZZES</option>
              <option value="EXAM">EXAM</option>
              <option value="PROJECT">PROJECT</option>
            </select>
          </td>
        </tr>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-submission-type">Submission Type</label>
          </td>
          <td>
            <select id="wd-submission-type">
              <option value="Online">Online</option>
              <option value="Offline">Offline</option>
            </select>
          </td>
        </tr>
        <tr>
          <td align="right" valign="top"></td>
          <td>
            Online Entry Options
            <br />
            <input type="checkbox" name="text-entry" id="wd-text-entry" />
            <label htmlFor="wd-text-entry">Text Entry</label>
            <br />
            <input type="checkbox" name="website-url" id="wd-website-url" />
            <label htmlFor="wd-website-url">Website URL</label>
            <br />
            <input
              type="checkbox"
              name="media-recordings"
              id="wd-media-recordings"
            />
            <label htmlFor="wd-media-recordings">Media Recordings</label>
            <br />
            <input
              type="checkbox"
              name="student-annotation"
              id="wd-student-annotation"
            />
            <label htmlFor="wd-student-annotation">Student Annotation</label>
            <br />
            <input type="checkbox" name="file-upload" id="wd-file-upload" />
            <label htmlFor="wd-file-upload">File Uploads</label>
          </td>
        </tr>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-assign-to">Assign</label>
          </td>
          <td>
            <label htmlFor="wd-assign-to">Assign to</label>
            <br />
            <input id="wd-assign-to" value={"Everyone"} />
          </td>
        </tr>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-due-date"></label>
          </td>
          <td>
            <label htmlFor="wd-due-date">Due</label>
            <br />
            <input
              id="wd-due-date"
              type="date"
              value={new Date().toISOString()}
            />
          </td>
        </tr>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-available-from"></label>
          </td>
          <td>
            <label htmlFor="wd-available-from">Available from</label>
            <br />
            <input id="wd-available-from" type="date" />
          </td>
          <td align="right" valign="top">
            <label htmlFor="wd-available-until"></label>
          </td>
          <td>
            <label htmlFor="wd-available-until">Until</label>
            <br />
            <input id="wd-available-until" type="date" />
          </td>
        </tr>
      </table>
      <hr />
      <div align="right">
        <button>Cancel</button> <button>Save</button>
      </div>
    </div>
  );
}
