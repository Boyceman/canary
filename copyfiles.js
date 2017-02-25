/**
 * Created by boyce on 17-2-25.
 */
import copyfiles from 'copyfiles';

copyfiles([
  './client/index.html',
  './build'
], true, function () {
  console.log('index copied');
});