const {NEXT_PUBLIC_BACKEND_URL} = process.env

export const newStudent =async (body:string) => {
    const res = await fetch(`${NEXT_PUBLIC_BACKEND_URL}/students`,{
        method:"POST",
        headers:{
            'Content-Type':'application/json'
        },
        body:body
    })
    console.log(res);
    if(res.status === 201){
        const data = await res.json()
        console.log('ye hai data',data);
        
        return data.student
    }
    return null
}
export const editStudent =async (id:string,body:string) => {
    const res = await fetch(`${NEXT_PUBLIC_BACKEND_URL}/students/${id}`,{
        method:"PUT",
        headers:{
            'Content-Type':'application/json'
        },
        body:body
    })
    console.log(res);
    if(res.status === 200){
        const data = await res.json()
        return data.student
    }
    return null
}

export const deleteStudent =async (id:string) => {
     const res = await fetch(`${NEXT_PUBLIC_BACKEND_URL}/students/${id}`,{
         method:"DELETE",
     })
     console.log(res);
     if(res.status === 200){
         return true
     }
     return false
     
}