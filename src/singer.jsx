export default
function Singer({singer}){
    console.log(singer)
    return(
        <div>
            <h1>Singer Name:{singer.name}</h1>
            <p>Singer Age:{singer.age}</p>
        </div>
    )
}