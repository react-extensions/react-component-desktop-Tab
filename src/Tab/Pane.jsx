import { useContext } from 'react';
import propTypes from 'prop-types';
import Context from './Context';

function TabPane({ children, id }) {
  const { current } = useContext(Context);
  const isActive = current === id;

  return isActive && children;
}

TabPane.defaultProps = {
  children: undefined,
};

TabPane.propTypes = {
  children: propTypes.node,
  id: propTypes.string.isRequired,
};

export default TabPane;
