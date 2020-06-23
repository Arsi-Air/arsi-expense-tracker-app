import React from 'react'

export const Quotes = () => {
    const quoteStore = ["saas", "wqdqwd", "ssadas", "sadasd"]
    const num = Math.floor(Math.random()*4)


    return (
        <div>
            {quoteStore[num]};
        </div>
    )
}
