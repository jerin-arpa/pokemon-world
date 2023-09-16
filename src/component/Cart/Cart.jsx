import PropTypes from 'prop-types';

const Cart = ({ selectedPokemon }) => {
    return (
        <div className="bg-[url('/src/assets/images/card-bg.jpg')] bg-no-repeat bg-cover border-8 border-blue-300 p-4">
            <div className="flex mb-5 justify-center">
                <img className="w-7 mr-2" src="/src/assets/images/pokeball.png" alt="" />
                <div className="flex items-center">
                    <h3 className="text-xl font-bold">
                        Pokemons Cart
                    </h3>
                </div>
            </div>


            <div className="mt-5">
                <p className="font-bold">Total Cards picked: {selectedPokemon.length} </p>
                <p className="font-bold mb-5">Total Spending: </p>
            </div>



            <p className="font-bold mb-2">Selected Cart: </p>
            <div className='pl-4 font-bold'>
                <ol className='list-decimal flex flex-wrap gap-x-10 justify-center'>
                    {
                        selectedPokemon.map((cart, idx) => (
                            <div key={idx} className=' mb-3'>
                                <div className='lg:flex justify-between'>
                                    <li className='font-bold text-sm'>{cart.name}</li>
                                    <p className='font-bold text-sm'>${cart.price}</p>
                                </div>
                                <img className='w-20 lg:w-full border-4 border-blue-300' src={cart.url} alt="" />
                            </div>
                        ))
                    }
                </ol>
            </div>
        </div>
    );
};

Cart.propTypes = {
    selectedPokemon: PropTypes.array.isRequired,
}

export default Cart;