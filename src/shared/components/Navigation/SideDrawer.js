import React,{useState,useRef} from 'react';
import ReactDOM from 'react-dom';
import { CSSTransition } from 'react-transition-group';

import './SideDrawer.css';

const SideDrawer = props => {
  const [inProp, setInProp] = useState(false);
  const nodeRef = useRef(null)

  const content = (
    <CSSTransition
      in={props.show}
      
      nodeRef={nodeRef} 
      timeout={200} 
      timeout={200}
      classNames="slide-in-left"
      mountOnEnter
      unmountOnExit
    >
      <aside className="side-drawer"  onClick={props.onClick}>{props.children}</aside>
    </CSSTransition>
  );

  return ReactDOM.createPortal(content, document.getElementById('drawer-hook'));
};

export default SideDrawer;
