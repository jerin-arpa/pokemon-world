import PropTypes from 'prop-types';

const Cart = ({ selectedPokemon, totalPrice }) => {
    return (
        <div className="bg-[url('/src/assets/images/card-bg.jpg')] bg-no-repeat bg-cover border-8 border-blue-300 p-4 sticky top-0">
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
                <p className="font-bold mb-5">Total Spending: ${totalPrice} </p>
            </div>

            <hr className='mb-5' />

            <p className="font-bold mb-2 text-center">Selected Cart: </p>
            <div className='font-bold'>
                <div className='list-decimal flex flex-wrap  justify-center'>
                    {
                        selectedPokemon.map((cart, idx) => (
                            <div key={idx} className='mb-3 p-1 border-4 mr-2 w-20'>
                                <div>
                                    <p className='font-bold text-sm truncate'>{cart.name}</p>
                                    <p className='font-bold text-sm'>${cart.price}</p>
                                </div>

                                <img className='w-20 border-4 border-blue-300' src={cart.url} alt="" />
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

Cart.propTypes = {
    selectedPokemon: PropTypes.array.isRequired,
    totalPrice: PropTypes.number.isRequired,
}

export default Cart;