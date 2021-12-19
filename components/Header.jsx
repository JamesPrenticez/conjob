const navigation = [
  {name: "PRE CONTRACT", href: "/precontract"},
  {name: "POST CONTRACT", href: "/postcontract"},
]
import { useRouter } from 'next/router'

function Header() {
  const router = useRouter()
  return (
    <div className='w-full bg-white flex justify-center'>
      <header className="w-5/6 h-16 drop-shadow-md flex items-center p-4">
        <h1 
          onClick={() => router.push('/')}
          className="text-3xl font-racing  cursor-pointer hover:text-blue-600"
        >
          CONJOB
        </h1>
      
        <nav className="flex space-x-4 pl-4 pt-2">
          {navigation.map((item, index) => (
            <p
              key={index}
              onClick={() => router.push(item.href)}
              className="hidden md:inline-flex font-bold hover:text-blue-600 hover:cursor-pointer"
            >
              {item.name}
            </p>
          ))}
        </nav>

        <img 
          onClick={() => dosomthing()}
          className=""
          src=""
          alt=""
        />
      
      
      
      
      </header>

    </div>
  )
}

export default Header