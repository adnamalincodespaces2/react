import React, { forwardRef } from 'react';
import Box from '../Box.js';
import '@styled-system/css';
import merge from 'deepmerge';
import TokenBase, { isTokenInteractive, defaultTokenSize } from './TokenBase.js';
import RemoveTokenButton from './_RemoveTokenButton.js';
import TokenTextContainer from './_TokenTextContainer.js';

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const tokenBorderWidthPx = 1;

const LeadingVisualContainer = ({
  children,
  size
}) => /*#__PURE__*/React.createElement(Box, {
  sx: {
    flexShrink: 0,
    lineHeight: 0,
    marginRight: size && ['large', 'extralarge', 'xlarge'].includes(size) ? 2 : 1
  }
}, children);

LeadingVisualContainer.displayName = "LeadingVisualContainer";
const Token = /*#__PURE__*/forwardRef((props, forwardedRef) => {
  const {
    as,
    onRemove,
    id,
    leadingVisual: LeadingVisual,
    text,
    size,
    hideRemoveButton,
    href,
    onClick,
    sx: sxProp = {},
    ...rest
  } = props;
  const hasMultipleActionTargets = isTokenInteractive(props) && Boolean(onRemove) && !hideRemoveButton;

  const onRemoveClick = e => {
    e.stopPropagation();
    onRemove && onRemove();
  };

  const interactiveTokenProps = {
    as,
    href,
    onClick
  };
  const sx = merge({
    backgroundColor: 'neutral.subtle',
    borderColor: props.isSelected ? 'fg.default' : 'border.subtle',
    borderStyle: 'solid',
    borderWidth: `${tokenBorderWidthPx}px`,
    color: props.isSelected ? 'fg.default' : 'fg.muted',
    maxWidth: '100%',
    paddingRight: !(hideRemoveButton || !onRemove) ? 0 : undefined,
    ...(isTokenInteractive(props) ? {
      '&:hover': {
        backgroundColor: 'neutral.muted',
        boxShadow: 'shadow.medium',
        color: 'fg.default'
      }
    } : {})
  }, sxProp);
  return /*#__PURE__*/React.createElement(TokenBase, _extends({
    onRemove: onRemove,
    id: id === null || id === void 0 ? void 0 : id.toString(),
    text: text,
    size: size,
    sx: sx
  }, !hasMultipleActionTargets ? interactiveTokenProps : {}, rest, {
    ref: forwardedRef
  }), LeadingVisual ? /*#__PURE__*/React.createElement(LeadingVisualContainer, {
    size: size
  }, /*#__PURE__*/React.createElement(LeadingVisual, null)) : null, /*#__PURE__*/React.createElement(TokenTextContainer, hasMultipleActionTargets ? interactiveTokenProps : {}, text), !hideRemoveButton && onRemove ? /*#__PURE__*/React.createElement(RemoveTokenButton, {
    borderOffset: tokenBorderWidthPx,
    onClick: onRemoveClick,
    size: size,
    isParentInteractive: isTokenInteractive(props),
    "aria-hidden": hasMultipleActionTargets ? 'true' : 'false',
    sx: hasMultipleActionTargets ? {
      position: 'relative',
      zIndex: '1'
    } : {}
  }) : null);
});
Token.displayName = 'Token';
Token.defaultProps = {
  size: defaultTokenSize
};
var Token$1 = Token;

export { Token$1 as default };
