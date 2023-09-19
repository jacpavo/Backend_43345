export const swaggerOptions = {
    definition: {
        openapi: '3.0.1',
        info: { 
            title: 'Este es el titulo de Swagger',
            description: "Esta es la descripcion que va a figurar en la pagina principal de swagger"
        }
    },
    apis: ['src/docs/**/*.yaml']
}