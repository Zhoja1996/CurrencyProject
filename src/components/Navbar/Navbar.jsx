
import logo from '../../assets/img/logo.png'

const Navbar = () => {
    return (
        <nav className="flex justify-between items-center bg-amber-400 pt-5 pb-5 p-10 rounded-b-xl border-b-2 border-gray-700" >

            <img src={logo} alt="logo" className='w-15 h-auto cursor-pointer rounded-xl'/>

            <div className='flex justify-center items-center gap-5 text-xl'>
                <p className="hover:scale-110 hover:brightness-125 transition-all duration-250 cursor-pointer">Головна</p>
                <p className="hover:scale-110 hover:brightness-125 transition-all duration-250 cursor-pointer">Курси валют</p>
                <p className="hover:scale-110 hover:brightness-125 transition-all duration-250 cursor-pointer">Конвертер валют</p>
            </div>

            <img src={logo} alt="logo" className='w-15 h-auto rounded-xl'/>
        </nav>
    );
}

export default Navbar;