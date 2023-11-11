import { useState, type ChangeEvent } from 'react'
import { toast } from 'react-toastify'
import type { Props } from './types'
import { positionAt } from 'node_modules/astro/dist/core/errors'

export default function useForm({ translations }: Props) {
  const [formFields, setFormFields] = useState({
    fullname: '',
    phoneNumber: {
      extension: '+1',
      number: ''
    },
    email: '',
    message: ''
  })

  const [errors, setErrors] = useState({
    fullname: {
      error: false,
      message: ''
    },
    phoneNumber: {
      error: false,
      message: ''
    },
    email: {
      error: false,
      message: ''
    },
    message: {
      error: false,
      message: ''
    }
  })

  function verifyFields(
    e:
      | ChangeEvent<HTMLInputElement>
      | ChangeEvent<HTMLTextAreaElement>
      | React.FocusEvent<HTMLInputElement>
      | React.FocusEvent<HTMLTextAreaElement>
  ) {
    const field = e.target.id
    const value = e.target.value

    if (field === 'phoneMNumber') {
      setFormFields((prevState) => ({
        ...prevState,
        phoneNumber: {
          ...prevState.phoneNumber,
          number: value
        }
      }))
    } else {
      setFormFields((prevState) => ({
        ...prevState,
        [field]: value
      }))
    }

    if (value === '') {
      setErrors((prevState) => ({
        ...prevState,
        [field]: { error: true, message: translations.errorEmptyField }
      }))
    } else {
      setErrors((prevState) => ({
        ...prevState,
        [field]: { error: false, message: '' }
      }))
    }
  }

  function captureInputData(
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) {
    verifyFields(e)
  }

  function verifyEmail(e: React.FocusEvent<HTMLInputElement>) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const value = e.target.value

    if (!emailRegex.test(value)) {
      setErrors((prevState) => ({
        ...prevState,
        email: { error: true, message: translations.errorInvalidEmail }
      }))
    } else {
      setErrors((prevState) => ({
        ...prevState,
        email: { error: false, message: '' }
      }))
    }
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
  }

  function cleanForm() {
    setFormFields({
      fullname: '',
      phoneNumber: {
        extension: '+1',
        number: ''
      },
      email: '',
      message: ''
    })

    setErrors({
      fullname: {
        error: false,
        message: ''
      },
      phoneNumber: {
        error: false,
        message: ''
      },
      email: {
        error: false,
        message: ''
      },
      message: {
        error: false,
        message: ''
      }
    })
  }

  function submitForm() {
    // TODO
    cleanForm()
    toast.success(translations.submitSuccess, {
      position: toast.POSITION.TOP_RIGHT
    })
  }

  return {
    formFields,
    errors,
    captureInputData,
    verifyEmail,
    verifyFields,
    handleSubmit,
    cleanForm,
    submitForm
  }
}
