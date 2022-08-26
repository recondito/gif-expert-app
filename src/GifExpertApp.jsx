import { useState } from "react";
import { AddCategory } from "./components/AddCategory";


export const GifExpertApp = () => {

    const [ categories, setCategories ] = useState([ 'Demon Slayer', 'One Piece' ]);

    const onAddCategory = ( newCategory ) => {
        // if ( categories.includes(newCategory) ) return;
        if ( categories.findIndex( category => newCategory.toLowerCase() === category.toLowerCase() ) !== -1 ) return;
        // setCategories( [...categories, 'Stardew Valley'] );
        setCategories( [newCategory, ...categories] );
    }

    return (
        <>
            {/* { title } */}
            <h1>GifExpertApp</h1>

            {/* {input} */}
            <AddCategory 
                // setCategories={ setCategories }
                onNewCategory={ (value) => onAddCategory(value) }
            />

            {/* {GIFs list} */}
            {/* <button onClick={ onAddCategory }>Add</button> */}
            <ol>
                { 
                categories.map( ( category ) => {
                    return <li key={ category }>{ category }</li>
                    }) 
                }
            </ol>
                {/* {GIF Item} */}
        </>
    )
}
