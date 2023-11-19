import { useState } from 'react'
import { Icon } from '@components.react'
import type { UseServicesSelectorProps } from './types'

export function useServicesSelector({
  listOfServices
}: UseServicesSelectorProps) {
  const [selectedStep, setSelectedStep] = useState('webDevelopment')

  function getDescription() {
    const selectedItem = listOfServices.filter(
      (service) => service.id === selectedStep
    )[0]

    return (
      <div className="serviceDescriptionBox">
        <div className="coverBox">
          <img
            className="cover"
            src={selectedItem.image}
            alt="service cover image"
          />
          <div className="iconBox">
            <Icon name={selectedItem.icon} />
          </div>
        </div>
        <div className="description">
          <p>{selectedItem.description}</p>
        </div>
      </div>
    )
  }

  return { selectedStep, setSelectedStep, getDescription }
}
