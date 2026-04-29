import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { apiVersion, dataset, projectId } from './src/sanity/env'
import { portfolio } from './src/sanity/schemas/portfolio'

export default defineConfig({
  basePath: '/studio',
  projectId,
  dataset,
  apiVersion,
  plugins: [structureTool()],
  schema: {
    types: [portfolio],
  },
})
