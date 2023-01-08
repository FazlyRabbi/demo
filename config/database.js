module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'containers-us-west-55.railway.app'),
      port: env.int('DATABASE_PORT', 7428),
      database: env('DATABASE_NAME', 'railway'),
      user: env('DATABASE_USERNAME', 'postgres'),
      password: env('DATABASE_PASSWORD', 'g1iNCJ1Pe7qI9r2d4Q6C'),
      ssl: env.bool('DATABASE_SSL', false),
    },
  },
});
