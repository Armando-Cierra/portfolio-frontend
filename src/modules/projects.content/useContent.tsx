import React, { useState, useEffect } from 'react'
import type { UseContentProps, Project, Tag } from './types'

function sanitizeString(e: string) {
  return e.toLowerCase().trim()
}

export function useContent({ projects }: UseContentProps) {
  const [search, setSearch] = useState('')
  const [showTags, setShowTags] = useState(false)
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [selectedTags, setSelectedTags] = useState<string[]>([])
  const [filteredContent, setFilteredContent] = useState<Project[]>([])

  const content =
    search || selectedCategories.length > 0 || selectedTags.length > 0
      ? filteredContent
      : (projects as Project[])

  function captureSearchValue(e: React.ChangeEvent<HTMLInputElement>) {
    setSearch(e.target.value)
  }

  function toggleCategory(selectedCategory: string) {
    if (selectedCategories.includes(selectedCategory)) {
      setSelectedCategories((prevState) =>
        prevState.filter((category) => category !== selectedCategory)
      )
    } else {
      setSelectedCategories((prevState) => [...prevState, selectedCategory])
    }
  }

  function toggleTagBox() {
    setShowTags((prevState) => !prevState)
  }

  function closeTagBox() {
    setShowTags(false)
  }

  function toggleTagSelection(selectedTag: string) {
    if (selectedTags.includes(selectedTag)) {
      setSelectedTags((prevState) =>
        prevState.filter((tag) => tag !== selectedTag)
      )
    } else {
      setSelectedTags((prevState) => [...prevState, selectedTag])
    }
  }

  function removeTag(selectedTag: string) {
    setSelectedTags((prevState) =>
      prevState.filter((tag) => tag !== selectedTag)
    )
  }

  useEffect(() => {
    const sanitizedSearch = sanitizeString(search)
    let filteredProjects: Project[] = projects as Project[]

    if (search) {
      filteredProjects = filteredProjects.filter((project) =>
        sanitizeString(project.attributes.name).includes(sanitizedSearch)
      )
    }

    if (selectedCategories.length > 0) {
      filteredProjects = filteredProjects.filter((project) =>
        selectedCategories.includes(project.attributes.category)
      )
    }

    if (selectedTags.length > 0) {
      filteredProjects = filteredProjects.filter((project) =>
        selectedTags.every((tag) =>
          project.attributes.tags.data.some(
            (projectTag) => projectTag.attributes.name === tag
          )
        )
      )
    }

    setFilteredContent([...filteredProjects])
  }, [selectedTags, selectedCategories, search])

  return {
    content,
    search,
    captureSearchValue,
    selectedCategories,
    toggleCategory,
    showTags,
    toggleTagBox,
    closeTagBox,
    toggleTagSelection,
    removeTag,
    selectedTags
  }
}
