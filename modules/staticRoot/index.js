const devRoot = '../client/static/images'
//const prodRoot = '../static/images'
const prodRoot = '../public/static/images'
let currentRoot = prodRoot;

if(process.env.NODE_ENV === 'development') {
  currentRoot = devRoot;
}
export default currentRoot
