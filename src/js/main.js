// Import our custom CSS
import "../scss/styles.scss";

// Import all of Bootstrap's JS
import * as bootstrap from "bootstrap";
import EmblaCarousel from "embla-carousel";
import { addDotBtnsAndClickHandlers } from "./EmblaCarouselDotButton.js";
import Autoplay from "embla-carousel-autoplay";

import "../scss/base.scss";
import "../scss/embla.scss";

const OPTIONS = { loop: true };

const emblaNode = document.querySelector(".embla");
const viewportNode = emblaNode.querySelector(".embla__viewport");
const dotsNode = emblaNode.querySelector(".embla__dots");

const emblaApi = EmblaCarousel(viewportNode, OPTIONS, [Autoplay()]);

const onNavButtonClick = (emblaApi) => {
  const autoplay = emblaApi?.plugins()?.autoplay;
  if (!autoplay) return;

  const resetOrStop =
    autoplay.options.stopOnInteraction === false
      ? autoplay.reset
      : autoplay.stop;

  resetOrStop();
};

const removeDotBtnsAndClickHandlers = addDotBtnsAndClickHandlers(
  emblaApi,
  dotsNode,
  onNavButtonClick
);

emblaApi.on("destroy", removeDotBtnsAndClickHandlers);
