import NetInfo, { NetInfoState } from '@react-native-community/netinfo';

type StatusHandler = (state: NetInfoState) => void;
export class NetworkListener {
  listeners: StatusHandler[] = [];

  constructor() {
    NetInfo.addEventListener(this.handleNetworkStatusChange.bind(this));
  }

  addListener(listener: StatusHandler) {
    this.listeners.push(listener);
  }

  removeListener(listener: StatusHandler) {
    const index = this.listeners.indexOf(listener);
    if (index >= 0) {
      this.listeners.splice(index, 1);
    }
  }

  async isOffline() {
    const state = await NetInfo.fetch();
    return !!state.isInternetReachable ?? true;
  }

  handleNetworkStatusChange(state: NetInfoState) {
    this.listeners.forEach(listener => {
      listener(state);
    });
  }
}
