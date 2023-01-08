module.exports = ({ env }) => ({
  connection: {
    client: 'mysql',
    connection: {
      host: env('DATABASE_HOST', 'containers-us-west-138.railway.app'),
      port: env.int('DATABASE_PORT', 7287),
      database: env('DATABASE_NAME', 'railway'),
      user: env('DATABASE_USERNAME', 'root'),
      password: env('DATABASE_PASSWORD', 'Lj8ODd3ReM1vazrBM2TT'),
      ssl: env.bool('DATABASE_SSL', false),
    },
  },
});
