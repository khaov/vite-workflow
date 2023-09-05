import { defineWorkflowConfig } from "@proleads/workflow";
import { visualizer } from "rollup-plugin-visualizer";

export default defineWorkflowConfig({
  vite: {
    plugins: [visualizer()],
  },
});
