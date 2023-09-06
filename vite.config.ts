import { pluginNunjucks, pluginPrepare, pluginSpritemap, presetWorkflowCompat } from "@proleads/workflow";
import postcssInlineSvg from "postcss-inline-svg";
import autoprefixer from "autoprefixer";
import { visualizer } from "rollup-plugin-visualizer";

export default presetWorkflowCompat({
  css: { postcss: { plugins: [postcssInlineSvg(), autoprefixer()] } },
  plugins: [pluginPrepare(), pluginNunjucks(), pluginSpritemap(), visualizer()],
});
