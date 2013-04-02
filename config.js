module.exports = {
  title    : 'Ryouiki',
  prefix   : '',
  secret   : '!N_D35U_W3_7RU$7~',
  salt     : '0P_I$_4_F46607!',
  host     : process.env.OPENSHIFT_APP_DNS || 'localhost',
  listen   : process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0',
  port     : Number(process.env.OPENSHIFT_NODEJS_PORT) || ((process.env.NODE_ENV == 'production') ? 80 : 3000),
  mongodb: {
    url    : process.env.OPENSHIFT_MONGODB_DB_URL,
    db     : 'ryouiki'
  }
};