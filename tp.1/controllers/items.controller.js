let items=[
    {id: 1, name: "huevos", price: "100"},
    {id: 2, name: "leche", price: "200"},
    {id: 3, name: "pan", price: "50"},
    {id: 4, name: "azucar", price: "150"},
];

export const getItems = (req, res)=>{
    res.json(items);
};

export const getItemById=(req, res)=>{
    const item = items.find((item)=> item.id === parseInt(req.params.id));
    if(!item){
        return res.status(404).json({msg: "Producto no encontrado, agregar o verificar id"});
        res.json(item);
    }
};

export const createItem = (req, res)=>{
    const {name, price} = req.body;
    nuevoId = items.length + 1;
    const nuevoProducto ={
        id:nuevoId,
        name: name,
        price: price
    };

    items.push(nuevoProducto);
    res.status(201).json({msg: "producto creado", nuevoProducto});
        
}

export const updateItem = (req, res ) => {
    const index = items.findIndex((items) => item.id === parseInt(req.params.id));
    if(index === -1){
        return res.status(404).json({msg: "producto no encontrado, crear o verificar"})
    }

    items[index] = {
        id: items[index].id,
        name: req.body.name,
        price: req.body.price
    };
    res.json({msg: "producto actualizado", items: items[index]});
};

export const deleteeItem = (req, res)=>{
    const index = items.findIndex((item)=> item.id === parseInt(req.params.id));
    if(index=== -1){
        return res.status(404).json({
            msg: "producto no encontrado, crear o verificar"
        })
    }
    items.slice(index, 1);
    res.json({msg: "producto eliminado con exito"});
}