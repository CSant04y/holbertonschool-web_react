import React, {Component, Children} from 'react';

function WithLogging(WrappedComponent) {
    const compName = WrappedComponent.displayName || WrappedComponent.name || 'Componet'
    class Logging extends React.Component {
        componentDidMount() {
            console.log(`Component ${compName} is mounted`);
        }

        componentWillUnmount() {
            console.log(`Component ${compName} is going to unmount`);
        }
        render() {
            return <WrappedComponent {...this.props}/>
        }
    }
    Logging.displayName = `WithLogging(${compName})`;
    return Logging;
}

export default WithLogging;
