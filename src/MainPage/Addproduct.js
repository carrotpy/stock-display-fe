import { useNavigate } from "react-router-dom";
import  { useState } from 'react';

const  Addbutton =(props)=>

{  
    const [postDataApi, setpostDataApi] = useState('');
    const [getDataApi, setgetData] = useState({});
    const [loader, setloader] = useState(true);


    const navigate = useNavigate();
    // permenet
   
    
    const submit =e => {
        e.preventDefault()
        setloader(true)
        fetch('https://stockdisplaybe-9kakz3s8.b4a.run/addProduct/', {
          method: 'POST',
          body: JSON.stringify(postDataApi),
          headers: { 'Content-Type': 'application/json' },
        })
          .then(res => res.json())
          .then(json => {
            setgetData(json)
            setloader(false)
            //   .then(json => setpostDataApi(json.postDataApi))
        if ((loader == false) && (json['status']=='success')){
            alert('successfullly added the product',getDataApi['status'])
        }
        else{
            alert('Un expected issue please retry')
        }
          })
        
          navigate('/')
      }
    return(


// <!-- Main modal -->
<div id="defaultModal" tabindex="-1" aria-hidden="true" class="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-modal md:h-full">
    <div class="relative p-4 w-full max-w-2xl h-full md:h-auto">
        {/* <!-- Modal content --> */}
        <div class="relative p-4 bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
            {/* <!-- Modal header --> */}
            <div class="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 dark:border-gray-600">
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                    Add Product
                </h3>
                <button  onClick ={()=>navigate('/')} type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="defaultModal">
                    <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    <span class="sr-only">Close modal</span>
                </button>
            </div>
            {/* <!-- Modal body --> */}
            <form onSubmit={submit}>
                <div class="grid gap-4 mb-4 sm:grid-cols-2">
                    <div>
                        <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                        <input type="text" name="postDataApi[Name]" id="name"  onChange={e=> setpostDataApi({ ...postDataApi, Name: e.target.value })} value={postDataApi.name} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Type product name" required=""/>
                    </div>
                    <div>
                        <label for="tile_type" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tile Type</label>
                        <input type="text" name="postDataApi[tile_type]" id="tile_type" onChange={e=> setpostDataApi({ ...postDataApi, tile_type: e.target.value })} value={postDataApi.tile_type} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Product brand" required=""/>
                    </div>
                    <div>
                        <label for="company" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Company</label>
                        <input type="text" name="postDataApi[company]" id="company" onChange={e=> setpostDataApi({ ...postDataApi, company: e.target.value })} value={postDataApi.company} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Product brand" required=""/>
                    </div>
                    <div>
                        <label for="brand" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Brand</label>
                        <select id="brand"  onChange={e=> setpostDataApi({ ...postDataApi, brand: e.target.value })} value={postDataApi.brand} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                            <option selected="">Select brand</option>
                            <option value="TV">TV/Monitors</option>
                            <option value="PC">PC</option>
                            <option value="GA">Gaming/Console</option>
                            <option value="PH">Phones</option>
                        </select>
                    </div>
                    <div>
                        <label for="company_price" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Company price</label>
                        <input type="number" name="postDataApi[company_price]" id="company_price" onChange={e=> setpostDataApi({ ...postDataApi, company_price: e.target.value })} value={postDataApi.company_price} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="$2999" required=""/>
                    </div>
                    <div>
                        <label for="display_price" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Display price</label>
                        <input type="number" name="postDataApi[display_price]" id="display_price" onChange={e=> setpostDataApi({ ...postDataApi, display_price: e.target.value })} value={postDataApi.display_price} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="$2999" required=""/>
                    </div>
                    <div>
                        <label for="place" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Place</label>
                        <input type="text" name="postDataApi[place]" id="price" onChange={e=> setpostDataApi({ ...postDataApi, place: e.target.value })} value={postDataApi.place} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Place" required=""/>
                    </div>
                    
                    
                    {/* <div class="sm:col-span-2">
                        <label for="description" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">compan</label>
                        <textarea id="description" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Write product description here"></textarea>                    
                    </div> */}
                </div>
                <button  type="submit" class="text-white inline-flex items-center bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                    <svg class="mr-1 -ml-1 w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd"></path></svg>
                    Add new product
                </button>
            </form>
        </div>
    </div>
</div>
 
        
    );
}
export default Addbutton;