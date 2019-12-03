export const Utils = {
  get: (uri, callback) => {
    fetch(uri)
      .then(response => response.json())
      .then(responseJson => {
        callback({ type: "success", data: responseJson });
      })
      .catch(error => {
        callback({ type: "error", error: error });
      });
  }
};

module.export = {
  prefix: "www.qaptured.com/",
  getURL: function(k) {
    var _t = this;
    return _t.prefix + k;
  }
};
