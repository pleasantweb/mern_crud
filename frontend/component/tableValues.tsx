import React from 'react'
import { dataType } from '../types'
import styles from '../styles/Home.module.scss'

type propType = {
    i:number,
    v:dataType,
    onEdit:(roll_no: number) => void,
    onDelete:(id: string) => Promise<void>
}

const TableValues = (props:propType) => {
    const {i,v,onDelete,onEdit} =props
    
  return (
   <>
    <tr key={i}>
        <td>{i + 1}</td>
        <td style={{textTransform:'capitalize'}}>{v.name}</td>
        <td>{v.age}</td>
        <td>{v.course.toUpperCase()}</td>
        <td>{v.roll_no}</td>
        <td>{v.birthdate.slice(0,10)}</td>
        <td>{v.address.streetAddress + " " + v.address.city + " "  + v.address.state}</td>
        <td className={styles.action}>
            <button onClick={()=>onEdit(v.roll_no)}>edit</button>
            <button onClick={()=>onDelete(v._id)}>del</button>
            </td>
        </tr>
   </>
  )
}

export default TableValues