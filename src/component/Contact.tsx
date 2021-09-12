import * as React from 'react';
import '../css/index.css';

interface Props {
}

interface State {
}

export default class Contact extends React.Component<Props, State> {
    state: State = {
        count: 0
    };
    render() {
        return (
            <div className="App">
                <header className="App-main">
                    <p>
                        Please contact:
          </p>
                </header>
            </div>
        );
    }

}