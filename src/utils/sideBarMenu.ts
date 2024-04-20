
export const sideBarMenus = (role: string) => {
    const sideMenu = []

    switch (role) {
        case 'admin':
            sideMenu.push(
                {   
                    title : 'products',
                    path : 'products'
                },
                {
                    title : 'Add products',
                    path : 'products/add-product'
                },
                {
                    title : 'Order Management',
                    path : 'order'
                },
            )
            break;
        case 'user':
            sideMenu.push({
                title : 'My Order',
                path : 'my-orders'
            })

        default:
            break;
    }
    return [...sideMenu]
}