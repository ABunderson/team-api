const fetch = require("node-fetch2");

it("Should get a name", async ()=>{

    const response = await fetch('http://localhost:3000/adrienne');

    const name = await response.text();

    expect(name).toBe("Hello Adrienne");

})