const Filter = (props) =>{
const handleChangeFilter = (event)=>{
    const filterTshirtValue = event.target.value;
    props.handleChangeFilter(filterTshirtValue)
    
    
}


    return(
        <form action="">
            <input onChange={handleChangeFilter} placeholder="Buscar" type="text" />
        </form>
    )
}
export default Filter;