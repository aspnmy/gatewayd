var gateway = require(__dirname+'/../../../../');

module.exports = function(req, res) {

  gateway.api.listWithdrawals(function(err, withdrawals){
    if (err) {
      res.send(500, {error: err});
    } else {
      res.send({ withdrawals: withdrawals });
    }
  });
  
};

