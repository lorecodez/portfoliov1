import {defineConfig} from 'sanity';
import {deskTool} from 'sanity/desk';
// import {visionTool} from '@sanity/vision'
import {apiVersion, dataset, projectId} from './sanity/env'
import {schema} from './sanity/schema';

const config = defineConfig({
    projectId: projectId,
    schema,
    dataset: dataset ,
    title: "portfolio-sanity",
    apiVersion: apiVersion,
    basePath: "/admin",
    plugins: [deskTool(), ]

})

export default config;