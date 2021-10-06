
export function authUser(ar: any, inputLogin: any, inputPassword: any, dispatch: any, LogInAction: any) {
    const index = ar.findIndex( (item: any) =>  item.name === inputLogin  )
    if (index === -1) return console.log('пользователь не найден')
    if ( ar[index]?.rocket !== inputPassword) return console.log('неверный пароль')
    dispatch(LogInAction())
}


export function getItems (category: string, useGetAllShips: any, useGetAllRockets: any) {
    switch (category) {
        case 'ships': {
            return useGetAllShips()
        }
        case 'rockets': {
            return useGetAllRockets()
        }
        default:
            console.log('error in ItemListContainer')
    }
}

export function getItem (category: string, id: string, useGetShip: any, useGetRocket: any) {
    switch(category) {
        case 'ships': {
            return useGetShip(id)
        }
        case 'rockets': {
            return useGetRocket(id)
        }
        default:
            console.log('error in ItemInfo')
    }
}