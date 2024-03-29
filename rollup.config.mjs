import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import packagejson from "./package.json" assert { type: "json" };
import postcss from "rollup-plugin-postcss"
import sass from 'rollup-plugin-sass'
import typescript from "rollup-plugin-typescript2";

// const packagejson = require("./package.json");
export default [
    {
        input:"src/index.ts",
        output:[
            {
                file:packagejson.main,
                format:"cjs",
                sourcemap:true,
            },
            {
                file:packagejson.module,
                format:"esm",
                sourcemap:true,
            },
        ],
        plugins:[
            resolve(),
            commonjs(),
            typescript({tsconfig:"./tsconfig.json"}),
            postcss(),
            sass({ insert: true }),
        ]
    },
    {
        input:"dist/esm/types/index.d.ts",
        output:[{file:"dist/index.d.ts",format:"esm"}],
        plugins:[dts()],
        external:[/\.(css|scss)$/],
    }
]