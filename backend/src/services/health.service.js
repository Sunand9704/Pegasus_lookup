const getHealthSnapshot = () => {
  return {
    status: "ok",
    uptime: process.uptime(),
    timestamp: new Date().toISOString(),
  };
};

module.exports = { getHealthSnapshot };
