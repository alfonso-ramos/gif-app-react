import { useState } from "react"
import AddCategory from "./components/AddCategory"
const gifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch', 'Dragon Ball Z'])

    const onAddCategory = () => {
        setCategories([...categories, 'newCategory'])
    }
    return (
        <>
            <h1>Gif Expert App</h1>

            <AddCategory />
            
            <button onClick={onAddCategory}>Agregar</button>
            <ol>
                {
                    categories.map(category =>(
                        <li key={category}>
                            {category}
                        </li>
                    ))
                }
            </ol>
        </>
    )
}

export default gifExpertApp
