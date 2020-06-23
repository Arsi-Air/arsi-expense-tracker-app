import React from 'react'

export const Quotes = () => {
    const quoteStore = ["saassaas saassaassaa ssaassaas saassa assaass aassaas saas",
    "wqdqwd wqdqwdw qdqwdwqdqwd wqdqwdwqdqwds asadasdsadasd dasd",
    "ssadass sadasssad asssadassadas dsadasdsad sadasdsadasd asd",
    "sadasdsad asdsadasd sadasdsadas dsadasds adassada sdsadas dd"]
    const num = Math.floor(Math.random()*4)


    return (
        <div className = 'quotesdiv'>
            Financial tip of the day: {quoteStore[num]}
        </div>
    )
}
