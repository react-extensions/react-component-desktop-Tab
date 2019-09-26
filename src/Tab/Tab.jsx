import React, { useContext, useCallback, useEffect, useRef } from 'react';
import cn from 'classnames';
import propTypes from 'prop-types';
import Context from './Context';

function Tab({ className, children, label, _onTabActive, _group }) {
  const { onTabActive, current } = useContext(Context);
  const ref = useRef();
  const isActive = current === label;
  const isFunctionChild = typeof children === 'function';

  const onClick = useCallback(() => {
    onTabActive(label);
  }, [label, onTabActive]);

  useEffect(() => {
    if (!_group || !isActive) {
      return;
    }
    _onTabActive(ref.current);
  }, [_group, _onTabActive, isActive]);

  return (
    <div
      role="tab"
      tabIndex="0"
      ref={ref}
      onClick={onClick}
      className={cn(className, 'bi-tab', isActive && 'bi-tab-active')}
    >
      {(isFunctionChild ? children(isActive) : children) || label}
    </div>
  );
}

Tab.defaultProps = {
  className: undefined,
  children: undefined,
  _onTabActive: () => undefined,
  _group: false,
};

Tab.propTypes = {
  className: propTypes.string,
  children: propTypes.node,
  _group: propTypes.bool,
  _onTabActive: propTypes.func,
  label: propTypes.string.isRequired,
};

export default Tab;
