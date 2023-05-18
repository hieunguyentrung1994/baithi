import React, { useState } from 'react'

function Search() {


    return (
        <div className='search'>
            <form >
                <input

                    className='input_search'
                    type="text" />
                <i class="fa-solid fa-magnifying-glass"></i>
            </form>
        </div>
    )
}

export default Search