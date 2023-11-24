import uniqid from 'uniqid'

type Work = {
  name: string
  image: string
  jobType: string
  startDate: string
  endDate: string
  roles: string[]
}

interface Props {
  worksList: Work[]
}

export function WorksList({ worksList }: Props) {
  return (
    <div className="worksList">
      {worksList.map((work) => (
        <div className="work" key={uniqid()}>
          <img className="companyLogo" src={work.image} alt="job image" />
          <div className="workContent">
            <div className="heading">
              <span className="workTitle">{work.name} </span>
              <span className="workType">({work.jobType})</span>
            </div>
            <span className="timePeriod">
              {work.startDate} - {work.endDate}
            </span>
            {work.roles.length !== 0 && (
              <div className="roles">
                <span className="roleTitle">Roles:</span>
                <ul>
                  {work.roles.map((role) => (
                    <li key={uniqid()}>{role}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}
