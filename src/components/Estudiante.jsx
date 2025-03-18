//const Estudiante = (props) => {
  //  console.log(props);
    //const {name, status} = props
 
    //let arr = ["ricardo", "nicola", "pao"]


    //let 
    //return (
    //<div>
      //  <h3>Nombre: {props.name}</h3>
       // <h4>Status: {props.status}</h4>
    //</div>
    
     //);
//};
//export default Estudiante;
const Estudiante = ({ name, status }) => {
    return (
      <div>
        <h3>Nombre: {name} </h3>
        <h4>Status: {status}</h4>
      </div>
    );
  };
  export default Estudiante;