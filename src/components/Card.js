import React from "react";

function Card({ icon, title, children }) {

    return (

        <div className="col-md">

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

export default Card;