import {users} from '../prisma/seeds/users.js'

function Main() {
  return (
    <main className="h-screenNav bg-blue-900 w-full">
      home
      {JSON.stringify(users)}
    </main>
  )
}

export default Main
