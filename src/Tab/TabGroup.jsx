import React, { useCallback, useState, useMemo } from 'react';
import cn from 'classnames';
import propTypes from 'prop-types';

function TabGroup({ className, children }) {
  const [left, setLeft] = useState(0);
  const [width, setWidth] = useState(0);

  const style = useMemo(() => {
    return {
      left,
      width,
    };
  }, [left, width]);

  const onTabActive = useCallback(el => {
    setLeft(el.offsetLeft);
    setWidth(el.clientWidth);
  }, []);

  return (
    <div className={cn(className, 'bi-tab-group')}>
      {React.Children.map(children, child =>
        React.cloneElement(child, {
          ...child.props,
          _group: true,
          _onTabActive: onTabActive,
        })
      )}
      <div className="bi-tab-active-indicator" style={style} />
    </div>
  );
}

TabGroup.defaultProps = {
  className: undefined,
  children: undefined,
};

TabGroup.propTypes = {
  className: propTypes.string,
  children: propTypes.node,
};

export default TabGroup;
