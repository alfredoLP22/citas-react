const Formulario = () => {
  return (
    <div className="md:w-1/2 lg:w-2/5">
        <h1 className="font-black text-3xl text-center">Seguimiento pacientes</h1>
        <p className="text-lg mt-5 text-center mb-10">
          Añade pacientes y {''}
          <span className="text-indigo-600 font-bold">Administralos</span>
        </p>

        <form action="" className="bg-white shadow-md rounded-lg py-10 px-5">
          <div className="mb-5">
            <label className="block text-gray-700 uppercase font-bold" htmlFor="mascota">Mascota</label>
            <input type="text" id="mascota" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" placeholder="Nombre de mascota" />
          </div>

          <div className="mb-5">
            <label className="block text-gray-700 uppercase font-bold" htmlFor="propetario">Propetario</label>
            <input type="text" id="propetario" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" placeholder="Nombre de propetario" />
          </div>

          <div className="mb-5">
            <label className="block text-gray-700 uppercase font-bold" htmlFor="email">Email</label>
            <input type="email" id="email" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" placeholder="Email" />
          </div>

          <div className="mb-5">
            <label className="block text-gray-700 uppercase font-bold" htmlFor="alta">Alta</label>
            <input type="date" id="alta" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"/>
          </div>

          <div className="mb-5">
            <label className="block text-gray-700 uppercase font-bold" htmlFor="sintomas">Sintomas</label>
            <textarea type="date" id="sintomas" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" placeholder="describe los sintomas"/>
          </div>

          <input type="submit" className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-800 cursor-pointer transition-all" value="Agregar paciente"/>
        </form>
    </div>
  )
}

export default Formulario