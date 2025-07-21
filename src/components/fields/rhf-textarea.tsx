import { TextArea } from '@/types/field'
import { Controller, useFormContext } from 'react-hook-form'
import { Textarea } from '../ui/textarea'

export default function RHFTextArea({ name, placeholder, className }: TextArea) {
  const { control } = useFormContext()

  return (
    <div>
      {/* <Label>{label}</Label> */}
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <div className="flex flex-col">
            <Textarea rows={8} className={className} {...field} placeholder={placeholder} />
          </div>
        )}
      />
    </div>
  )
}
