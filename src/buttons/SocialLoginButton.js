import PropTypes from 'prop-types';
import React, {Component} from 'react';

import '../fontello-social/css/social-login-font.css';

const Icon = ({name, size = 26, format = (name) => `demo-icon icon-${name}`}) => <i className={format(name)}
                                                                                    style={{fontSize: size}}/>;

export default class SocialLoginButton extends Component {

    static propTypes = {

        /** Will be triggered when clicked on the button. */
        onClick: PropTypes.func,

        /** Custom button styles */
        style: PropTypes.object,

        /** activeStyle styles will be applied instead of style when mouse hovers above the element */
        activeStyle: PropTypes.object,

        /** This text will be displayed */
        text: PropTypes.string,

        /** This icon will be displayed */
        icon: PropTypes.string,

        /** Box will have this size */
        size: PropTypes.string,

        /** Icon will have this size. Eg. 26px */
        iconSize: PropTypes.string,

        /** Format icon className. Eg. (name) => `fa-icon fa-icon-${name}` */
        iconFormat: PropTypes.func
    };

    state = {hovered: false};

    handleMouseEnter() {
        this.setState({hovered: true});
    }

    handleMouseLeave() {
        this.setState({hovered: false});
    }

    handleClick() {
        if (typeof this.props.onClick === 'function') {
            this.props.onClick();
        }
    }

    render() {
        const {style: customStyle, activeStyle, text, icon, iconFormat, iconSize = '26px', size = '50px'} = this.props;
        const {hovered} = this.state;

        const buttonStyles = Object.assign({}, styles.button, {
            lineHeight: size,
            height: size
        }, customStyle, hovered && activeStyle);

        return <div style={buttonStyles} onClick={() => this.handleClick()} onMouseEnter={() => this.handleMouseEnter()}
                    onMouseLeave={() => this.handleMouseLeave()}>
            {icon && <span style={{...styles.icon, height: size, lineHeight: size}}>
                <Icon name={icon} size={iconSize} format={iconFormat}/>
            </span>}
            <span style={icon ? {paddingRight: styles.icon.padding} : {padding: styles.icon.padding}}>{text}</span>
        </div>
    }
}

const styles = {
    button: {
        fontSize: '120%',
        color: '#ffffff',
        margin: 5,
        cursor: 'pointer',
        boxShadow: '#b5b5b5 0 1px 2px',
        borderRadius: 3,
        userSelect: 'none',
        overflow: 'hidden'
    },
    icon: {
        padding: '0 10px',
        float: 'left',
    }
};