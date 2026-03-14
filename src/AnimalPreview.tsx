import React from 'react'
import {Animal} from "./data";

interface AnimalPreviewProps {
    animal: Animal
}

export function AnimalPreview({animal}: AnimalPreviewProps) {
    return (
        <div className="AnimalPreviewContainer">
            <h2>{animal.name}</h2>
            <h3>{String(animal.species)}</h3>
            <h3>{animal.age}</h3>
        </div>
    )
}