import {defineConfig, type LayoutProps} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {Fragment, createElement, useEffect} from 'react'
import {useRouter} from 'sanity/router'

const invalidPerspectiveIds = new Set(['drafts', 'published'])

function PerspectiveParamGuard() {
  const router = useRouter()
  const currentPerspective = router.stickyParams?.perspective

  useEffect(() => {
    if (currentPerspective && invalidPerspectiveIds.has(currentPerspective)) {
      router.navigate({stickyParams: {perspective: null}, replace: true})
    }
  }, [currentPerspective, router])

  return null
}

const perspectiveParamGuardPlugin = {
  name: 'perspective-param-guard',
  studio: {
    components: {
      layout: (props: LayoutProps) =>
        createElement(
          Fragment,
          null,
          createElement(PerspectiveParamGuard),
          props.renderDefault(props),
        ),
    },
  },
}

export default defineConfig({
  name: 'default',
  title: 'The Rowan Center',

  projectId: 'rlwt7cpv',
  dataset: 'production',

  plugins: [structureTool(), visionTool(), perspectiveParamGuardPlugin],

  schema: {
    types: schemaTypes,
  },

  // Allow localhost development
  basePath: '/studio',
})
