import { useState } from "react"

const AddCategory = () => {

    const [inputValue, setInputValue] = useState('One Piece')

    const onInputChange = ({target}) => {
        setInputValue(target.value)
    }
    const onSubmit = (event) => {
        event.preventDefault()
        console.log(inputValue);
    }
    return (
        <form onSubmit={onSubmit}>
            <input
                type="text"
                placeholder="Buscar gifs"
                onChange={onInputChange}
            />
        </form>
    )
}

export default AddCategory
