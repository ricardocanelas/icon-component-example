import PropTypes from 'prop-types'

const initialDefaultValue = {
  color: '#fff',
  fill: null,
  direction: null,
  aspectRadio: null,
}

const WithOptions = (IconComponent, defaultValue = initialDefaultValue) => {
  return ({
    color = defaultValue.color,
    fill = defaultValue.fill,
    direction = defaultValue.aspectRadio,
    size = null,
    svgClassName = '',
    svgStyle = {},
    ...props
  }) => {
    const style = svgStyle
    const aspectRadio = defaultValue.aspectRadio

    if (direction) {
      if (direction === 'top') svgStyle.transform = 'rotate(-90deg)'
      if (direction === 'right') svgStyle.transform = 'rotate(0deg)'
      if (direction === 'bottom') svgStyle.transform = 'rotate(90deg)'
      if (direction === 'left') svgStyle.transform = 'rotate(-180deg)'
    }

    if (size) {
      svgStyle.width = size + 'px'
      svgStyle.height = (((aspectRadio[1] * 100) / aspectRadio[0]) * parseInt(size)) / 100 + 'px'
    }

    if (fill) {
      style.fill = fill
    }

    return (
      <div {...props}>
        <IconComponent style={{ color, ...svgStyle }} className={svgClassName} />
      </div>
    )
  }
}

WithOptions.proptypes = {
  color: PropTypes.string,
  fill: PropTypes.string,
  direction: PropTypes.oneOf(['top', 'right', 'bottom', 'left']),
  size: PropTypes.number,
  svgClassName: PropTypes.string,
  svgStyle: PropTypes.string,
}

export default WithOptions
