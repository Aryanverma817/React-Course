

const NavBar = () => {
    return (
        <div className='header
 py-2 px-2 flex justify-between'>
            <div className="Title text-2xl tracking-tight font-extrabold ">ZONIX</div>

            <div className=" content-center flex font-medium text-lg gap-6 justify-center items-center">
                <div className="">About</div>
                <div className="">Testimonial</div>
                <div className="">Training</div>
                <div className="">Contact</div>  
            </div>

            <div className="Right flex content-end">
                <div className=" border-2 cursor-grab rounded-full hover:bg-black hover:text-white hover:border-black text-black font-medium px-3 my-2"> Join Today</div>
            </div>
        </div>
    )
}

export default NavBar