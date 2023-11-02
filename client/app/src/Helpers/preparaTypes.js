const preparaTypes=(data,setForm)=>{
  const arr=[data.frist,data.second]
  setForm({...data,types:arr})
}

 export default preparaTypes;