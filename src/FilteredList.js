import { useMemo } from "react"

export function FilteredList (items){
    items = [{
        name: 'Michele',
        id: 1,
        age: 27
    },

    {
        name: 'Filippo',
        id: 2,
        age: 28
    },

    {
        name: 'Flavia',
        id: 3,
        age: 13
    },

    {
        name: 'Gianni',
        id: 4,
        age: 11
    }
]

    // const [items, setItems] = useState([])

    function FilterItem(){
        return(
            <ul>
                Item with age greater than 18:
                {items.filter(item => item.age > 18).map(filteredPerson => (
                <li>
                  {filteredPerson.name}
                </li>
              ))}
            </ul>
        )
    }

    const result = useMemo(() => FilterItem(), [items])

    return(
        <h1>{result}</h1>
    )
}