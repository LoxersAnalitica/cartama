export default async function handler(req, res) {
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
    res.setHeader(
        'Access-Control-Allow-Headers',
        'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
    );

    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }

    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }

    try {
        const data = req.body;
        
        const leadName = `Lead Solares Cártama - ${data.name}`;
        
        const noteText = `
          📌 NUEVO LEAD SOLARES CÁRTAMA:
          Nombre: ${data.name}
          Teléfono: ${data.phone}
          Email: ${data.email}
          ¿Cuenta con 110.000€?: ${data.hasFunds}
        `.trim();

        const kommoToken = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjNkY2E0OGQyNDQzNThmMDE0OGRhZGQzM2MxM2NhMzg1YTcxZGVjMDRkZmQzMTVmNzQxOGY1ODAxOTEwYWYwMjI2NzgwMzllOGRhZjVlNzJmIn0.eyJhdWQiOiI3YzljOWU0Yy05ZTFjLTQ0YWEtYjY1Mi0zNWIwZTAwY2RhOWUiLCJqdGkiOiIzZGNhNDhkMjQ0MzU4ZjAxNDhkYWRkMzNjMTNjYTM4NWE3MWRlYzA0ZGZkMzE1Zjc0MThmNTgwMTkxMGFmMDIyNjc4MDM5ZThkYWY1ZTcyZiIsImlhdCI6MTc3NDM2NTA1MSwibmJmIjoxNzc0MzY1MDUxLCJleHAiOjE5MDY0MTYwMDAsInN1YiI6IjE0OTE2Mzk1IiwiZ3JhbnRfdHlwZSI6IiIsImFjY291bnRfaWQiOjM2MTczNzExLCJiYXNlX2RvbWFpbiI6ImtvbW1vLmNvbSIsInZlcnNpb24iOjIsInNjb3BlcyI6WyJwdXNoX25vdGlmaWNhdGlvbnMiLCJmaWxlcyIsImNybSIsImZpbGVzX2RlbGV0ZSIsIm5vdGlmaWNhdGlvbnMiXSwiaGFzaF91dWlkIjoiYmYwYzM3ZTItZDI0ZS00NzFmLTg3ZjAtNGZlNTQ5MmI5NjU3IiwiYXBpX2RvbWFpbiI6ImFwaS1jLmtvbW1vLmNvbSJ9.QDtrQqYG1YJ-8A4Kr1VhlRdF2mgcy0sVEUL8HpSMiAshKue_yf7-nJFtir_3pQRAcIqyuodS116z8bWtKjYT6scvI0xpnhJ-i6GfbM4upiCExuIqUJ7TJCKFRPROGKjVg2ji-6wdrqrwDWifpSL4NmiS49XbH6XDYvKhsta4JguxOhoqgawZhxpdh3y9aANQPknob5l4DygP0yC7_2hhzfQiuyQocY5ai2b01chw6U7FVxelCiW0K_ZXBZf2IxYOTAD-o_CedIGUjJ2nKgynd7ne1N4l-m74XPpO2V2PDlmoFMZUsBBFAAMxqzJ1orGkF-O8afj-naeggbWcBfAEXQ";

        const kommoPayload = [
            {
                "name": leadName,
                "pipeline_id": 13961440,
                "_embedded": {
                    "tags": [
                        { "name": "Solares Cártama" },
                        { "name": data.hasFunds === 'Sí' ? "Con Fondos" : "Sin Fondos" }
                    ],
                    "contacts": [
                        {
                            "name": data.name
                        }
                    ]
                }
            }
        ];

        const kommoPromise = fetch('https://pedropablocastro1995.kommo.com/api/v4/leads/complex', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${kommoToken}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(kommoPayload)
        });

        const kommoResponse = await kommoPromise;

        if (kommoResponse.ok || kommoResponse.status === 200 || kommoResponse.status === 201) {
            try {
                const responseData = await kommoResponse.json();
                const leadId = responseData[0].id;
                
                await fetch(`https://pedropablocastro1995.kommo.com/api/v4/leads/notes`, {
                    method: 'POST',
                    headers: {
                        'Authorization': `Bearer ${kommoToken}`,
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify([{
                        "entity_id": leadId,
                        "note_type": "common",
                        "params": { "text": noteText }
                    }])
                });
            } catch (err) {
                console.error("Warning: Failed to attach note", err);
            }

            return res.status(200).json({ success: true });
        } else {
            const errText = await kommoResponse.text();
            console.error("Kommo API Error:", errText);
            return res.status(kommoResponse.status).json({ error: 'Error del CRM', details: errText });
        }
    } catch (err) {
        console.error("Local Server Error:", err);
        return res.status(500).json({ error: 'Error interno del servidor' });
    }
}
