import React from 'react'

export const Quotes = () => {
    const quoteStore = ["saassaassaassaassaassaassaassaassaassaassaassaassaas",
    "wqdqwdwqdqwdwqdqwdwqdqwdwqdqwdwqdqwdsasadasdsadasddasd",
    "ssadasssadasssadasssadassadasdsadasdsadsadasdsadasdasd",
    "sadasdsadasdsadasdsadasdsadasdsadasdsadassadasdsadasdd"]
    const num = Math.floor(Math.random()*4)


    return (
        <p>
            Financial tip of the day: {quoteStore[num]}
        </p>
    )
}
