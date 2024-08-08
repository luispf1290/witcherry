import dish  from  '../assets/waffles-witcherry.svg'

export interface propsDish {
    id: number,
    name: string,
    tipo:string,
    img:string,
    ingredientes: string[], 
    recomendaciones:string[]
}


export const dishElements: propsDish[] = [
    {
        id:1,
        name: 'Chocobanana',
        tipo: 'Dulce',
        img:dish,
        ingredientes: ['Platano', 'Fresas', 'Moras Azules', 'Miel'],
        recomendaciones: ['Cafe', 'Malteada', 'frape']
    },
    {
        id:2,
        name: 'Bosque Rojo',
        tipo: 'Dulce',
        img:dish,
        ingredientes: ['Platano', 'Fresas', 'Moras Azules'],
        recomendaciones: ['Cafe', 'Malteada', 'frape']
    },
    {
        id:3,
        name: 'Tentacion de Eva',
        tipo: 'Dulce',
        img:dish,
        ingredientes: ['Platano', 'Fresas', 'Moras Azules'],
        recomendaciones: ['Cafe', 'Malteada', 'frape']
    },
    {
        id:4,
        name: 'Brownie',
        tipo: 'Dulce',
        img:dish,
        ingredientes: ['Platano', 'Fresas', 'Moras Azules'],
        recomendaciones: ['Cafe', 'Malteada', 'frape']
    },
    {
        id:5,
        name: 'Caramelonions',
        tipo: 'dulce',
        img:dish,
        ingredientes: ['Platano', 'Fresas', 'Moras Azules'],
        recomendaciones: ['Cafe', 'Malteada', 'frape']
    },
    {
        id:6,
        name: 'Sangre de Bufalo',
        tipo: 'dulce',
        img:dish,
        ingredientes: ['Platano', 'Fresas', 'Moras Azules'],
        recomendaciones: ['Cafe', 'Malteada', 'frape']
    },
    {
        id:7,
        name: 'Wafsandwish',
        tipo: 'dulce',
        img:dish,
        ingredientes: ['Platano', 'Fresas', 'Moras Azules'],
        recomendaciones: ['Cafe', 'Malteada', 'frape']
    },
    {
        id:8,
        name: 'WaflePizza',
        tipo: 'dulce',
        img:dish,
        ingredientes: ['Platano', 'Fresas', 'Moras Azules'],
        recomendaciones: ['Cafe', 'Malteada', 'frape']
    },
]