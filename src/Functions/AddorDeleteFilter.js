export const AddorDeleteFilter = (filterstate,data)=>{
       let filterAlreadyPresent = false;
       
        let result = filterstate.filter((filter,arrayindex)=>{
        if(filter === data){
            filterAlreadyPresent = true;
        }else{
            return filter;
        }
        });
      if(!filterAlreadyPresent){
          result.push(data);
      }
      return result;
     
}