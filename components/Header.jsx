const navigation = [
  {name: "TENDERS", href: "/projects"},
  {name: "DELIVERY", href: "/projects"},
  {name: "TIME", href: "/projects"},
  {name: "MONEY", href: "/projects"},
]
import { useRouter } from 'next/router'

function Header() {
  const router = useRouter()
  return (
    <>
      <header className="bg-white h-16 drop-shadow-md flex items-center p-4">
        <h1 className="text-3xl font-racing">CONJOB</h1>
      
        <nav className="flex space-x-4 pl-4 pt-2">
          {navigation.map((item, index) => (
            <p
              key={index}
              onClick={() => router.push(item.href)}
              className="font-bold hover:text-blue-500 hover:cursor-pointer"
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

    </>
  )
}

export default Header