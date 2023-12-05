import GrantRatesByOfficeImg from '../../../styles/Images/bar-graph-no-text.png';
import GrantRatesByNationalityImg from '../../../styles/Images/pie-chart-no-text.png';
import GrantRatesOverTimeImg from '../../../styles/Images/line-graph-no-text.png';

export const disparityInsights = [
  {
    id: 1,
    stat: '36%',
    description:
      'By the end of the Trump administration, the average asylum office grant rate had fallen 36 percent from an average of 44 percent in fiscal year 2016 to 28 percent in fiscal year 2020.',
  },
  {
    id: 2,
    stat: '5%',
    description:
      'The New York asylum grant rate dropped to 5 percent in fiscal year 2020.',
  },
  {
    id: 3,
    stat: '6x Lower',
    description:
      "Between Fiscal year 2017 and 2020, the New York asylum office's average grant rate was six times lower than the San Francisco asylum office.",
  },
];

export const graphsArr = [
  { src: GrantRatesByOfficeImg, alt: 'Search Grant Rates By Office' },
  { src: GrantRatesByNationalityImg, alt: 'Search Grant Rates By Nationality' },
  { src: GrantRatesOverTimeImg, alt: 'Search Grant Rates Over Time' },
];

export const downloadDataUrl =
  'https://humanrightsfirst.org/wp-content/uploads/2022/10/COW2021001887-I589Data.csv';
