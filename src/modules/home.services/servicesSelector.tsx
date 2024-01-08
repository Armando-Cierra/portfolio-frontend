import classNames from 'classnames'
import { useServicesSelector } from './useServicesSelector'
import type { Props, Service } from './types'

export function ServicesSelector({ listOfServices }: Props) {
  const { selectedStep, setSelectedStep, getDescription } = useServicesSelector(
    { listOfServices }
  )

  return (
    <div className="servicesList">
      <div className="list">
        {listOfServices.map((service) => {
          const {
            attributes: { slug, name }
          } = service as Service
          return (
            <button
              className={classNames('serviceItem', {
                'serviceItem--selected': slug === selectedStep
              })}
              key={slug}
              onClick={() => setSelectedStep(slug)}
            >
              {name}
            </button>
          )
        })}
      </div>
      {getDescription()}
    </div>
  )
}
