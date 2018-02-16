// config/server

// Move to .env

// export default { ... someday

module.exports = {
  name: 'Large Haddon Anti-Collider',
  version: '0.0.1',
  env: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 4000,
  base_url: process.env.BASE_URL || 'http://localhost:4000'
}
