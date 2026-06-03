module.exports = {
  '**/*.{ts,tsx}': [
    'eslint --fix',
    'prettier --write'
  ],
  '**/*.css': [
    'prettier --write'
  ],
  'prisma/schema.prisma': [
    'prisma format'
  ]
}
