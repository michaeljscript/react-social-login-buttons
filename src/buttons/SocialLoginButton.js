'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('../fontello-social/css/social-login-font.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Icon = function Icon(_ref) {
    var name = _ref.name,
        _ref$size = _ref.size,
        size = _ref$size === undefined ? 26 : _ref$size,
        _ref$format = _ref.format,
        format = _ref$format === undefined ? function (name) {
            return 'demo-icon icon-' + name;
        } : _ref$format;
    return _react2.default.createElement('i', { className: format(name),
        style: { fontSize: size } });
};

var SocialLoginButton = (_temp = _class = function (_Component) {
    _inherits(SocialLoginButton, _Component);

    function SocialLoginButton() {
        var _ref2;

        _classCallCheck(this, SocialLoginButton);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        var _this = _possibleConstructorReturn(this, (_ref2 = SocialLoginButton.__proto__ || Object.getPrototypeOf(SocialLoginButton)).call.apply(_ref2, [this].concat(args)));

        _this.state = { hovered: false };

        _this.handleMouseEnter = _this.handleMouseEnter.bind(_this);
        _this.handleMouseLeave = _this.handleMouseLeave.bind(_this);
        _this.handleClick = _this.handleClick.bind(_this);
        return _this;
    }

    _createClass(SocialLoginButton, [{
        key: 'handleMouseEnter',
        value: function handleMouseEnter() {
            this.setState({ hovered: true });
        }
    }, {
        key: 'handleMouseLeave',
        value: function handleMouseLeave() {
            this.setState({ hovered: false });
        }
    }, {
        key: 'handleClick',
        value: function handleClick() {
            if (typeof this.props.onClick === 'function') {
                this.props.onClick();
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                customStyle = _props.style,
                activeStyle = _props.activeStyle,
                children = _props.children,
                _props$text = _props.text,
                text = _props$text === undefined ? children : _props$text,
                icon = _props.icon,
                iconFormat = _props.iconFormat,
                _props$iconSize = _props.iconSize,
                iconSize = _props$iconSize === undefined ? '26px' : _props$iconSize,
                _props$size = _props.size,
                size = _props$size === undefined ? '50px' : _props$size,
                _props$textAlign = _props.textAlign,
                textAlign = _props$textAlign === undefined ? 'left' : _props$textAlign;
            var hovered = this.state.hovered;


            var buttonStyles = _extends({}, styles.button, {
                lineHeight: typeof text === 'string' ? size : 'auto',
                height: size,
                textAlign: textAlign
            }, customStyle, hovered && activeStyle);

            var childrenCount = _react2.default.Children.count(children);

            // classic usage of this button
            if (childrenCount === 0) {
                return _react2.default.createElement(
                    'div',
                    { style: buttonStyles, onClick: this.handleClick, onMouseEnter: this.handleMouseEnter,
                        onMouseLeave: this.handleMouseLeave },
                    icon && _react2.default.createElement(
                    'span',
                    { style: _extends({}, styles.icon, { height: size, lineHeight: size }) },
                    _react2.default.createElement(Icon, { name: icon, size: iconSize, format: iconFormat })
                    ),
                    _react2.default.createElement(
                        'span',
                        null,
                        text
                    )
                );
            }

            // children provided, rendering children as text
            return _react2.default.createElement(
                'div',
                { style: buttonStyles, onClick: this.handleClick, onMouseEnter: this.handleMouseEnter,
                    onMouseLeave: this.handleMouseLeave },
                _react2.default.createElement('span', { style: styles.spanFix }),
                text
            );
        }
    }]);

    return SocialLoginButton;
}(_react.Component), _class.propTypes = {

    /** Will be triggered when clicked on the button. */
    onClick: _propTypes2.default.func,

    /** Custom button styles */
    style: _propTypes2.default.object,

    /** activeStyle styles will be applied instead of style when mouse hovers above the element */
    activeStyle: _propTypes2.default.object,

    /** This text will be displayed */
    text: _propTypes2.default.string,

    /** This icon will be displayed */
    icon: _propTypes2.default.string,

    /** Box will have this size */
    size: _propTypes2.default.string,

    /** Icon will have this size. Eg. 26px */
    iconSize: _propTypes2.default.string,

    /** Format icon className. Eg. (name) => `fa-icon fa-icon-${name}` */
    iconFormat: _propTypes2.default.func,

    /** Text alignment of the button. Default 'left' */
    textAlign: _propTypes2.default.oneOf(['left', 'right', 'center'])
}, _temp);
exports.default = SocialLoginButton;


var styles = {
    spanFix: {
        height: '100%', display: 'inline-block', verticalAlign: 'middle'
    },
    button: {
        fontSize: '120%',
        color: '#ffffff',
        margin: 5,
        cursor: 'pointer',
        boxShadow: '#b5b5b5 0 1px 2px',
        borderRadius: 3,
        userSelect: 'none',
        overflow: 'hidden',
        padding: '0 10px'
    },
    icon: {
        paddingRight: '20px'
    }
};