// config/server

module.exports = {
    name: 'Large Haddon Anti-Collider',
    var_name: 'largehaddonanticollider',
    version: '0.0.1',
    log_level: 'info',
    env: process.env.NODE_ENV || 'development',
    port: process.env.PORT || 3000,
    base_url: process.env.BASE_URL || 'http://localhost:3000'
}
