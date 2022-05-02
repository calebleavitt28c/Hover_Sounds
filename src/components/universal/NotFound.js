import { useNavigate } from "react-router"

const NotFound = () => {
  const navigate = useNavigate()
  return (
    <div className="grid place-items-center">
      <h1 className="block text-center text-3xl text-secondary dark:text-lightgray font-semibold uppercase tracking-widest ease-in duration-300">Page Not Found</h1>
      <button onClick={() => navigate(-1)} className='button px-5 py-3 bg-secondary dark:bg-darkgray dark:hover:bg-black hover:bg-darkgray hover:text-white text-primary dark:text-lightgray relative block focus:outline-none border-2 border-solid rounded-lg text-sm text-center font-semibold uppercase tracking-widest overflow-hidden ease-in duration-300'>Back</button>
    </div>
  )
}

export default NotFound