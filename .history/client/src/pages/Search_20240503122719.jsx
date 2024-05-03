import { TextInput } from "flowbite-react";

export default function Search() {
    const
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
