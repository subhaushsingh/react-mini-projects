
import App from './App.jsx'

function Test(){
    return (<>
        <div className="test">

        <App url={'https://picsum.photos/v2/list'} page={1} limit={10}/>

        </div>
    </>)
}

export default Test;