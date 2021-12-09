import React , {useState} from 'react'

 const DataList = () => {
    const initialState =['FaceBook','whatsapp','test', 'atest'];

    const [userData, setUserData] =  useState()
    const [persons, setPersons] =  useState(initialState);
    const [outPut, setOutPut] =  useState(initialState);


    const storeInfo = (e) =>{
        setUserData(e);
        let tempData = persons.filter(data => data.includes(e));
        setOutPut(tempData); //here will get filtered data from persons based on input given by user
    }
    return (
        <>
        <input 
        value = {userData}
        onChange={(e) => {
            storeInfo(e.target.value)
        }}
        />
        <div>
            {
                outPut.map((data, index) => {
                   return  <div>{data}</div>
                })
            }
        </div>

        </>
    )
}
export default DataList;