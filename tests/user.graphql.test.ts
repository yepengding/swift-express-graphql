/**
 * User GraphQL Test Cases
 *
 * @author Yepeng Ding
 */
import {App} from "../src/app";
import request from "supertest";
import * as http from "http";
import * as process from "process";

describe('User GraphQL tests', () => {

    let server: http.Server;

    before(() => {
        const app = new App();
        server = app.run();
    })

    after(() => {
        server.close();
        process.exit(0);
    })

    it('GetUsers', async () => {
        const queryData = {
            query:
                `query GetUsers {
                      getUsers {
                        id
                        username
                        firstname
                      }
                }`
        };

        await request("http://localhost:8000/graphql")
            .post("/")
            .send(queryData)
            .expect('Content-Type', /json/)
            .expect(200);
    });
});
