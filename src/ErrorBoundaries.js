import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    console.dir("Get Derived State From Error");
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.dir("Component Did Catch Error");

        // Server Loogg
    //this.setState({ error, errorInfo });

   
  }

  render() 
    {
    if (this.state.hasError) {
        // You can render any custom fallback UI
        return <h1>Something went wrong.</h1>;
        }
    
        return this.props.children;
  }
}

// ErrorBoundary.propTypes = {
//   sandbox: PropTypes.shape({
//     logger: PropTypes.shape({ error: PropTypes.func.isRequired, log: PropTypes.func.isRequired }),
//   }).isRequired,
//   children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
// };
export default ErrorBoundary;
