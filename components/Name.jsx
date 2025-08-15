// Create a new file called PropsDisplayer.jsx in a components folder
function Name(props) {
// convert object to string
const stringProps = JSON.stringify(props);
return (
<div className="Name componentBox">
<h2>Check out my props!</h2>
<h3>{stringProps}</h3>
{/* what happens if we try to render the object {props} ? */}
</div>
)
}
// export this component so we can import it elsewhere
export default Name