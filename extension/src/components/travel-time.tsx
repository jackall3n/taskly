import * as React from "react";
import {DirectionsCar} from "@material-ui/icons";
import {IconButton} from "@material-ui/core";
import {connect} from "react-redux";
import {openSettings} from "../store/actions/settings";
import {TravelService} from "../services/travel.service";

class TravelTime extends React.Component<any, any> {
    travel_service = new TravelService();

    state = {
        distance: undefined,
        destination: 'home',
        departure_time: '17:30',
        directions: undefined,
        home: 'BN11 2ES',
        work: 'KT20 6RP'
    };

    componentWillMount(): void {
        this.updateTravelTime();
    }

    updateTravelTime = async () => {
        const travel = await this.travel_service.getTravelTime(this.state.work, this.state.home);

        this.setState({
            ...travel
        });

        return travel;
    };

    handleClick = () => {
        this.props.openSettings(1);
    };

    render() {
        if (!this.state.distance) {
            return null;
        }

        const map_link = `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(this.props.settings.travel.work)}&destination=${encodeURIComponent(this.props.settings.travel.home)}&travelmode=driving`;

        return (
            <div className='travel'>
                <div>
                    It will take you <span>{this.state.distance.rows[0].elements[0].duration_in_traffic.text}</span> to
                    get home, via <span>
                    <a className='link'
                       target='_blank'
                       href={map_link}>{this.state.directions.routes[0].summary}</a></span>
                </div>
                <IconButton className='icon' onClick={this.handleClick}>
                    <DirectionsCar/>
                </IconButton>
            </div>
        )
    }
}

export default connect((state : any) => ({ settings: state.settings }), {openSettings})(TravelTime)