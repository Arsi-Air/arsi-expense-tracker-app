import React from 'react'

export const Quotes = () => {
    const quoteStore = ["Stick to a budget!",
    "Ensure you pay off debts on time to avoid additional charges!",
    "Rebalance your investment portfolio when necessary!",
    "Make sure you keep a good credit score!",
    "Start saving for your retirement!"]
    const num = Math.floor(Math.random()*5)


    return (
        <div className = 'quotesdiv'>
            Financial tip of the day: {quoteStore[num]}
        </div>
    )
}
