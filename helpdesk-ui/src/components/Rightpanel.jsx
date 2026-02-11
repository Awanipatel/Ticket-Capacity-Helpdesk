export default function RightPanel({ onOpenTodo }){
  return(
    <div className="right">
      <div className="rightHeader" style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
        <button className="todoToggleBtn" onClick={onOpenTodo} style={{background: 'none', border: 'none', cursor: 'pointer', padding: 6}}>
           Todo
        </button>
        <div className="closeX">✕</div>
      </div>
      
      <div className="field">
        <label>Priority</label>
        <select>
          <option> Medium</option>
          <option> High</option>
          <option> Low</option>
        </select>
      </div>

      <div className="field">
        <label>Assigned To</label>
        <select>
          <option>Allie Harmon</option>
        </select>
        <button className="assignMe">Assign to me</button>
      </div>

      <div className="field">
        <label>Project</label>
        <select>
          <option>Administrative</option>
        </select>
      </div>

      <div className="field">
        <label>Due Date</label>
        <input type="date" defaultValue="2022-06-19"/>
      </div>

      <div className="field">
        <label>Tags</label>
        <div className="tagsBox">Add Tags</div>
      </div>

      <div className="section">
        <button className="sectionBtn" onClick={onOpenTodo}>
          TASKS <span className="count">3</span>
        </button>
      </div>

      <div className="section">
        <button className="sectionBtn">
          COLLECTED FIELDS <span className="count">2</span>
        </button>
      </div>

      <div className="section">
        <button className="sectionBtn">
           LINKED TICKETS <span className="count">1</span>
        </button>
      </div>

      <div className="section">
        <button className="sectionBtn">
          HISTORY <span className="count">12</span>
        </button>
      </div>
    </div>
  )
}
