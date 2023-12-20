
function Header(){
    return(
        <div className='flex items-center h-[20%] w-screen bg-gradient-to-b from-black to-gray-950'>
            <div className="flex-initial">
                <img src="/images/bg_5.png" className="w-[100px] h-[100px] object-contain"></img>
            </div>
            <div className='text-teal-400 ml-6 font-extrabold text-[50px]' style={{fontFamily:'Poppins,sans-serif'}}>
                CURRENCY CONVERTER
            </div>

            <span className='mx-[200px]'></span>

            <div className='text-teal-400 text-[20px] mt-3 '>LOGIN</div><span className='mx-[22px]'></span>
            <div className='text-teal-400 text-[20px] mt-3'>SIGN UP</div><span className='mx-[22px]'></span>
            <div className='text-teal-400 text-[20px] mt-3'>ABOUT US</div><span className='mx-[22px]'></span>
            <div className='text-teal-400 text-[20px] mt-3'>CONTACT US</div>
        </div>
    );
}

export default Header;