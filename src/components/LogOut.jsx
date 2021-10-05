
import "./Login.css";

function LogOut ({handleDisplay}) {

    
    
    function handleNo() {
          localStorage.clear();
          window.location.reload();
      };
    

return (
    <div className="modal">
        <div className="modal_content">
            <div>
            <h1>Log Out</h1>

            <div>¿Desea Gurarar El Usuario Para Futuras Consultas?</div>
            <div>
                <button className ="button">
                SI
                </button>
                <button className="button" onClick={handleNo}>
                NO
                </button>
            </div>
            </div>
        </div>
    </div>
);

}

export default LogOut