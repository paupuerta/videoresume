import { library } from "@fortawesome/fontawesome-svg-core";
import { fas, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { fab, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import FontAwesomeIcon from "@/libs/FontAwesomeIcon.vue";

library.add(fas, fab, faEnvelope, faTwitter, faInstagram);

export { FontAwesomeIcon };