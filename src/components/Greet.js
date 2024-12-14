import React from 'react'

// function Greet(){
//     return <h1>Hello Shrinivas</h1>
// }

// export default Greet

// const Greet = props => {
//     // console.log(props)
//     return (
//         <div>
//             <h1>Hello {props.name} aka {props.heroname}</h1>
//             {props.children}
//         </div>
//     )
// }

// Destructuring props method 1

// const Greet = ({name,heroname}) => {
//     return (
//         <div>
//             <h1>Hello {name} aks {heroname}</h1>
//         </div>
//     )
// }

// Destructuring props method 2

const Greet = (props) => {
    const {name,heroname} = props
    return (
        <div>
            <h1>Hello {name} aks {heroname}</h1>
        </div>
    )
}
export default Greet