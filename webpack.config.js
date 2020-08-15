const path= require('path');//ubicacion de donde estamos en la carpeta, sea local o web
const HtmlWebpackPlugin=require('html-webpack-plugin');//necesario para trabajar con html
const { resolve } = require('path');

module.exports={
    entry:'./src/index.js',
    output:{
        path:path.resolve(__dirname,'dist'), //la carpeta donde se colocara el codigo listo
        filename:'main.js' //este va a ser el archivo en produccion
    },
    resolve:{
        extensions:['.js'], //extensiones con las que voy a trabajar
    },
    module:{
        rules:
        [
            {
                test: /\.js?$/, //para que babel filtre los archivos que se van a estar usando
                exclude: /node_modules/, //excluir la carpeta
                use: {
                    loader:'babel-loader',

                }
            } 
        ]
    },
    plugins:[
        new HtmlWebpackPlugin([{
            inject:true,
            template:'./public/index.html',
            filename:'./index.html'
        }])
    ]
}
