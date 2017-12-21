// Hook for server
if (typeof require.ensure !== 'function') {
    require.ensure = function(dependencies, callback) {
        callback(require)
    }
}
import Layout from './layout/index'
import App from './containers/App'
import About from './containers/About'

const routes = {
    childRoutes: [{
        path: '/',
        component: Layout,
        indexRoute: {
            component: App
        },
        childRoutes: [{
            path: 'about',
            component: About
        }]
    }]
}

export default routes
