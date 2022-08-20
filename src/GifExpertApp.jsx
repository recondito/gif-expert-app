import { useState } from "react";

export const GifExpertApp = () => {

    const [ categories, setCategories ] = useState([ 'Demon Slayer', 'One Piece' ]);

    const onAddCategory = ( event ) => {
        // setCategories( [...categories, 'Stardew Valley'] );
        setCategories( categories => [...categories, 'Stardew Valley'] );
    }

    return (
        <>
            {/* { title } */}
            <h1>GifExpertApp</h1>
            {/* {input} */}
            {/* {GIFs list} */}
            <button onClick={ onAddCategory }>Add</button>
            <ol>
                { categories.map(category => {
                    return <li key={ category }>{ category }</li>
                }) }
            </ol>
                {/* {GIF Item} */}
        </>
    )
}
