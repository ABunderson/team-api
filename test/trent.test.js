const fetch = require("node-fetch2");

it("Should get a name", async ()=>{

    const response = await fetch('http://localhost:3000/trent');

    const name = await response.text();

    expect(name).toBe("Hello Trent");

})