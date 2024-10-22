import classNames from 'classnames'
import { ToastContainer } from 'react-toastify'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { Button, Icon } from '@components.react'
import useForm from './useForm'
import CountryList from './CountryDials.json'
import type { Props } from './types'
import 'react-toastify/dist/ReactToastify.css'

export default function Form({ translations }: Props) {
  const {
    formFields: { fullname, phoneNumber, email, message },
    errors,
    captureInputData,
    verifyEmail,
    verifyFields,
    handleSubmit,
    cleanForm,
    submitForm,
    selectingCountry
  } = useForm({ translations })

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="fieldPairs">
          {/* Full Name */}
          <div className="field">
            <div>
              <label htmlFor="fullname">{translations.fullname}</label>
            </div>
            <input
              type="text"
              id="fullname"
              className={classNames('input', {
                'input--error': errors.fullname.error
              })}
              value={fullname}
              placeholder={translations.fullnamePlaceholder}
              onBlur={verifyFields}
              onChange={captureInputData}
            />
            {errors.fullname.error && (
              <span className="errorMessage">{errors.fullname.message}</span>
            )}
          </div>

          {/* Phone Number */}
          <div className="field">
            <div>
              <label htmlFor="phoneNumber">{translations.phoneNumber}</label>
            </div>
            <div className="phoneBox">
              <DropdownMenu.Root>
                <DropdownMenu.Trigger asChild>
                  <Button variant="subtle">
                    {phoneNumber.extention}
                    <Icon name="chevronDown" />
                  </Button>
                </DropdownMenu.Trigger>

                <DropdownMenu.Portal>
                  <DropdownMenu.Content
                    asChild
                    avoidCollisions
                    align="start"
                    side="bottom"
                    sideOffset={8}
                  >
                    <div className="contactMenu">
                      {CountryList.map((country) => (
                        <DropdownMenu.Item
                          className="menuItem"
                          key={country.code}
                          onClick={selectingCountry(country.dial_code)}
                        >
                          {country.name}
                        </DropdownMenu.Item>
                      ))}
                    </div>
                  </DropdownMenu.Content>
                </DropdownMenu.Portal>
              </DropdownMenu.Root>
              <input
                type="text"
                id="phoneNumber"
                inputMode="numeric"
                className={classNames('input input--phoneNumber', {
                  'input--error': errors.phoneNumber.error
                })}
                value={phoneNumber.number}
                placeholder="(201) 555-0123"
                onBlur={verifyFields}
                onChange={captureInputData}
              />
            </div>
            {errors.phoneNumber.error && (
              <span className="errorMessage">{errors.phoneNumber.message}</span>
            )}
          </div>
        </div>

        {/* Email */}
        <div className="field">
          <div>
            <label htmlFor="emai">{translations.email}</label>
          </div>
          <input
            type="text"
            id="email"
            className={classNames('input', {
              'input--error': errors.email.error
            })}
            value={email}
            placeholder="example@email.com"
            onChange={captureInputData}
            onBlur={verifyEmail}
          />
          {errors.email.error && (
            <span className="errorMessage">{errors.email.message}</span>
          )}
        </div>

        {/* Message */}
        <div className="field">
          <div>
            <label htmlFor="message">{translations.message}</label>
          </div>
          <textarea
            id="message"
            className={classNames('input', {
              'input--error': errors.message.error
            })}
            value={message}
            placeholder={translations.messagePlaceholder}
            onBlur={verifyFields}
            onChange={captureInputData}
          />
          {errors.message.error && (
            <span className="errorMessage">{errors.message.message}</span>
          )}
        </div>

        {/* Buttons */}
        <div className="btnsBox">
          <Button variant="outline" onClick={cleanForm}>
            {translations.cleanForm} <Icon name="trash" />
          </Button>
          <Button onClick={submitForm}>
            {translations.send} <Icon name="email" />
          </Button>
        </div>
      </form>
      <ToastContainer />
    </>
  )
}
