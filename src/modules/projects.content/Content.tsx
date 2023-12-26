import { Button, Icon, Tag } from '@components.react'
import classNames from 'classnames'
import uniqid from 'uniqid'
import { useContent } from './useContent'
import type { Props } from './types'
import './content.scss'

export default function Content({ translations, categories, projects }: Props) {
  const {
    search: searchLabel,
    categories: categoriesPlaceholder,
    placeholder,
    web,
    design,
    more
  } = translations

  const {
    content,
    search: searchValue,
    captureSearchValue,
    selectedCategories,
    toggleCategory,
    showTags,
    toggleTagBox,
    closeTagBox,
    toggleTagSelection,
    removeTag,
    selectedTags
  } = useContent({ projects })

  return (
    <>
      <div
        className={classNames('searchBar', {
          'searchBar--noBorderBottom': !showTags && selectedTags.length > 0
        })}
      >
        <div className="bar">
          <div className="container">
            <div className="left">
              <label htmlFor="search">{searchLabel}</label>
              <input
                className="input"
                type="text"
                placeholder={placeholder}
                value={searchValue}
                onChange={captureSearchValue}
              />
            </div>
            <div className="right">
              <span>{categoriesPlaceholder}</span>
              <div className="buttonsBox">
                <Button
                  variant="subtle"
                  isSelected={selectedCategories.includes('web')}
                  onClick={() => toggleCategory('web')}
                >
                  {web}
                </Button>
                <Button
                  variant="subtle"
                  isSelected={selectedCategories.includes('design')}
                  onClick={() => toggleCategory('design')}
                >
                  {design}
                </Button>
                <Button
                  customClass="moreButton"
                  variant="subtle"
                  isSelected={showTags}
                  onClick={toggleTagBox}
                >
                  {more}
                  <Icon
                    name="chevronDown"
                    customClass={classNames({
                      'icon--inverted': showTags
                    })}
                  />
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div
          className={classNames('appliedFilters', {
            'appliedFilters--hidden': selectedTags.length === 0
          })}
        >
          <div className="appliedFiltersAnimationBox">
            <div className="container">
              {selectedTags.map((tag) => (
                <Tag
                  key={uniqid('selectedTag_')}
                  onClick={() => removeTag(tag)}
                >
                  {tag}
                </Tag>
              ))}
            </div>
          </div>
        </div>
        <div
          className={classNames('filters', {
            'filters--hidden': !showTags
          })}
        >
          <div className="filtersAnimationBox">
            <div className="container">
              <div className="category">
                <span>{web}</span>
                <div className="collection">
                  {categories.web.map((tag) => (
                    <Button
                      variant="subtle"
                      key={uniqid('webTag_')}
                      onClick={() => toggleTagSelection(tag)}
                      isSelected={selectedTags.includes(tag)}
                    >
                      {tag}
                    </Button>
                  ))}
                </div>
              </div>
              <div className="category">
                <span>{design}</span>
                <div className="collection">
                  {categories.design.map((tag) => (
                    <Button
                      variant="subtle"
                      key={uniqid('designTag_')}
                      onClick={() => toggleTagSelection(tag)}
                      isSelected={selectedTags.includes(tag)}
                    >
                      {tag}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="content container">
        {content.map((project) => (
          <div className="project" key={uniqid()}>
            <img src={project.cover} alt={`${project.name} project cover`} />
            <div className="info">
              <span className="projectTitle">{project.name}</span>
              <p className="description">{project.shortDescription}</p>
            </div>
          </div>
        ))}
        {content.length === 0 && <div>No results</div>}
      </div>
    </>
  )
}
