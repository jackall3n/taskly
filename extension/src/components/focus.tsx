import * as React from "react";
import * as moment from 'moment';
import classnames from 'classnames';

export class Focus extends React.PureComponent {
    state = {
        on: true,
        time: undefined,
        name: localStorage.getItem('name') || ""
    };

    componentWillMount(): void {
        this.updateTime();

        setInterval(() => {
            this.updateTime()
        }, 1000)
    }

    updateTime = () => {
        this.setState({
            on: !this.state.on,
            time: moment()
        })
    };

    updateName = (event) => {
        const name = event.target.value;
        localStorage.setItem("name", name);

        this.setState({
            name
        });
    };

    renderClock = () => {
        const className = classnames('clock', {blink: this.state.on});
        const units = this.state.time
            .format("HH:mm")
            .split('')
            .map((c, i) => <span key={i}>{c}</span>);

        return (
            <div className={className}>{units}</div>
        )
    };

    render() {
        return (
            <div className='focus-container'>
                {this.renderClock()}
                <div className='date'>{this.state.time.format('dddd, D MMMM')}</div>
                {/*<div className='intro'>How's it going, {this.state.name}?</div>*/}
            </div>
        );
    }
}