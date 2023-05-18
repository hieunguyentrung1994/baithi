import React from 'react'

function Heading({ theme, setTheme }) {
    return (
        <div className='heading'>
            <div>
                <b>Reviews TA BÉC CỌP!!!!</b>
                <i class="fa-solid fa-comment"></i>
            </div>
            <div>

                <i
                    onClick={() => setTheme(!theme)}
                    class="fa-solid fa-circle-half-stroke"></i>
            </div>
        </div>
    )
}

export default Heading