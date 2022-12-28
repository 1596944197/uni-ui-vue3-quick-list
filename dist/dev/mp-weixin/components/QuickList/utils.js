"use strict";
const common_vendor = require("../../common/vendor.js");
const generate = (list) => {
  return common_vendor.reactive(list);
};
exports.generate = generate;
