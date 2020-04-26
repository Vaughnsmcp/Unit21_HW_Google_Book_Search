import React from "react"

function Card ({icon, title, children}){

    return (

        <div className = "">

            <div>

                <h2>
                    {title}
                </h2>

                <div>
                    {children}

                </div>

            </div>

        </div>
    )
}

export default Card