var config = {
  production: {
    dbname : {
      tablename: '****'
    }
  },
  default: {
    dbname : {
      tablename: '****'
    }
  }
}

exports.get = function get(env) {
  return config[env] || config.default;
}
