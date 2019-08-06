const mongoose = require('mongoose')

const Product = mongoose.model('Product')

module.exports = {
    async index(req, res){
        const products = await Product.find()

        return res.json(products);
    },

    //pesquisar produto pelo id
    async show(req, res) {
        const product = await Product.findById(req.params.id)

        return res.json(product);
    },

    async store (req, res) {

    //inserção de produtos no banco
    const product = await Product.create(req.body)

    return res.json(product);
},

//atualizar produto
async update(req, res){
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
        new: true
})

    return res.json(product)

},
//deletar produto
async destroy(req, res){
    await Product.findByIdAndRemove(req.params.id)

    return res.send()
}



}