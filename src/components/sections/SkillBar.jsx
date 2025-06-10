import './SkillBar.css';

const SkillBar = ({ skill, percent }) => {
  return (
    <li>
      {skill}
      <div className="progress-wrapper">
        <div className="progress" style={{ width: `${percent}%` }}>
          <span>{percent}%</span>
        </div>
      </div>
    </li>
  );
};


export default SkillBar;
