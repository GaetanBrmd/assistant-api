import ns from 'node-schedule';
import jobs from '../jobs/jobs';

export default () => {
  // ns.scheduleJob('*/1 * * * *', jobs.sampleJob1);
  // ns.schedule('* 10 * 5',jobs.sampleJob2);

  console.log('Jobs loaded 🔥 !');
};
