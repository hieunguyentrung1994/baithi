import React, { useState } from 'react'
import Heading from './Heading'
import Search from './Search'
import Content from './Content'

function Home() {
    const [feedbacks, setFeedbacks] = useState([])
    const [theme, setTheme] = useState(true)

    return (
        <div className={theme ? 'container' : 'black'}>
            <Heading theme={theme} setTheme={setTheme} />
            <Search />
            <Content feedback={feedbacks} setFeedback={setFeedbacks} />
        </div>
    )
}

export default Home