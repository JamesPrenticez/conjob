const navigation = [
  {name: "TENDERS", href: "/tenders"},
  {name: "DELIVERY", href: "/delivery"},
  {name: "TIME", href: "/time"},
  {name: "MATERIALS", href: "/materials"},
  {name: "FINACIALS", href: "/finacials"},
]
import { useRouter } from 'next/router'

function Header() {
  const router = useRouter()
  return (
    <>
      <header className="bg-white h-16 drop-shadow-md flex items-center p-4 w-full">
        <h1 
          onClick={() => router.push('/')}
          className="text-3xl font-racing  cursor-pointer hover:text-blue-900"
        >
          CONJOB
        </h1>
      
        <nav className="flex space-x-4 pl-4 pt-2">
          {navigation.map((item, index) => (
            <p
              key={index}
              onClick={() => router.push(item.href)}
              className="hidden md:inline-flex font-bold hover:text-blue-900 hover:cursor-pointer"
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