module.exports = {
  useYarn: true,
  command: 'tsc --noEmit --project type-tests',
  scenarios: [
    {
      name: 'typescript-3.6',
      npm: {
        typescript: '~3.6',
      },
    },
    {
      name: 'typescript-3.7',
      npm: {
        typescript: '~3.7',
      },
    },
    {
      name: 'typescript-next',
      allowedToFail: true,
      npm: {
        devDependencies: {
          typescript: 'next',
        },
      },
    },
  ],
};
