import {makeAutoObservable} from "mobx";

class NextStore {

    globalLoad = false;
    load = false;
    viewLoader = true;

    locoScroll = null;

    pageFullLoad = false;

    constructor() {
        makeAutoObservable(this);
    }

    setGlobalLoaded = () => this.globalLoad = true;

    setLoaded = (val) => this.load = val;

    setViewLoader = (val) => this.viewLoader = val;

    setLocoScroll = (val) => this.locoScroll = val;

    setPageFullLoad = (val) => this.pageFullLoad = val;
}

export default NextStore;