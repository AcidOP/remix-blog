import {DiCodeigniter} from 'react-icons/di'

const UsesCard = ({title, description, link}) => {
  return (
    <a href={link} target="_blank" rel="noreferrer" className="px-1 py-10 md:px-10 card-hover mt-3 rounded-lg flex space-x-4 hover:text-yellow-500 max-w-md">
      <div>
        <DiCodeigniter size={50}/>
      </div>
      <div>
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-gray-500">{description}</p>
      </div>
    </a>
  )
}

export default UsesCard