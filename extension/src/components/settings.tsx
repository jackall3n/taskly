import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    Tabs,
    Tab,
    TextField,
    List, ListItem, Checkbox, ListItemText
} from "@material-ui/core";

import * as React from "react";
import * as _ from 'lodash';
import {connect} from "react-redux";
import {closeSettings, setSettingsTab, updateTravel, updateArtwork, toggleTaskList} from "../store/actions/settings";

class Settings extends React.Component<any, any> {
    handleChange = (event, value) => {
        this.props.setSettingsTab(value);
    };

    handleClose = () => {
        this.props.closeSettings();
    };

    toggleTaskList = list_id => () => {
        this.props.toggleTaskList(list_id);
    };

    renderTaskList = () => {
        if (this.props.settings.tab !== 0) {
            return null;
        }

        const lists = _.orderBy(this.props.tasks.lists, 'title');

        return (
            <React.Fragment>
                <List>
                    {lists.map(list => (
                        <ListItem key={list.id} role={undefined} dense button onClick={this.toggleTaskList(list.id)}>
                            <Checkbox
                                checked={this.props.settings.task_list.lists.indexOf(list.id) >= 0}
                                tabIndex={-1}
                                disableRipple
                            />
                            <ListItemText primary={list.title}/>
                        </ListItem>
                    ))}
                </List>
            </React.Fragment>
        )
    };

    setTravel = name => event => {
        this.props.updateTravel(name, event.target.value)
    };

    setArtwork = name => event => {
        this.props.updateArtwork(name, event.target.value)
    };

    renderTravelTime = () => {
        if (this.props.settings.tab !== 1) {
            return null;
        }

        return (
            <React.Fragment>
                <TextField
                    id="home"
                    label="Home"
                    margin="normal"
                    onChange={this.setTravel('home')}
                    value={this.props.settings.travel.home}
                />
                <TextField
                    id="work"
                    label="Work"
                    margin="normal"
                    onChange={this.setTravel('work')}
                    value={this.props.settings.travel.work}
                />
            </React.Fragment>
        )
    };

    renderArtwork = () => {
        if (this.props.settings.tab !== 2) {
            return null;
        }

        return (
            <React.Fragment>
                <TextField
                    id="search"
                    label="Search"
                    margin="normal"
                    onChange={this.setArtwork('search')}
                    value={this.props.settings.artwork.search}
                />
            </React.Fragment>
        )
    };

    render() {
        return (
            <Dialog
                open={this.props.settings.open}
                onClose={this.handleClose}
                aria-labelledby="scroll-dialog-title"
            >
                <Tabs
                    value={this.props.settings.tab}
                    indicatorColor="primary"
                    onChange={this.handleChange}
                    textColor="primary"
                    centered
                >
                    <Tab label="Task List"/>
                    <Tab label="Travel Time"/>
                    <Tab label="Artwork"/>
                </Tabs>
                <DialogContent>
                    {this.renderTaskList()}
                    {this.renderTravelTime()}
                    {this.renderArtwork()}
                </DialogContent>
                <DialogActions>
                    <Button onClick={this.handleClose} color="primary">
                        Save
                    </Button>
                </DialogActions>
            </Dialog>
        )
    }
}

const stateProps = (state: any) => ({settings: state.settings, tasks: state.tasks});
const dispatchProps = {closeSettings, setSettingsTab, updateTravel, updateArtwork, toggleTaskList};

export default connect(stateProps, dispatchProps)(Settings);