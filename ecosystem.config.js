module.exports = {
  apps : [
    {
      name: "ask",
      script: "./dist/app.js",
      watch: true,
      env_production: {
        "PORT": 80,
        "NODE_ENV": "production",
      }
    }
  ]
}
