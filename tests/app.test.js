const request = require("supertest");
const app = require("../app");

describe("CI/CD IBM Project", () => {

    test("Health check should return healthy status", async () => {
        const response = await request(app).get("/health");

        expect(response.statusCode).toBe(200);
        expect(response.body.status).toBe("healthy");
    });

});