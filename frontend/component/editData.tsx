import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'
import styles from '../styles/Home.module.scss'
import { dataType } from '../types'
import { editStudent, newStudent } from './fetch/fetchData'

type propType={
  setOpenEditBox:Dispatch<SetStateAction<boolean>>,
  content:dataType | null,
  setStudentData:Dispatch<SetStateAction<dataType[]>>
}

const EditData = (props:propType) => {
  const {setOpenEditBox,content,setStudentData}=props
  const [studentDetails,setStudentDetails] = useState({
    id:'',
    name:'',
    course:"science",
    roll_no:0,
    birthdate:''
  })
  const [address,setAddress] = useState({
      streetAddress:'',
      city:'',
      state:''
  })
  const {id,name,course,roll_no,birthdate} = studentDetails
  const {streetAddress,city,state} = address
 
  useEffect(()=>{
    if(content){
      setStudentDetails({
        id:content._id,
        name:content.name,
        course:content.course,
        roll_no:content.roll_no,
        birthdate:content.birthdate.slice(0,10)
      })
      setAddress({
        streetAddress:content.address.streetAddress,
        city:content.address.city,
        state:content.address.state
      })
    }
  },[content])
  
//////////////////////////////////////////////////////////////////////////////////
  const onChange =(e:React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value,typeof(e.target.value));
    
    if(e.target.name === 'roll_no'){
      setStudentDetails(prev=>({
        ...prev,roll_no:parseInt(e.target.value)
      }))
    }else{
      setStudentDetails(prev=>({
        ...prev,[e.target.name]:e.target.value
      }))
    }
    
  }
  const onCourseChange= (e:React.ChangeEvent<HTMLSelectElement>)=>{
    setStudentDetails(prev=>({
      ...prev,course:e.target.value
    }))
  }
  const onAddressChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setAddress(prev=>({
      ...prev,[e.target.name]:e.target.value
    }))
  }


//////////////////////////////////////////////////////////////////////////////
  const onSubmit=async(e:React.FormEvent<HTMLFormElement>)=>{
      e.preventDefault()
      console.log(studentDetails,address);
      const body = JSON.stringify({name,course,roll_no,birthdate,address})
      let stud:dataType
      if(id === ''){
        stud = await newStudent(body) 
        setStudentData(prev=>(
          [...prev,stud]
        ))
      }else{
        stud = await editStudent(id,body)
        setStudentData(prev=>(
          [...prev.filter(v=>v._id !== id),stud]
        ))
      }
      if(stud){
        console.log(stud);
        
        setOpenEditBox(false) 
      }
        
  }
////////////////////////////////////////////////////////////////////////////////
  

return (
    <section className={styles.EditData}>
      <div className={styles.edit_container}>
      <button title='Remove' onClick={()=>setOpenEditBox(false)} className={styles.remove_btn}>X</button>
        <div className={styles.container_title}><h1>Add New Student</h1></div>
        <form autoComplete='off' action="" onSubmit={onSubmit}>
            <div className={styles.row1}>
              <div className={styles.column}>
                <label htmlFor="name">Name</label>
                <input required onChange={onChange} value={name} type="text" name="name" id="name" />
              </div>
              <div className={styles.column}>
                <label htmlFor="course">Course</label>
                <select onChange={onCourseChange} defaultValue='science' name="course" id="course">
                  <option value="science">Science</option>
                  <option value="commerce">Commerce</option>
                  <option value="arts">Arts</option>
                </select>
              </div>
            </div>
            <div className={styles.row1}>
              <div className={styles.column}>
                <label htmlFor="roll_no">Roll No.</label>
                <input required onChange={onChange} value={roll_no ? roll_no : ''} type="number" name="roll_no" id="roll_no" />
              </div>
              <div className={styles.column}>
                <label htmlFor="birth_date">Birth Date</label>
                <input required onChange={onChange} value={birthdate} type="date" id='birthdate' name='birthdate' />
              </div>
            </div>

            <div className={styles.row}>
              <label htmlFor="street_add">Street Address</label>
              <input required onChange={onAddressChange} value={streetAddress} type="text" name="streetAddress" id="street_add" />
            </div>
            <div className={styles.row}>
              <label htmlFor="city">City</label>
              <input required onChange={onAddressChange} value={city} type="text" name="city" id="city" />
            </div>
            <div className={styles.row}>
              <label htmlFor="state">State</label>
              <input required onChange={onAddressChange} value={state} type="text" name="state" id="state" />
            </div>
            <div className={styles.row}>
              <input type="submit" value="Save" />
            </div>
        </form>
        </div>
    </section>
  )
}

export default EditData