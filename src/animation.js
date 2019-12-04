import { halo, outer_halo, inner_halo, mid_halo, output } from "./elements";

class Animations {
   slideDown() {
      halo.classList.add("slide-down");
      halo.classList.remove("slide-up");
      output.hide();
   }
}

const anim = new Animations();
export default anim;
