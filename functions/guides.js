exports.handler = async (event, context) => {
    const guides = [
        { title: 'Beat all Zelda Bosses Like a Boss', author: 'mario', id: 1 },
        { title: 'Mario Kart Shortcuts You Never Knew Existed', author: 'luigi', id:2 },
        { title: 'Ultimate Street Fighter Guide', author: 'chun-li', id: 3 },
    ]

    if (context.clientContext.user){

        return {
            statusCode: 200,
            body: JSON.stringify(guides)
        }
    }

    return {
        statusCode: 401,
        body: JSON.stringify({mssg: "Please login to view this"})
    }
}