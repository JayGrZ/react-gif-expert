import { useState } from 'react'
import { AddCategory, GifGrid } from './components';

export const GiftExpertApp = () => {

    const [categories, setCategories] = useState([ 'Black Clover' ]);

    const onAddCategory = ( newCategory ) => {

        if ( categories.includes(newCategory) ) return;

        // setCategories(categories.concat('Valorant'))
        setCategories([ newCategory, ...categories])
    }

  return (
        <>
            <h1>Gift Expert App</h1>
            
            <AddCategory 
                onNewCategory={ (value) => onAddCategory(value) }
            />

                { 
                categories.map( category => (
                                <GifGrid key={category} category={category} />
                            ))
                }
        </>
  )
}
