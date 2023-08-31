export function filterData(searchText , RestranutsList){
    //console.log(searchText)
    //searching the restranuts and making them low case of query and api  
    const filterData=  RestranutsList.filter((restranutfilter)=> (restranutfilter?.info?.name.toLowerCase()?.includes(searchText.toLowerCase()))
  )
  return filterData;
  }