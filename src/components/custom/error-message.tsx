import { FieldError } from 'react-hook-form'

export function ErrorMessage({ error }: { error?: FieldError }) {
  return error && <span className="error-message text-sm ml-2 mt-1">{error.message}</span>
}
