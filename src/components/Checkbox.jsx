import { memo } from 'react';

/**
 * Custom Checkbox Component
 * Pixel-perfect implementation matching Figma specs
 * 
 * @param {Object} props
 * @param {string} props.label - Checkbox label text
 * @param {boolean} props.checked - Checked state
 * @param {Function} props.onChange - Change handler
 * @param {string} props.id - Unique identifier
 */
const Checkbox = memo(({ label, checked, onChange, id }) => {
  return (
    <label
      htmlFor={id}
      className="flex items-center justify-between cursor-pointer"
      style={{
        width: '370px',
        height: '42px',
      }}
    >
      <span
        style={{
          fontFamily: 'Montserrat',
          fontWeight: 400,
          fontSize: '14px',
          lineHeight: '130%',
          color: '#1F2128',
          letterSpacing: '0px',
        }}
      >
        {label}
      </span>
      
      <input
        type="checkbox"
        id={id}
        checked={checked}
        onChange={onChange}
        className="sr-only"
        aria-label={label}
      />
      
      <div className={`custom-checkbox ${checked ? 'checked' : ''}`} />
    </label>
  );
});

Checkbox.displayName = 'Checkbox';

export default Checkbox;
