import WithOptions from './WithOptions'

import { ReactComponent as LogoSVG } from '../../assets/logo.svg'
import { ReactComponent as ArrowRightSVG } from '../../assets/arrow-right-circle.svg'

export const Logo = WithOptions(LogoSVG, { color: '#0F8386', fill: '#fff', aspectRadio: [841.9, 595.3] })
export const ArrowRight = WithOptions(ArrowRightSVG, { color: '#0F8386', fill: '#fff', aspectRadio: [24, 24] })

const list = {
  Logo,
  ArrowRight,
}

export default list
