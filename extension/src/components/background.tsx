import * as React from "react";
import {connect} from 'react-redux';

class Background extends React.Component<any, any> {
    render() {
        if (!this.props.artwork.details) {
            return <div>loading</div>;
        }

        return (
            <div className='background' style={{backgroundImage: `url(${this.props.artwork.details.urls.full})`}}>
                <div className='background-overlay'/>
            </div>
        )
    }
}

export default connect((state: any) => ({artwork: state.artwork}))(Background);