
import { useEffect, useState } from "react";
import useBreedList from "./useBreedList";
import Results from "./Results";

const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];

const SearchParams = () => {
  const [animal, updateAnimal] = useState("");
  const [location, updateLocation] = useState("");
  const [breed, updateBreed] = useState("");
  const [pets, setPets] = useState([]);
  const [breeds] = useBreedList(animal);

  useEffect(() => {
    requestPets();
  }, []); // el array vacio se pone para actualizarlo cada vez que se de a submit, si no se pone nada no se para de actualizar, y si se pusiera animal, se actualizaria cada vez que se escogiera un animal de la lista

  async function requestPets() {
    const res = await fetch(
      `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
    );
    const json = await res.json();

    setPets(json.pets);
  }

  return (
    <div className="search-params">
        <form
            onSubmit = { (e) => {
                e.preventDefault();
                requestPets();
            }}
        >
            <label htmlFor="location">
            Location
            <input
                id="location"
                value={location}
                placeholder="Location"
                onChange={(e) => updateLocation(e.target.value)}
            />
            </label>
            <label htmlFor="animal">
            Animal
            <select
                id="animal"
                value={animal}
                onChange={(e) => updateAnimal(e.target.value)}
                onBlur={(e) => updateAnimal(e.target.value)}
            >
                <option />
                {ANIMALS.map((animal) => (
                <option key={animal} value={animal}>
                    {animal}
                </option>
                ))}
            </select>
            </label>
            <label htmlFor="breed">
            Breed
            <select
                id="breed"
                value={breed}
                onChange={(e) => updateBreed(e.target.value)}
                onBlur={(e) => updateBreed(e.target.value)}
            >
                <option />
                {breeds.map((breed) => (
                <option key={breed} value={breed}>
                    {breed}
                </option>
                ))}
            </select>
            </label>
            <button>Submit</button>
        </form>
        <Results pets={pets} />
    </div>
  );
};

export default SearchParams;