import { json, useNavigate } from "react-router-dom";
import  { useState,useEffect } from 'react';
import JsonData from './data.json';

const  TableData =(props)=>

{  
    const [postDataApi, setpostDataApi] = useState('');
    const [getDataApi, setgetData] = useState([]);
    const [deleteData, setdeleteData] = useState([]);
    const [loading, setLoading] = useState('')
    const [clickable, setClickable] = useState(false)
    const navigate = useNavigate();
    const databin=(e,info)=>{

        setLoading(true);
        // `http://localhost:8080/bin/?name=${info.Name}`
            fetch(`https://stockdisplaybe2-mp6mtcgm.b4a.run/bin/?name=${info}`, {
              method: 'GET',
            })
              .then(response => response.json())
                .then(json => {
                    setdeleteData(json)
                    setLoading(false);
                    if ((json['status']=='success')){
                        alert(`successfullly deleted ${info}`)
                        window.location.reload(false);

                        
                    }
                    else{
                        alert('Un expected issue please retry')
                    }
                    
                
                    
                })
                
              

    }
    
    const DisplayData=getDataApi.map(
            (info)=>{
                return(
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td class="w-4 p-4">
                    <div class="flex items-center">
                        <input id="checkbox-table-search-1" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                        <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
                    </div>
                </td>
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {info.Name}
                </th>
                <td class="px-6 py-4">
                    {info.tile_type}
                </td>
                <td class="px-6 py-4">
                    {info.company}
                </td>
                <td class="px-6 py-4">
                    {info.brand}
                </td>
                <td class="px-6 py-4">
                    {info.company_price}
                </td>
                <td class="px-6 py-4">
                    {info.display_price}
                </td>
                <td class="px-6 py-4">
                    {info.place}
                </td>
                <td class="flex items-center px-6 py-4">
                    <a href='#'class="font-medium text-blue-600 dark:text-blue-500 hover:underline" id={info.Name}>Edit</a>
                    <a href="#" class="font-medium text-red-600 dark:text-red-500 hover:underline ms-3"id={info.Name}  onClick={(e)=>databin(e,info.Name)}>Remove</a>
                    
                </td>
                
            </tr>
                )
                
            }
            
        )
        
    
    useEffect (()=> {
        setLoading(true)
        setClickable(true)
        try {
            fetch('https://stockdisplaybe2-mp6mtcgm.b4a.run/getData/', {
          method: 'GET',
        })
          .then(response => response.json())
            .then(json => {
                setgetData(json)   
            })
            JSON.stringify(json)
        } catch (error) {
            setgetData([{}])
            
        }
        
          
        //   
      } ,[])
    // 
    {if (setLoading!=true){
        console.log(getDataApi)}
    }
   
    return(    
<div class="overflow-x-auto">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="p-4">
                    <div class="flex items-center">
                        <input id="checkbox-all-search" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                        <label for="checkbox-all-search" class="sr-only">checkbox</label>
                    </div>
                </th>
                <th scope="col" class="px-6 py-3">
                    Name
                </th>
                <th scope="col" class="px-6 py-3">
                    Tile Type
                </th>
                <th scope="col" class="px-6 py-3">
                    Company
                </th>
                <th scope="col" class="px-6 py-3">
                    Brand
                </th>
                <th scope="col" class="px-6 py-3">
                    Company Price
                </th>
                <th scope="col" class="px-6 py-3">
                    Display Price
                </th>
                <th scope="col" class="px-6 py-3">
                    Place
                </th>
                <th scope="col" class="px-6 py-3">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
        
           {/* {submit()} */}
           {DisplayData}
          
           
        </tbody>
    </table>
</div>

    
      );
}
export default TableData;