import { cn } from '../../utils/cn';

interface Step1CardProps {
  isMobile?: boolean;
}

/** Step 1 card */

const Step1Card = ({ isMobile = false }: Step1CardProps) => (
  <div className={cn('step-wide-card', isMobile && 'step-wide-card--mobile')}>
    <div className="step-wide-card__col step-wide-card__col--first">
      <span className="step-wide-card__col-title">General</span>
      <span className="step-wide-card__col-desc">Define Attendee types &amp; attributes</span>
    </div>
    <div className="step-wide-card__col">
      <span className="step-wide-card__col-title">Title</span>
      <span className="step-wide-card__col-desc">
        Description that explains the value goes here. Description that explains the value goes here.
      </span>
    </div>
    <div className="step-wide-card__col">
      <span className="step-wide-card__col-title">Title</span>
      <span className="step-wide-card__col-desc">
        Description that explains the value goes here. Description that explains the value goes here.
      </span>
    </div>
    <div className="step-wide-card__col" />
  </div>
);

export default Step1Card;
