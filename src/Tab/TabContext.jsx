import React, { useCallback, useState, useMemo } from 'react';
import propTypes from 'prop-types';
import Context from './Context';

function TabContext({ children, defaultLabel }) {
  const [current, setCurrent] = useState(defaultLabel);

  const onTabActive = useCallback(label => {
    setCurrent(label);
  }, []);

  const contextValue = useMemo(() => ({ current, onTabActive }), [
    current,
    onTabActive,
  ]);

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
}

TabContext.defaultProps = {
  children: undefined,
  defaultLabel: undefined,
};

TabContext.propTypes = {
  children: propTypes.node,
  defaultLabel: propTypes.string,
};

export default TabContext;
