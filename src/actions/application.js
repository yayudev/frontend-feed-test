export class ApplicationActions {
  static TOGGLE_SIDENAV = "application/TOGGLE_SIDENAV";
  static toggleSidenav() {
    return { type: ApplicationActions.TOGGLE_SIDENAV };
  }

  static CLOSE_DETAIL = "application/CLOSE_DETAIL";
  static closeDetail() {
    return { type: ApplicationActions.CLOSE_DETAIL };
  }

  static FETCH_DATA = "application/FETCH_DATA";
  static fetchData() {
    return { type: ApplicationActions.FETCH_DATA };
  }

  static DATA_FETCH_SUCCESS = "application/DATA_FETCH_SUCCESS";
  static dataFetchSuccess(data) {
    return { type: ApplicationActions.DATA_FETCH_SUCCESS, payload: data };
  }

  static DATA_FETCH_FAIL = "application/DATA_FETCH_FAIL";
  static dataFetchFail(error) {
    return { type: ApplicationActions.DATA_FETCH_FAIL, payload: error };
  }
}