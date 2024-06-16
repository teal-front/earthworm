module.exports = {
  apps: [
    {
      name: 'earthworm_api',
      script: 'pnpm',
      args: 'start:prod',
      cwd: '.',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '60M',
      env: {
        // NODE_ENV: 'production',
      },
    },
  ],
};
