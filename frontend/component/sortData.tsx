import React from 'react'

type propType = {
    setSortBy:React.Dispatch<React.SetStateAction<string>>,
    setFilterBy:React.Dispatch<React.SetStateAction<string>>
}
const SortData = (props:propType) => {
    const {setSortBy,setFilterBy} = props

    const onSortChange=(e:React.ChangeEvent<HTMLSelectElement>)=>{
        setSortBy(e.target.value)
    }
    const onFilterChange = (e:React.ChangeEvent<HTMLSelectElement>)=>{
        setFilterBy(e.target.value)
    }

  return (
    <>
        <select onChange={onSortChange} name="sort_by"  id="sort_by">
            <option value="sort_by" disabled>Sort By</option>
            <option value="name">Name</option>
            <option value="age">Age</option>
            <option value="roll_no">Roll No</option>
        </select>
        <select onChange={onFilterChange} name="filter" id="filter">
            <option value="filter" disabled>Filter</option>
            <option value="all">All</option>
            <option value="science">Sceince</option>
            <option value="commerce">Commerce</option>
            <option value="arts">Arts</option>
        </select>
    </>
  )
}

export default SortData