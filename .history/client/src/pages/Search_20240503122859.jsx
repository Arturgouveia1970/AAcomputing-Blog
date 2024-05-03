import { TextInput } from "flowbite-react";
import { useState } from "react";

export default function Search() {
    const [sidebarData, setSidebarData] = useState({
        searchTerm: '',
        sort: 
    })
  return (
    <div>
      <div>
        <form>
          <div>
            <label>Search Term:</label>
            <TextInput 
              type="text" 
              placeholder="Search..."  
              id='searchTerm' 
            />  
          </div> 
        </form>
      </div>
    </div>
  );
}
