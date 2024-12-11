
import LogOut from './LogOut'
import Search from './Search'
import User from './User'

function Left() {
  return (
    <div className='w-[30%] bg-black text-gray-50'>
      <Search/>
      <User/>
      <LogOut/>
    </div>
  )
}

export default Left
