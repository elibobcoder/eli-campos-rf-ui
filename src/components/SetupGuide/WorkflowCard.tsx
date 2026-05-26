import LogicArrowIcon from '../../assets/icons/LogicArrowIcon.svg';

interface WorkflowCardProps {
  title: string;
  description: string;
}

/** Step 2 workflow cards */

const WorkflowCard = ({ title, description }: WorkflowCardProps) => (
  <div className="workflow-card">
    <div className="workflow-card__header">
      <img src={LogicArrowIcon} alt="LogicArrowIcon" className="workflow-card__header-logo" />
      <span className="workflow-card__title">{title}</span>
    </div>
    <p className="workflow-card__desc">{description}</p>
  </div>
);

export default WorkflowCard;
