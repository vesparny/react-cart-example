import ReactTools from 'react-tools';

module.exports = {
  process: function(src) {
    return ReactTools.transform(src);
  }
};
