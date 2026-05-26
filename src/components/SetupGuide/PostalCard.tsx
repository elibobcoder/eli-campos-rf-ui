import ComputerIcon from '../../assets/icons/ComputerIcon.svg';

interface PortalCardProps {
  title: string;
  description: string;
}

/** Step 3 portal card */

const PortalCard = ({ title, description }: PortalCardProps) => (
  <div className="workflow-card workflow-card-portal">
    <div className="workflow-card__header">
      <img src={ComputerIcon} alt="ComputerIcon" className="workflow-card-portal-logo" />
      <span className="workflow-card__title">{title}</span>
    </div>
    <p className="workflow-card__desc">{description}</p>
  </div>
);

export default PortalCard;
