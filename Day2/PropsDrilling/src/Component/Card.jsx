

const Card = (props) => {
    
  return (
    <div className='Container'>
        <div className="w-80 bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-100 text-center">

  {/* Image section */}
  <div className="bg-gray-100 p-6 flex justify-center">
    <img
      src={props.Image}
      alt="Aryan Verma"
      className="w-36 h-36 rounded-full object-cover border-4 border-white shadow-md"
    />
  </div>

  {/* Card content */}
  <div className="p-5 flex flex-col items-center">

    <h2 className="text-2xl font-bold text-gray-900">
      {props.Name}
    </h2>

    <p className="text-sm font-medium text-gray-500 mt-1">
      {props.Position}
    </p>

    <p className="text-sm text-gray-600 mt-3 leading-relaxed">
     {props.Description}
    </p>

    {/* Skills */}
    <div className="flex gap-2 mt-4 mb-5">
      {props.Skills.map((skill, index) => (
              <span
                key={index}
                className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
    </div>

    <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300">
      Hire Me
    </button>

  </div>
</div>
    </div>
  )
}

export default Card