module.exports = {
    gattDefs: {
        service: [
            { name: 'environServ', uuid: '0xbb50' },
            { name: 'buzzerServ', uuid: '0xbb60' }
        ],
        characteristic: [
            { name: 'gasMeasPeriod', uuid: '0xbb51', params: ['period'], types: ['uint8'] }
        ]
     },
     examine: function (periph, basicInfo) {
        var isMine = false;

        if (basicInfo.manufacturer === 'sivann' &&
            basicInfo.devName === 'Gas Sht Sensor' &&
            basicInfo.model === 'GasShtSensor' &&
            basicInfo.fwRev === 'v1.0.0' && 
            basicInfo.hwRev === 'v1.0.0' &&
            basicInfo.swRev === 'v1.0.0')
            isMine = true;

        return isMine;
    }
};