import React from "react"

export function Container ({children}
) {
return <div className="container">{children}</div>


}
export function Row ({children}) {

return <div className="row">{children}</div>



}

export function Column ({children, size}) {

    return (
        <div
        className={size.split(" ").map(size => "col-"+size).join(" ")}
        >{children}</div>
    )
}


