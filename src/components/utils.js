import { intcomma } from 'journalize';

const formatNumber = (num) => {
  return num > 0 ? intcomma(num) : 'Reach not available';
}

const mapColor = () => [
  [3, '#ffffe0'],
  [6, '#faad7b'],
  [9, '#949be1'],
  [12, '#616ccd'],
  [15, '#313fac'],
  // [18, '#001181']
];

export {
  formatNumber,
  mapColor
};
