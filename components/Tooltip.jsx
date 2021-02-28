import React from 'react';
import { OverlayTrigger, Popover } from 'react-bootstrap';

const Tooltip = ({ icon = 'fas fa-question-circle', children, className }) => {
  const classes = ['h-8 w-8 text-green-600 flex justify-center items-center'];
  if (className) {
    classes.push(className);
  }

  return (
    <OverlayTrigger
      overlay={
        <Popover>
          <Popover.Content>{children}</Popover.Content>
        </Popover>
      }
    >
      <div className={classes.join(' ')}>
        <i className={icon}></i>
      </div>
    </OverlayTrigger>
  );
};

export default Tooltip;
