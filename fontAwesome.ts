/* import the fontawesome core */
import { library, config, type IconDefinition } from "@fortawesome/fontawesome-svg-core";

/* import specific icons */
import { faFaceSmile } from "@fortawesome/free-regular-svg-icons/faFaceSmile";
import { faFaceAngry } from "@fortawesome/free-regular-svg-icons/faFaceAngry";
import { faFaceMeh } from "@fortawesome/free-regular-svg-icons/faFaceMeh";

config.autoAddCss = false;

/* add icons to the library */
library
	.add(
		...[
			faFaceAngry,
			faFaceMeh,
			faFaceSmile
		] as IconDefinition[]
	);
