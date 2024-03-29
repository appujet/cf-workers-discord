export default function (response) {
    return new Response(JSON.stringify(response), {
        headers: { "content-type": "application/json" },
    });
}
//# sourceMappingURL=respond.js.map