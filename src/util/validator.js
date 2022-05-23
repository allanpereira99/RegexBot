function validator(ctx) {
  try {
    let regex = /^s\/(\w+(\ )+|\w+){1,}\/(\w+(\ )+|\w+){1,}(\/g|)$/g;
    if (ctx.match(regex)) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    console.log(e);
  }
}
module.exports = validator;