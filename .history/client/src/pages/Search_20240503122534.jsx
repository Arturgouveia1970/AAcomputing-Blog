import { TextInput } from "flowbite-react";

export default function Search() {
  return (
    <div>
      <div>
        <form>
          <div>
            <label>Search Term:</label>
            <TextInput type="text" placeholder="Search..." />  
          </div> 
        </form>
      </div>
    </div>
  );
}
