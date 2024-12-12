import { useEffect, useState } from "react";
import { Employee } from "./Employee";
function EmployeeData(){
    const [data,setData]=useState([]);
    useEffect(()=>{
        setData(Employee)
    },[]);
    const [id,setId]=useState("");
    const [name,setName]=useState("");
    const [country,setCountry]=useState("");
    const [city,setCity]=useState("");
    const [department,setDepartment]=useState("");
    const [designation,setDesignation]=useState("");
    const [isUpdate,setIsUpdate]=useState(false);

    function handleIdChange(event){
        setId(event.target.value);
    }
    function handleNameChange(event){
        setName(event.target.value);
    }
    function handleCountryChange(event){
        setCountry(event.target.value);
    }
    function handleCityChange(event){
        setCity(event.target.value);
    }
    function handleDepartmentChange(event){
        setDepartment(event.target.value);
    }
    function handleDesignationChange(event){
        setDesignation(event.target.value);
    }
    function clickSave(){
        let error='';
        if (name==='')
            error=error+"name is required";
        if (country==='')
            error+="country is required";
        if (city==='')
            error+="city is required";
        if (department==='')
            error+="department is required";
        if (designation==='')
            error+="desigantion is required";
        if (error!=='')
        {
        
        const newEmp={
            id,
            name,
            country,
            city,
            department,
            designation
        };
        setData(e=>[...e,newEmp]);
        setName("");
        setCountry("");
        setCity("");
        setDepartment("");
        setDesignation("");
    }
    else{
        alert("error"); 
    }

    }
    function clickClear(){
        setId("");
        setName("");
        setCountry("");
        setCity("");
        setDepartment("");
        setDesignation("");
        setIsUpdate(false);
    }
    function clickUpdate(id){
        const i=data.map((ele)=>{return ele.id}).indexOf(id);
        const update=[...data];
        update[i].name=name;
        update[i].country=country;
        update[i].city=city;
        update[i].department=department;
        update[i].designation=designation;
        setData(update);
        clickClear();

    }

    function readEmp(id){
        const edit=data.filter((ele)=>ele.id===id);
        if(edit!==undefined){
            setIsUpdate(true);
            setId(id);
            setName(edit[0].name);
            setCountry(edit[0].country);
            setCity(edit[0].city);
            setDepartment(edit[0].department);
            setDesignation(edit[0].designation);
        }
        
    }

    function deleteEmp(id){
        if(window.confirm("Are you sure want to delete?"))
        {
        setData(data.filter((ele)=>ele.id!==id));
       
    }}
    
    
    
    return(
        <div className="container">
            <h2>Employee data</h2>
            <div style={{
                display:"flex",
                alignItems:"center",
                margin:"40px" }}>
                <div>
                
                    <input type="text" value={name} placeholder="Name" onChange={(event)=>handleNameChange(event)}/>
                
                
                    <input type="text" value={country} placeholder="Country" onChange={(event)=>handleCountryChange(event)} />
                
                
                    <input type="text" value={city} placeholder="City" onChange={(event)=>handleCityChange(event)}/>
                
                
                    <input type="text" value={department} placeholder="Department" onChange={(event)=>handleDepartmentChange(event)}/>
                
                
                    <input type="text" value={designation} placeholder="Designation" onChange={(event)=>handleDesignationChange(event)}/>
                
                
                    {/* isUpdate===false */}
                    {
                    !isUpdate?
                <button className="btn btn-primary" onClick={clickSave}>Save</button>
                :
                <button className="btn btn-primary" onClick={()=>clickUpdate(id)}>Update</button>
                    }
                
                <button className="btn btn-secondary" onClick={clickClear}>Clear</button>
                </div>
            </div>

     
                <table className="table table-hover">
                <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Country</th>
                    <th>City</th>
                    <th>Department</th>
                    <th>Designation</th>
                    <th>Actions</th>
                </tr>
                </thead>

                <tbody>
                {data.map((element,index)=>(
                <tr key={index}>
                    <td>{element.id}</td>
                    <td >{element.name}</td>
                    <td>{element.country}</td>
                    <td>{element.city}</td>
                    <td>{element.department}</td>
                    <td>{element.designation}</td>
                    <td>
                    <button className="btn btn-primary" onClick={()=>readEmp(element.id)}>Read</button>&nbsp;
                    <button className="btn btn-danger" onClick={()=>deleteEmp(element.id)}>Delete</button>
                    </td>
                </tr>
                
                ))}        
               </tbody>
            </table>
        </div>
    );
}
export default EmployeeData