class sed {
  static replace(exp, text) {
    let args = exp.split("/");
    return new Promise((resolve) => {
      resolve(text.replace(...args));
    });
  }
  static replaceAll(exp, text) {
    let args = exp.split("/");
    return new Promise((resolve) => {
      resolve(text.replaceAll(...args));
    });
  }
}
module.exports = sed;
