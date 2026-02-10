const { getHealthSnapshot } = require("../services/health.service");

const getHealth = (req, res) => {
  const health = getHealthSnapshot();

  res.status(200).json({
    success: true,
    data: health,
  });
};

module.exports = { getHealth };
