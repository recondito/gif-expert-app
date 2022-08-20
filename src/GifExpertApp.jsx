import { useState } from "react";

export const GifExpertApp = () => {

    const [ categories, setCategories ] = useState([ 'Demon Slayer', 'One Piece' ]);

    return (
        <>
            {/* { title } */}
            <h1>GifExpertApp</h1>
            {/* {input} */}
            {/* {GIFs list} */}
            <ol>
                { categories.map(category => {
                    return <li key={ category }>{category}</li>
                }) }
            </ol>
                {/* {GIF Item} */}
        </>
    )
}
