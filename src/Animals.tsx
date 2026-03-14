import React, {useState} from 'react'
import {Animal, animals} from './data'
import {AnimalPreview} from "./AnimalPreview";

export function AnimalsPage(){
    const [Animals, setAnimals] = useState<Animal[]>(animals);

    return (
        <div className="AnimalsContainer">
            {animals?animals.map((animal, index) => (
                (index < 12) && <AnimalPreview animal={animal} key={index} />
            )): <div>По най</div>}
        </div>
    )
}