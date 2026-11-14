export default function FilterGroup({ title, inputType = 'checkbox', options = [], onChange }) {
  return (
    <div className="filter-group">
      <h4 className="filter-group__title">{title}</h4>

      {options.map((option, i) => {
        const value = option.value ?? option.text
        const id = `${title}-${i}`

        return (
          <label key={id} htmlFor={id} className="filter-group__option">
            <input
              id={id}
              type={inputType}
              name={title}
              value={value}
              onChange={onChange}
            />
            {option.text}
          </label>
        )
      })}
    </div>
  )
}