import { useState } from "react"

import {AddCategory, GifGrid} from "./components"

const gifExpertApp = () => {

    // Array con categorias
    const [categories, setCategories] = useState(['Dragon Ball Z'])


    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) return

        // Agrega la nueva categoria y trae las categorias anteriores
        setCategories([newCategory, ...categories])
        console.log(newCategory)
    }

    return (
        <>
            <h1>Gif Expert App</h1>

            <AddCategory
                onNewCategory={onAddCategory}
            />

            {
                categories.map(category => (
                    <GifGrid
                        key={category}
                        category={category} />
                ))
            }

        </>
    )
}

export default gifExpertApp
