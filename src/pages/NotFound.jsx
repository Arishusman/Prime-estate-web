import { Link } from "react-router-dom";

function NotFound(){

return(

<div
style={{
display:"grid",
placeItems:"center",
height:"100vh",
textAlign:"center"
}}
>

<div>

<h1
style={{
fontSize:"120px"
}}
>
404
</h1>

<p>Page Not Found</p>

<br/>

<Link
to="/"
className="btn btn-primary"
>
Back Home
</Link>

</div>

</div>

);

}

export default NotFound;