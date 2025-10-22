    const { google } = require('googleapis');
    const credentials = require('../credentials.json');
    const auth = new google.auth.GoogleAuth({
        credentials,
        scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'], // Or 'spreadsheets' for write access
    });
    const sheets = google.sheets({ version: 'v4', auth });

    class ReadData {
    
        async readGoogleSheet(spreadsheetId, range) {
        try {
            const response = await sheets.spreadsheets.values.get({
                spreadsheetId,
                range, // e.g., 'Sheet1!A1:D10' or 'Sheet1'
            });
            return response.data.values; // Returns an array of arrays representing rows and columns
        } catch (err) {
            console.error('Error reading spreadsheet:', err);
            throw err;
        }
        }

    }

module.exports = {ReadData};