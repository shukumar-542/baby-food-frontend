
export const sideBarMenus = (role: string) => {
    const sideMenu = []

    switch (role) {
        case 'admin':
            sideMenu.push(
                {
                    title: 'products',
                    path: 'products'
                },
                {
                    title: 'Add products',
                    path: 'products/add-product'
                },
                {
                    title: 'Order Management',
                    path: 'orders'
                },
            )
            break;
        case 'user':
            sideMenu.push(
                {
                    title : 'Dashboard',
                    path : 'my-dashboard'
                },
                {
                    title: 'My Order',
                    path: 'my-orders'
                },
                {
                    title : 'Profile',
                    path : 'my-profile'
                }
            )

        default:
            break;
    }
    return [...sideMenu]
}