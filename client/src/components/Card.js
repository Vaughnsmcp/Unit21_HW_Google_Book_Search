import React from "react"

function Card({ icon, title, children }) {

    return (

        <div className="container mt-3">

            <div className="card" style={{ width: "100" }}>


                <div className="card">


                    <h2 className={"fa fa-${icon}"}>
                        {title}
                    </h2>

                    <div>
                        {children}

                    </div>
                </div>
            </div>

        </div>
    )
}

export default Card;