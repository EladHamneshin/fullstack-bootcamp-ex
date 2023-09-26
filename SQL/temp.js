const { Client } = require("pg")


const config = {
    user: "postgres",
    database: "northwind ",
    host: "localhost",
    password: "*********",
    port: "5432",
}

const connectDb = async () => {
    try {
        const client = new Client(config)
        await client.connect()
        const query = "SELECT product_id,  SUM(quantity) FROM order_details GROUP BY product_id"
        const res = await client.query(query)
        console.log(res.rows)
        await client.end()
    } catch (error) {
        console.log(error)
    }
}
 
connectDb()
