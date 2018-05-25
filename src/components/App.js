import React, { Component } from 'react';

class TempApp extends Component {
    state = {
        convertedTemp: 'none yet'
    };

    render() {
        return (
            <div className="card">
                <form
                    onSubmit={event => {
                        event.preventDefault();
                        const F = event.target.elements.Farenheit.value;
                        this.setState({
                            convertedTemp: `${(F - 32) / 1.8} C`
                        });
                    }}
                >
                    <label htmlFor="Farenheit">Farenheit:</label>
                    <input id="Farenheit" />
                </form>
                <form
                    onSubmit={event => {
                        event.preventDefault();
                        console.log(event.target.elements.Celsius.value);
                        const C = event.target.elements.Celsius.value;
                        this.setState({
                            convertedTemp: `${C * 1.8 + 32} F`
                        });
                    }}
                >
                    <label htmlFor="Celsius">Celsius:</label>
                    <input id="Celsius" />
                </form>

                <h3>The converted Temp is: {this.state.convertedTemp}</h3>
            </div>
        );
    }
}

const App = () => (
    <div>
        <h1>Temperature Convert</h1>
        <TempApp />
    </div>
);

export default App;
