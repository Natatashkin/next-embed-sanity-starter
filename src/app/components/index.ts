import AnimatedMap from "./blocks/AnimatedMap/AnimatedMap";
import HeroSlider from "./blocks/HeroSlider/HeroSlider";
import ProjectsSlider from "./blocks/ProjectsSlider/ProjectsSlider";

export const components: Record<string, React.FC<any>> = {
  heroSlider: HeroSlider,
  animatedMap: AnimatedMap,
  projectsSlider: ProjectsSlider,
};

export default components;
