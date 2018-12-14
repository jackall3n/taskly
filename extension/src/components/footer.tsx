import * as React from "react";
import {connect} from 'react-redux';
import {fetchArtwork} from "../store/actions/artwork";
import {RefreshRounded, Settings, Star} from "@material-ui/icons";
import {IconButton} from "@material-ui/core";
import classnames from 'classnames';
import {openSettings} from "../store/actions/settings";

class Footer extends React.Component<any, any> {

    renderLocation = () => {
        let location = "Loading...";
        let link = null;

        if (!this.props.artwork.loading) {
            location = this.props.artwork.details.location ? this.props.artwork.details.location.title : "Unknown";
            link = this.props.artwork.details.links.html;
        }

        return (
            <div>
                <IconButton color="inherit" className='icon-button'
                            onClick={() => this.props.fetchArtwork(true, this.props.settings.artwork.search)}>
                    <RefreshRounded/>
                </IconButton>
                <a className='link location' target="_blank" href={link}>{location}</a>
                <IconButton color="inherit" className='icon-button'
                            onClick={() => this.props.openSettings()}>
                    <Settings/>
                </IconButton>
            </div>
        )
    };

    renderTask = task => {

        return (
            <div key={task.id} className={classnames('task', {completed: task.completed})}>
                <Star color='secondary' style={{opacity : task.starred ? 1 : 0 }}/>
                <span className='title'>{task.title}</span>
            </div>
        )
    };

    renderTaskList = () => {
        if (this.props.tasks.loading) {
            return <div/>;
        }

        return (
            <div className='tasks'>
                {this.props.tasks.tasks.map(list => (
                    <div key={list.list_id}>
                        <div>{list.title}</div>
                        {list.tasks.map(this.renderTask)}
                    </div>
                ))}
            </div>
        );
    };

    render() {

        return (
            <div className='footer'>
                {this.renderLocation()}
                {this.renderTaskList()}
            </div>
        )
    }
}

export default connect((state: any) => ({
    artwork: state.artwork,
    tasks: state.tasks,
    settings: state.settings
}), {
    fetchArtwork,
    openSettings
})(Footer);