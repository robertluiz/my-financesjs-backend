import BillingCycle from './billingCycle';
import constants from '../../config/constants';
import '../../utils/extensions';
import errorHandler from '../common/errorHandler';

BillingCycle.methods(constants.HTTP_METHODS);
BillingCycle.updateOptions({ new: true, runValidators: true });
BillingCycle.after('post', errorHandler).after('put', errorHandler);

BillingCycle.route('count', (req, res) => {
  BillingCycle.count((error, value) => {
    if (error) {
      res.status(500).json({ erros: [error] });
    } else {
      res.json({ value });
    }
  });
});

BillingCycle.route('summary', (req, res) => {
  BillingCycle.aggregate([
    { $project: { credit: '$credits.value', debt: '$debts.value' } },
  ], (error, result) => {
    if (error) {
      res.status(500).json({ errors: [error] });
    } else {
      const FinalResult = result.concatMap((billingCycle) => {
        const credit = billingCycle.credit.reduce((cred, cur) => cred + cur);
        const debt = billingCycle.debt.reduce((deb, cur) => deb + cur);
        return { credit, debt };
      }).reduce((obj, cur) => {
        const d = obj.debt + cur.debt;
        const c = obj.credit + cur.credit;
        return { credit: c, debt: d };
      });

      res.json(FinalResult || { credit: 0, debt: 0 });
    }
  });
});


export default BillingCycle;
