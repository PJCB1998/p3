import './Login.css'

const ErrorMessage = ({ children }) => {
    return (
      <div className="error">
        <p>Error: {children}</p>
      </div>
    );
  };

  export default ErrorMessage