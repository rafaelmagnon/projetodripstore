import { Link } from 'react-router-dom'

export default function Section({ title, titleAlign = 'left', link, children }) {
  const isInternal = link?.href?.startsWith('/')

  return (
    <section className="section">
      <div className={`section__header section__header--${titleAlign}`}>
        <h2 className="section__title">{title}</h2>

        {link &&
          (isInternal ? (
            <Link to={link.href} className="section__link">{link.text}</Link>
          ) : (
            <a href={link.href} className="section__link">{link.text}</a>
          ))}
      </div>

      {children}
    </section>
  )
}