const { build } = require("esbuild");
const sassPlugin = require("esbuild-plugin-sass");

build({
  entryPoints: ["src/index.tsx"],
  bundle: true,
  minify: true,
  sourcemap: true,
  outfile: "dist/bundle.js",
  loader: {
    ".tsx": "tsx",
  },
  plugins: [sassPlugin()],
  define: {
    "process.env.NODE_ENV": '"production"',
  },
  jsxFactory: "React.createElement",
  jsxFragment: "React.Fragment",
  inject: [`import React from 'react';`],
})
  .then(() => {
    build({
      entryPoints: ["src/index.tsx"],
      bundle: true,
      minify: true,
      sourcemap: true,
      outfile: "dist/bundle.js",
      loader: {
        ".tsx": "tsx",
      },
      plugins: [
        {
          name: "svg",
          setup(build) {
            build.onResolve({ filter: /\.svg$/ }, (args) => {
              return { path: args.path, namespace: "svg" };
            });

            build.onLoad(
              { filter: /\.svg$/, namespace: "svg" },
              async (args) => {
                const file = await fs.promises.readFile(args.path, "utf8");
                const contents = file
                  .replace(/"/g, '\\"')
                  .replace(/[\r\n]/g, "")
                  .replace(/<svg([^>]+)>/, "<svg$1 {...props}>");
                const contentsWithProps = contents.replace(
                  /<\/svg>/,
                  "<title>{props.title}</title></svg>"
                );
                return { contents: `export default "${contentsWithProps}"` };
              }
            );
          },
        },
      ],
      define: {
        "process.env.NODE_ENV": '"production"',
      },
      jsxFactory: "React.createElement",
      jsxFragment: "React.Fragment",
      inject: [`import React from 'react';`],
    });
  })
  .catch(() => process.exit(1));
