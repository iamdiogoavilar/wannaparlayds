import React, { useId, useState } from 'react';
import './InputEmailOrUsername.css';

export interface InputEmailOrUsernameProps {
  /** Valor controlado do campo */
  value?: string;
  /** Callback chamado ao alterar o valor */
  onChange?: (value: string) => void;
  /** Mensagem de erro — exibe borda vermelha e texto abaixo */
  error?: string;
  /** Marca o campo como concluído (borda neutra, label roxa) */
  completed?: boolean;
  /** Desabilita o campo */
  disabled?: boolean;
  className?: string;
}

type InputState = 'default' | 'focused' | 'filled' | 'completed' | 'error';

export function InputEmailOrUsername({
  value = '',
  onChange,
  error,
  completed = false,
  disabled = false,
  className = '',
}: InputEmailOrUsernameProps) {
  const [focused, setFocused] = useState(false);
  const inputId = useId();

  const filled = value.length > 0;
  const hasError = !!error;

  const state: InputState = hasError
    ? 'error'
    : completed
    ? 'completed'
    : filled
    ? 'filled'
    : focused
    ? 'focused'
    : 'default';

  return (
    <div className={`input-eou input-eou--${state} ${className}`.trim()}>
      <div
        className="input-eou__box"
        onClick={() => document.getElementById(inputId)?.focus()}
      >
        <label htmlFor={inputId} className="input-eou__label">
          Email or Username
        </label>
        <input
          id={inputId}
          type="text"
          className="input-eou__field"
          value={value}
          onChange={(e) => onChange?.(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          disabled={disabled}
          autoComplete="username"
          aria-invalid={hasError}
          aria-describedby={hasError ? `${inputId}-error` : undefined}
        />
      </div>

      {hasError && (
        <p id={`${inputId}-error`} className="input-eou__error-msg" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

export default InputEmailOrUsername;
