// frontend/src/components/ComponentA.js
import SharedFunction from '../../shared/utils';

function ComponentA() {
  // ... component logic using SharedFunction
  return null;
}

export default ComponentA;

// backend/src/routes/route.js
import SharedFunction from '../../shared/utils';

function routeHandler() {
  // ... route logic using SharedFunction
}

export default routeHandler;

// shared/utils.js
function SharedFunction() {
  // ... shared utility function
}

export default SharedFunction;