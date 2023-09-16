import './Header.css'

const Header = () => {
    return (
        <div className="bg py-16">
            <div className='container mx-auto px-5'>
                <h1 className="text-4xl font-bold text-center color text-yellow-500 mb-2">Pokemon World</h1>
                <h3 className="text-xl font-bold text-center text-white my-2">Gotta catch em all!</h3>
                <p className="text-center text-white mb-2">Build your pokemon army with all the greatest pokemon cards and win amazing prizes every week.</p>

                <h2 className="text-2xl font-bold text-center text-white">Maximum Balance: <span className='text-yellow-500'>$100</span></h2>
            </div>
        </div>
    );
};

export default Header;