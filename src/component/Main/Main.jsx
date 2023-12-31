import { useEffect } from "react";
import Header from "../Header/Header";
import { useState } from "react";
import { FaCrown } from 'react-icons/fa';
import Cart from "../Cart/Cart";
import Swal from 'sweetalert2'

const Main = () => {

    const [allPokemon, setAllPokemon] = useState([]);
    const [selectedPokemon, setSelectedPokemon] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [remaining, setRemaining] = useState(0);


    useEffect(() => {
        fetch('./data.json')
            .then(res => res.json())
            .then(data => setAllPokemon(data));
    }, []);


    const handleAddToCart = (pokemon) => {
        const isExist = selectedPokemon.find(item => item.id === pokemon.id);
        let spending = pokemon.price;

        if (isExist) {
            return Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'This item is already taken!',
                footer: '<a href="">Please ! Add another one</a>'
            })
        }
        else {
            selectedPokemon.forEach(item => {
                spending += item.price;
            })

            const totalBalance = 100 - spending;

            if (spending > 100) {
                return Swal.fire('OPS!! You reach your limit');
            }


            const newPokemon = ([...selectedPokemon, pokemon]);
            setRemaining(totalBalance);
            setTotalPrice(spending);
            setSelectedPokemon(newPokemon);
        }
    }


    return (
        <div>
            <header>
                <Header></Header>
            </header>
            <main className="container mx-auto my-8">
                {/* container */}
                <div className="flex flex-col md:flex-col lg:flex-row gap-10 px-3">
                    {/* cart container */}
                    <div className="w-full md:w-full lg:w-1/5">
                        <Cart selectedPokemon={selectedPokemon} totalPrice={totalPrice} remaining={remaining}></Cart>
                    </div>


                    {/* card container */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-full md:w-full lg:w-4/5">

                        {/* card */}
                        {
                            allPokemon.map(pokemon => (
                                <div key={pokemon.id} className="text-sm bg-[url('/src/assets/images/card-bg.jpg')] border-8 border-blue-300 p-4 space-y-3 ">
                                    <img className="w-full" src={pokemon.url} alt="" />

                                    <div className="flex justify-between my-2">
                                        <h3 className="font-bold text-lg">{pokemon.name}</h3>
                                        <p className="font-bold text-lg">Hp: {pokemon.hp}</p>
                                    </div>

                                    <p className="h-20">
                                        <span className="font-bold">Ability:</span><span className="font-light"> {pokemon.ability}</span>
                                    </p>

                                    <div className="flex">
                                        <p className="font-bold">Power:</p>
                                        <progress className="w-full progress-warning h-5 ml-2" value={pokemon.power} max="100"></progress>
                                    </div>

                                    <p className="font-bold">Creator: {pokemon.creator}</p>

                                    <p className="font-bold">Price: ${pokemon.price}</p>

                                    <div className="flex justify-center">
                                        <button onClick={() => handleAddToCart(pokemon)} className="btn  bg-yellow-500 border-none"><FaCrown className="text-lg"></FaCrown> Add to cart</button>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Main;