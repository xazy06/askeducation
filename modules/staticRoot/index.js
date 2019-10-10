const devRoot = '../client/static/images'
const prodRoot = '../static/images'
let currentRoot = prodRoot;

if(process.env.NODE_ENV !== 'production') {
  currentRoot = devRoot;
}
export default currentRoot
