import PropTypes from 'prop-types';

const Cart = ({ selectedPokemon }) => {
    return (
        <div className="bg-[url('/src/assets/images/card-bg.jpg')] bg-no-repeat bg-cover border-8 border-blue-300 p-4">
            <div className="flex mb-5">
                <img className="w-7 mr-2" src="/src/assets/images/pokeball.png" alt="" />
                <div className="flex items-center">
                    <h3 className="text-xl font-bold">
                        Pokemons Cart
                    </h3>
                </div>
            </div>

            <div className='pl-4 font-bold'>
                <ol className='list-decimal'>
                    {
                        selectedPokemon.map((cart, idx) => (
                            <div key={idx} className=''>
                                <li>{cart.name}</li>
                                <img className='w-20 lg:w-full' src={cart.url} alt="" />
                            </div>
                        ))
                    }
                </ol>
            </div>

            <div className="mt-5">
                <p className="font-bold">Total Cards picked: </p>
                <p className="font-bold">Total Spending: </p>
            </div>
        </div>
    );
};

Cart.propTypes = {
    selectedPokemon: PropTypes.array.isRequired,
}

export default Cart;