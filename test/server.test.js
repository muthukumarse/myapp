let server = require("../server");
let chai = require("chai");
let chaiHttp = require("chai-http");

// Assertion 
chai.should();
chai.use(chaiHttp); 

describe('Server APIs', () => {
    describe("Test GET route /", () => {
        it("It should show Hello World", (done) => {
            chai.request(server)
                .get("/")
                .end((err, response) => {
                    response.should.have.status(200);
                    response.text.should.be.eql('Hello World');
                    response.text.length.should.not.be.eq(0);
                    done();
                });
        });
    });

    describe("Test GET route /version", () => {
        it("It should show have Version Meta data object", (done) => {
            chai.request(server)
                .get("/version")
                .end((err, response) => {
                    response.should.have.status(200);
                    response.body.should.be.a('object');
                    response.body.should.have.property('version');
                    response.body.should.have.property('build_sha');
                    response.body.should.have.property('description').eq('version meta data');
                    done();
                });
        });
    });
});