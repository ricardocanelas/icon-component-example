import IconsList from "./List";
import PropTypes from "prop-types";

let Icon = ({ name, defaultName = null, ...rest }) => {
  const Component = IconsList.hasOwnProperty(name)
    ? IconsList[name]
    : IconsList[defaultName];

  if (Component) {
    return <Component {...rest} />;
  }

  return null;
};

Icon.proptypes = {
  name: PropTypes.string.isRequired,
  defaultName: PropTypes.string,
  color: PropTypes.string,
  fill: PropTypes.string,
  direction: PropTypes.oneOf(["top", "right", "bottom", "left"]),
  size: PropTypes.number,
  svgClassName: PropTypes.string,
  svgStyle: PropTypes.string,
};

/**
 * How to use
 *
 * <Icon name="Logo" className="m-3" color="#ff33ee" />
 */

export default Icon;
