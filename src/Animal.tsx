import React, {useState} from "react";
import {useParams} from "react-router"
import {Animal} from "./data";
import {animals} from "./data";

export function AnimalComponent(){
    const params = useParams();

    const animal: Animal | undefined = animals.find((animal) => animal.id === Number(params.id));

    return(
        <div className="AnimalContainer">
            {animal &&
                <>
                    <h1>{animal.name}</h1>
                    <h2>{String(animal.species)}</h2>
                    <h3>{animal.age}</h3>
                    <p>{animal.description}</p>
                </>
            }
        </div>
    )
}