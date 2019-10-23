import React from 'react';
import PropTypes from 'prop-types';

const proptypes = {
  isOpen: PropTypes.bool,
  onClickHandle: PropTypes.func,
};

const defaultPropTypes = {
  isOpen: false,
  onClickHandle: () => {},
}

const AccordionOpener = (props) => {
  const { isOpen, onClickHandle } = props;
  const initialPath = './assets/Images';
  const path = isOpen ? `${initialPath}/keyboard_arrow_up.svg` : `${initialPath}/keyboard_arrow_down.svg` ;
  return <img alt="see more" className="show-cursor" onClick={onClickHandle} src={path} />;
}

AccordionOpener.defaultPropTypes = defaultPropTypes;
AccordionOpener.propTypes = proptypes;

export default AccordionOpener;
