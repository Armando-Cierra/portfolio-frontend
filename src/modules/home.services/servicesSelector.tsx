import classNames from 'classnames'
import { useServicesSelector } from './useServicesSelector'
import type { Props } from './types'

export function ServicesSelector({ listOfServices }: Props) {
  const { selectedStep, setSelectedStep, getDescription } = useServicesSelector(
    { listOfServices }
  )

  return (
    <div className="servicesList">
      <div className="list">
        {listOfServices.map((service) => (
          <button
            className={classNames('serviceItem', {
              'serviceItem--selected': service.id === selectedStep
            })}
            key={service.id}
            onClick={() => setSelectedStep(service.id)}
          >
            {service.title}
          </button>
        ))}
      </div>
      {getDescription()}
    </div>
  )
}
