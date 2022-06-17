const TshirtsList = (props) =>{
    return <div>
   {props.data.filter((item) =>
        item.name.toLowerCase().includes(props.filterName.toLowerCase())
      )
   
   
   
   
   .map(function(item, index){
     return (<li key={index}>
       <img src = {item.photo} alt="foto camiseta" />
       <p>{item.name}</p>
       <p>{item.price}</p>
       <p>Más colores</p>
       <button>Añadir</button>
     </li>)
   })}
  </div>;
}
export default TshirtsList;


