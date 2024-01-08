import { useState } from 'react'
import { Icon } from '@components.react'
import type { UseServicesSelectorProps, Service } from './types'

export function useServicesSelector({
  listOfServices
}: UseServicesSelectorProps) {
  const [selectedStep, setSelectedStep] = useState(
    (listOfServices[0] as Service).attributes.slug
  )

  function getDescription() {
    const selectedItem = listOfServices.filter(
      (service) => (service as Service).attributes.slug === selectedStep
    )[0]

    const {
      attributes: {
        cover: {
          data: {
            attributes: { url, name: altImageName }
          }
        },
        icon,
        description
      }
    } = selectedItem as Service

    return (
      <div className="serviceDescriptionBox">
        <div className="coverBox">
          <img className="cover" src={url} alt={altImageName} />
          <div className="iconBox">
            <Icon name={icon} />
          </div>
        </div>
        <div className="description">
          <p>{description}</p>
        </div>
      </div>
    )
  }

  return { selectedStep, setSelectedStep, getDescription }
}
