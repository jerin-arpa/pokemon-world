import { useEffect } from "react";
import Header from "../Header/Header";
import { useState } from "react";

const Main = () => {

    const [allPokemon, setAllPokemon] = useState([]);

    useEffect(() => {
        fetch('./data.json')
            .then(res => res.json())
            .then(data => setAllPokemon(data));
    }, []);


    return (
        <div>
            <header>
                <Header></Header>
            </header>
            <main className="container mx-auto my-8">
                {/* container */}
                <div className="flex flex-col md:flex-col lg:flex-row gap-5">
                    {/* cart container */}
                    <div className="w-full md:w-full lg:w-1/5 bg-slate-100">
                        <div className="flex">
                            <img className="w-10 mr-2" src="/src/assets/images/pokeball.png" alt="" />
                            <h3 className="text-xl font-bold">
                                Pokemons Cart
                            </h3>
                        </div>

                        <div>
                            <p className="font-bold">Total Cards picked: </p>
                            <p className="font-bold">Total Spending: </p>
                        </div>
                    </div>


                    {/* card container */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-full md:w-full lg:w-4/5">

                        {/* card */}
                        {
                            allPokemon.map(pokemon => (
                                <div key={pokemon.id} className="text-sm bg-[url('/src/assets/images/card-bg.jpg')] border-8 border-blue-300 p-4 space-y-3">
                                    <img className="w-full" src={pokemon.url} alt="" />

                                    <div className="flex justify-between my-2">
                                        <h3 className="font-bold text-lg">Sylveon V</h3>
                                        <p className="font-bold text-lg">Hp: 310</p>
                                    </div>

                                    <p><span className="font-bold">Ability:</span><span className="font-light"> Attach an Energy card from your hand to 1 of your Benched Pokémon. If you do, heal 120 damage from that Pokémon.</span></p>

                                    <div className="flex">
                                        <p className="font-bold">Power:</p>
                                        <progress className="w-full progress-warning h-5 ml-2" value="70" max="100"></progress>
                                    </div>

                                    <p className="font-bold">Creator: Ryota Murayama </p>

                                    <p className="font-bold">Price: $23.5</p>
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