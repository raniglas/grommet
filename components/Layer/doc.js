"use strict";

exports.__esModule = true;
exports.themeDoc = exports.doc = void 0;

var _reactDesc = require("react-desc");

var _utils = require("../../utils");

var PAD_SIZES = ['xxsmall', 'xsmall', 'small', 'medium', 'large'];

var doc = function doc(Layer) {
  var DocumentedLayer = (0, _reactDesc.describe)(Layer).availableAt((0, _utils.getAvailableAtBadge)('Layer')).description("An overlay. Layer is typically modal and anchored to an edge, corner, or\n      center of the window. It is the caller's responsibility to provide a\n      control for the user to close the layer.").usage("import { Layer } from 'grommet';\n<Layer />");
  DocumentedLayer.propTypes = {
    animate: _reactDesc.PropTypes.bool.description('Animation transition of the Layer content when it opens.').defaultValue(true),
    full: _reactDesc.PropTypes.oneOfType([_reactDesc.PropTypes.bool, _reactDesc.PropTypes.oneOf(['vertical', 'horizontal'])]).description('Whether the width and/or height should fill the current viewport size.').defaultValue(false),
    margin: _reactDesc.PropTypes.oneOfType([_reactDesc.PropTypes.oneOf(['none'].concat(PAD_SIZES)), _reactDesc.PropTypes.shape({
      bottom: _reactDesc.PropTypes.oneOfType([_reactDesc.PropTypes.oneOf(PAD_SIZES), _reactDesc.PropTypes.string]),
      horizontal: _reactDesc.PropTypes.oneOfType([_reactDesc.PropTypes.oneOf(PAD_SIZES), _reactDesc.PropTypes.string]),
      left: _reactDesc.PropTypes.oneOfType([_reactDesc.PropTypes.oneOf(PAD_SIZES), _reactDesc.PropTypes.string]),
      right: _reactDesc.PropTypes.oneOfType([_reactDesc.PropTypes.oneOf(PAD_SIZES), _reactDesc.PropTypes.string]),
      top: _reactDesc.PropTypes.oneOfType([_reactDesc.PropTypes.oneOf(PAD_SIZES), _reactDesc.PropTypes.string]),
      vertical: _reactDesc.PropTypes.oneOfType([_reactDesc.PropTypes.oneOf(PAD_SIZES), _reactDesc.PropTypes.string])
    }), _reactDesc.PropTypes.string]).description("The amount of margin around the Layer. An object can be specified to\ndistinguish horizontal margin, vertical margin, and margin on a\nparticular side of the layer"),
    modal: _reactDesc.PropTypes.bool.description('Whether there should be an overlay preventing interaction underneath the layer.').defaultValue(true),
    onClickOutside: _reactDesc.PropTypes.func.description('Function that will be invoked when the user clicks outside the layer.'),
    onEsc: _reactDesc.PropTypes.func.description('Function that will be called when the user presses the escape key inside the layer.'),
    plain: _reactDesc.PropTypes.bool.description('Whether this is a plain Layer with no background color or border.').defaultValue(false),
    position: _reactDesc.PropTypes.oneOf(['bottom', 'bottom-left', 'bottom-right', 'center', 'hidden', 'left', 'right', 'top', 'top-left', 'top-right']).description('Position of the layer content.').defaultValue('center'),
    responsive: _reactDesc.PropTypes.bool.description('Whether the layer should take full width and height on mobile').defaultValue(true)
  };
  return DocumentedLayer;
};

exports.doc = doc;
var themeDoc = {
  'global.breakpoints': {
    description: 'The possible breakpoints that could affect border, direction, gap, margin, pad, and round.',
    type: 'object',
    defaultValue: "{\n      small: {\n        value: '768px',\n        borderSize: {\n          xsmall: '1px',\n          small: '2px',\n          medium: '4px',\n          large: '6px',\n          xlarge: '12px',\n        },\n        edgeSize: {\n          none: '0px',\n          hair: '1px',\n          xxsmall: '2px',\n          xsmall: '3px',\n          small: '6px',\n          medium: '12px',\n          large: '24px',\n          xlarge: '48px',\n        },\n        size: {\n          xxsmall: '24px',\n          xsmall: '48px',\n          small: '96px',\n          medium: '192px',\n          large: '384px',\n          xlarge: '768px',\n          full: '100%',\n        },\n      },\n      medium: {\n        value: '1536px',\n      },\n      large: {},\n      }"
  },
  'global.size.xxsmall': {
    description: 'The minimal height of the Layer.',
    type: 'string',
    defaultValue: '48px'
  },
  'layer.background': {
    description: 'The background color of the Layer Container.',
    type: 'string',
    defaultValue: 'white'
  },
  'layer.container.zIndex': {
    description: 'The stack order of Layer Container.',
    type: 'number',
    defaultValue: '15'
  },
  'layer.extend': {
    description: 'Any additional style for Layer.',
    type: 'string | (props) => {}',
    defaultValue: undefined
  },
  'layer.overlay.background': {
    description: 'The background of the Layer overlay.',
    type: 'string',
    defaultValue: 'rgba(0, 0, 0, 0.5)'
  },
  'layer.responsiveBreakpoint': {
    description: 'The actual breakpoint to trigger changes in the border, direction, gap, margin, pad, and round.',
    type: 'string',
    defaultValue: 'small'
  },
  'layer.zIndex': {
    description: 'The stack order of Layer.',
    type: 'number',
    defaultValue: '10'
  }
};
exports.themeDoc = themeDoc;