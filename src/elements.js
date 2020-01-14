/**
 * @param {String} query selector
 */

const $ = selector => {
   return document.querySelector(selector);
};

export const halo = $(".halo"),
   about_dialog = $(".about-dialog"),
   about_button = $(".about-btn"),
   output_element = $("#output-element"),
   input_field = $("#input"),
   mic = $("#mic"),
   submit = $("#submit"),
   close_button = $(".close-btn");
