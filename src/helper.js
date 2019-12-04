/**
 *
 * @param {String} selector css like selector
 */

export const $ = selector => {
   return document.querySelector(selector);
};
