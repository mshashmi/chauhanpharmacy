import * as React from 'react';
import '../css/index.css';

interface Props {
}

interface State {
}

export default class Main extends React.Component<Props, State> {
    state: State = {
        count: 0
    };
    render() {
        return (
            <div className="App">
                <header className="App-main">
                    <p>
                        This page is currently under construction.
          </p>
                </header>
            </div>
        );
    }

}