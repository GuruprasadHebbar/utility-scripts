const copy = require('copy-dynamodb-table').copy;

const sourceTable = '${sourceTable}';
const destinationTable = '${destinationTable}';

const awsConfig = {
    accessKeyId: '${accessKeyId}',
    secretAccessKey: '${secretAccessKey}',
    region: 'us-east-1'
};

copy({
    source: {
        tableName: sourceTable,
        config: awsConfig
    },
    destination: {
        tableName: destinationTable,
        config: awsConfig
    },
    log: true, // Optional, enable logging
    create: false // Optional, create destination table if not exist
}, (err, result) => {
    if (err) {
        console.error('Copy failed:', err);
    } else {
        console.log('Copy successful:', result);
    }
});
