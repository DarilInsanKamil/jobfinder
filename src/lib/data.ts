const fs = require("fs")
const fetchData = async () => {
    const res = await fetch(`https://dev-example.sanbercloud.com/api/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            email: "sharon12@gmail.com",
            password: "2132sharon123",
        }),
    });

    const datas = await res.json();
    fs.writeFileSync('./data.json', JSON.stringify(datas))
    return datas
}

console.log(fetchData())