import { InputField } from '@/types/field'
import { Controller, useFormContext } from 'react-hook-form'
import { ErrorMessage } from '../error-message'
import { Input } from '../ui/input'

export function RHFInput({ name, placeholder, className }: InputField) {
  const { control } = useFormContext()

  return (
    <div>
      {/* <Label>{label}</Label> */}
      <Controller
        control={control}
        name={name}
        render={({ field, fieldState: { error } }) => (
          <div className="flex flex-col">
            <Input className={className} {...field} placeholder={placeholder} type="text" />
            <ErrorMessage error={error} />
          </div>
        )}
      />
    </div>
  )
}
