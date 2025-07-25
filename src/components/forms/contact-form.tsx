'use client'

import { NavigationIcon } from '@/icons'
import { Regex } from '@/utils/regex'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'
import { RHFInput } from '../fields/rhf-input'
import RHFTextArea from '../fields/rhf-textarea'
import ButtonMagic from '../ui/button-magic'
const schema = z.object({
  fullName: z.string().min(1, 'Please enter your name'),
  email: z.string().min(1, 'Please enter your email').regex(Regex.email, 'Email is valid'),
  notes: z.string().optional().nullable()
})

export const ContactForm = () => {
  const [isSubmiting, setisSubmiting] = useState(false)

  const methods = useForm({
    defaultValues: {
      fullName: '',
      email: '',
      notes: ''
    },
    shouldUnregister: false,
    resolver: zodResolver(schema)
  })

  const handleSubmit = methods.handleSubmit(async () => {
    setisSubmiting(true)

    setTimeout(() => {
      toast.info('Thông tin của bạn đã được gửi đi. Tôi sẽ sớm liên hệ với bạn!')
      setisSubmiting(false)
    }, 2000)
  })

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-6 mb-6 lg:mb-8">
          <RHFInput
            className="py-6 rounded-lg bg-transparent border border-gray-400 text-black-default dark:text-white text-sm lg:text-base placeholder:text-gray-600"
            name="fullName"
            placeholder="Enter your full name"
          />
          <RHFInput
            className="py-6 rounded-lg bg-transparent border border-gray-400 text-black-default dark:text-white text-sm lg:text-base placeholder:text-gray-600"
            name="email"
            placeholder="Enter your email"
          />
        </div>
        <RHFTextArea
          className="rounded-lg bg-transparent border border-gray-400 text-black-default dark:text-white text-sm lg:text-base placeholder:text-gray-600"
          name="notes"
          placeholder="Enter your message"
        />
        <div className="flex items-center justify-center mt-8">
          <ButtonMagic
            position="right"
            icon={<NavigationIcon size={20} />}
            title={isSubmiting ? 'Sending...' : 'Contact now'}
          />
        </div>
      </form>
    </FormProvider>
  )
}
