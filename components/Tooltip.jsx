import { OverlayTrigger, Popover } from 'react-bootstrap';

const Tooltip = ({ icon = 'fas fa-question-circle', placement = 'top', children }) => {
  return (
    <OverlayTrigger
      placement={placement}
      overlay={
        <Popover>
          <Popover.Content>{children}</Popover.Content>
        </Popover>
      }
    >
      <div className="h-8 w-8 text-accent flex justify-center items-center">
        <i className={icon}></i>
      </div>
    </OverlayTrigger>
  );
};

export default Tooltip;
