const TaskList = () => import('./components/task/List.vue' /* webpackChunkName: "resource/js/components/task/list" */)
const TaskEdit = () => import('./components/task/Edit.vue' /* webpackChunkName: "resource/js/components/task/edit" */)
const TaskCreate = () => import('./components/task/Add.vue' /* webpackChunkName: "resource/js/components/task/add" */)

export const routes = [

    {
        name: 'taskList',
        path: '/',
        component: TaskList
    },
    {
        name: 'taskEdit',
        path: '/task/:id/edit',
        component: TaskEdit
    },
    {
        name: 'taskAdd',
        path: '/task/add',
        component: TaskCreate
    }
]