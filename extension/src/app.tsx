import * as React from 'react';
import {connect} from 'react-redux';

import Background from "./components/background";
import Footer from "./components/footer";
import {Focus} from "./components/focus";
import {Header} from "./components/header";
import {fetchArtwork} from "./store/actions/artwork";
import {fetchTasks} from "./store/actions/tasks";
import Settings from "./components/settings";

class App extends React.Component<any, any> {
    componentWillMount(): void {
        this.props.fetchArtwork(false, this.props.settings.artwork.search);
        this.props.fetchTasks(this.props.settings.task_list.lists);
    }

    render() {
        return (
            <React.Fragment>
                <Background/>

                <Header/>
                <Focus/>
                <Footer/>
                <Settings/>

            </React.Fragment>
        )
    }
}

export default connect((state: any) => ({
    settings: state.settings
}), {
    fetchArtwork,
    fetchTasks
})(App);