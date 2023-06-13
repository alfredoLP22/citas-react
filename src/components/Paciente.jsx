const Paciente = ({ paciente, setPaciente, eliminarPaciente }) => {
  const handleDelete = () => {
    const respuesta = confirm('¿Deseas eliminar este registro?');

    if(respuesta) {
      eliminarPaciente(paciente.id);
    }
    return;
  }
  return (
    <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl" >
          <p className="font-bold mb-3 text-gray-700 uppercase">Nombre: {''}<span className="font-normal normal-case">{paciente.nombre}</span></p>
          <p className="font-bold mb-3 text-gray-700 uppercase">Propetario: {''}<span className="font-normal normal-case">{paciente.propetario}</span></p>
          <p className="font-bold mb-3 text-gray-700 uppercase">Email: {''}<span className="font-normal normal-case">{paciente.email}</span></p>
          <p className="font-bold mb-3 text-gray-700 uppercase">Alta: {''}<span className="font-normal normal-case">{paciente.fecha}</span></p>
          <p className="font-bold mb-3 text-gray-700 uppercase">Sintomas: {''}<span className="font-normal normal-case">{paciente.sintomas}</span></p>
          <div className="flex mt-10 justify-between">
            <button 
              type="button"
              className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-md"
              onClick={() => setPaciente(paciente)}
            >
              Editar
            </button>
            <button 
              type="button"
              className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-md"
              onClick={handleDelete}
            >
              Eliminar
            </button>
          </div>
    </div>
  )
}

export default Paciente;