import logoHeader from '../assets/logo-header.svg'
import logoFooter from '../assets/logo-footer.svg'
import { Link } from 'react-router-dom'

export default function Logo({ variant = 'header' }) {
  const src = variant === 'footer' ? logoFooter : logoHeader

  return (
    <Link to="/" className="logo">
      <img src={src} alt="Digital Store" width={253} height={44} />
    </Link>
  )
}