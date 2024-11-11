import "./hoga.css";
export default function UserData({data}){
    const {name, email} = data;
    return (
        <div className="box">
            <h3>Name:{name} </h3>
            <p>Email: {email}</p>
        </div>
    )
}