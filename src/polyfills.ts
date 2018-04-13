import 'core-js/es6';
// import 'core-js/es7/reflect';
window['__Zone_enable_cross_context_check'] = true;

if (process.env.ENV === 'production') {
  // Production
} else {
  // Development and test
  Error['stackTraceLimit'] = Infinity;
}