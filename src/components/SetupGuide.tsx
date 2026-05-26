import AttendeeIcon from '../assets/icons/AttendeeIcon.svg';
import Step1Card from './SetupGuide/Step1Card';
import WorkflowCard from './SetupGuide/WorkflowCard';
import AddWorkflowCard from './SetupGuide/AddWorkflowCard';
import PortalCard from './SetupGuide/PostalCard';
import { cn } from '../utils/cn';
import '../styles/SetupGuide.scss';

interface SetupGuideProps {
  isMobile?: boolean;
}

const REGISTRATION_WORKFLOWS = [
  {
    title: 'Attendee Registration',
    description: 'Start by creating a general registration workflow',
  },
  {
    title: 'Attendee Registration',
    description: 'Start by creating a general registration workflow',
  },
  {
    title: 'Attendee Registration',
    description: 'Start by creating a general registration workflow',
  },
] as const;

const SetupGuide = ({ isMobile = false }: SetupGuideProps) => (
  <div className="setup-guide">

    {/* Introductory guide content */}
    <div className="setup-guide__intro">
      <h2 className="setup-guide__heading">Event setup guide</h2>
      <p className="setup-guide__subheading">
        See the available list of modules below. We suggest that you start with the attendee module.
      </p>
    </div>

    <hr className="setup-guide__divider" />

    <section className="guide-section">

      {/* Section header */}
      <div className="guide-section__header">
        <img src={AttendeeIcon} alt="Attendee" className="guide-section__header-logo" />
        <h3 className="guide-section__title">Attendee</h3>
      </div>

      {/* Step 1 */}
      <div className="guide-step">
        <p className="guide-step__label">
          <strong>Step 1:</strong> Base settings.
        </p>
        <Step1Card isMobile={isMobile} />
      </div>

      {/* Step 2 */}
      <div className="guide-step">
        <p className="guide-step__label">
          <strong>Step 2:</strong> Build registration workflows.
        </p>
        <div className={cn('workflow-grid', isMobile && 'workflow-grid--mobile')}>

          {/* Render existing workflow cards */}
          {REGISTRATION_WORKFLOWS.map((workflow, index) => (
            <WorkflowCard
              key={index}
              title={workflow.title}
              description={workflow.description}
            />
          ))}

          {/* CTA card for adding additional workflows */}
          <AddWorkflowCard />
        </div>
      </div>

      {/* Step 3 */}
      <div className="guide-step">
        <p className="guide-step__label">
          <strong>Step 3:</strong> Design post-registration experiences.
        </p>
        <div className="workflow-grid workflow-grid--single">
          <PortalCard
            title="Attendee Portal"
            description="Manage the portal that attendees will see after they've register for your event."
          />
        </div>
      </div>
    </section>
  </div>
);

export default SetupGuide;
