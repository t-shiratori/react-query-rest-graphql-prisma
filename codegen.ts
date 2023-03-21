import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  overwrite: true,
  schema: 'pages/api/graphql/schema/index.ts',
  generates: {
    'pages/api/graphql/types/graphql.ts': {
      plugins: ['typescript', 'typescript-resolvers'],
      config: {
        mappers: {
          prismaUser: '@prisma/client/index.d#User',
        },
      },
    },
  },
}

export default config
